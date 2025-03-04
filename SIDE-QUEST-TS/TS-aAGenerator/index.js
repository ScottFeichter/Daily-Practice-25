require('colors');
const fs = require('fs');
const path = require('path');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const CATEGORIES = fs.readdirSync('./categories')
  .filter(dir => fs.statSync(path.join("./categories", dir)).isDirectory());
const PROBLEM_SET_DIR_PREFIX = "practice-problem-set-";
const PROBLEM_SET_DIR_NAME = PROBLEM_SET_DIR_PREFIX + getProblemSetNum();

class InputError extends Error {
  constructor(message) {
    super(message || "Invalid Input. Please submit a valid input:".red);
    this.name = "InputError";
  }
}

function excludeCategories(except) {
  const categories = except
    .slice("except:".length)
    .split(",")
    .map(category => category.trim());
  findInvalidCategories(categories);
  const validCategories = CATEGORIES.filter(
    category => !categories.includes(category)
  );
  makeProblemSet(validCategories);
  console.log(
    "Created a problem set that has all problems in all categories except:".green
  );
  console.group();
  console.log("- ".green + categories.map(category => category.cyan).join("\n- ".green));
  console.groupEnd();
  return true;
}

function findInvalidCategories(categories) {
  const invalidCategories = [];
  for (let category of categories) {
    if (!CATEGORIES.includes(category)) invalidCategories.push(category);
  }
  if (invalidCategories.length) {
    throw new InputError(
      "Invalid categories: ".red + invalidCategories.join(", ").red
    );
  }
}

function findInvalidProblemNums(problemsPerCategory) {
  for (let [category, problemNum] of problemsPerCategory) {
    const num = Number(problemNum);
    if (isNaN(num) && problemNum !== "all") throw new InputError(
      `Invalid number of problems for ${category}: ${problemNum}`.red
    );
  }
}

function getProblemSetNum() {
  let nextNumberStr = "00";
  const otherProblemSets = fs.readdirSync("../").filter(dir => {
    const dirPath = path.join("../", dir);
    return fs.statSync(dirPath).isDirectory() && dir.startsWith(PROBLEM_SET_DIR_PREFIX)
  }).sort();
  if (otherProblemSets.length) {
    const lastProblemSet = otherProblemSets[otherProblemSets.length - 1];
    const nextNumber = Number(lastProblemSet.slice(PROBLEM_SET_DIR_PREFIX.length)) + 1;
    nextNumberStr = "";
    if (nextNumber < 10) nextNumberStr += "0"
    nextNumberStr += nextNumber.toString();
  }
  return nextNumberStr;
}

function includeAllCategories() {
  makeProblemSet(CATEGORIES);
  console.log(
    "Created a problem set that has all problems in all categories".green
  );
  return true;
}

function includeSomeProblemsInCertainCategories(answer) {
  const problemsPerCategory = answer
    .split(",")
    .map(ele => ele.trim())
    .map(ele => ele.split(":").map(ele => ele.trim()));
  findInvalidCategories(problemsPerCategory.map(([category]) => category));
  findInvalidProblemNums(problemsPerCategory);
  for (let i in problemsPerCategory) {
    let [category, problemNum] = problemsPerCategory[i];
    const problemFiles = fs.readdirSync(`./categories/${category}/problems`);
    if (problemNum === "all") problemNum = problemFiles.length;
    problemsPerCategory[i][1] = Math.min(problemNum, problemFiles.length);
  }
  makeProblemSet(problemsPerCategory);
  console.log(
    "Created a problem set that has randomized problems:".green
  );
  console.group();
  console.log(
    problemsPerCategory
      .filter(ele => ele[1] > 0)
      .map(ele => {
        ele[0] = ele[0].cyan;
        ele[1] += ele[1] === 1 ? " problem " : " problems";
        return ele.reverse().join(" of the ").green + " category".green;
      })
      .join("\n")
  );
  console.groupEnd();
  return true;
}

function listCategories() {
  console.group();
  console.log("");
  console.log("Available categories:")
  console.log(CATEGORIES.join("\n").cyan);
  console.log("");
  console.groupEnd();
}

function makeProblemSet(validCategories) {
  const problemSetDirName = PROBLEM_SET_DIR_NAME;
  fs.mkdirSync(`../${problemSetDirName}`);
  fs.mkdirSync(`../${problemSetDirName}/problems`);
  fs.mkdirSync(`../${problemSetDirName}/test`);
  recurseFiles("./templates", (file) => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const relativePath = path.relative("./templates", file);
    fs.copyFileSync(file, path.join(`../${problemSetDirName}`, relativePath));
  });
  for (let category of validCategories) {
    if (typeof category === "string") {
      recurseFiles(`./categories/${category}`, (file) => {
        fs.mkdirSync(path.dirname(file), { recursive: true });
        const relativePath = path.relative(`./categories/${category}`, file);
        fs.copyFileSync(file, path.join(`../${problemSetDirName}`, relativePath));
      });
    } else {
      let problemNum;
      [category, problemNum] = category;
      const problemFiles = shuffle(
        fs.readdirSync(`./categories/${category}/problems`)
      ).slice(0, problemNum);
      for (let file of problemFiles) {
        file = path.join(`./categories/${category}/problems`, file);
        const specFile = path.join(`./categories/${category}/test`, path.parse(file).name + "-spec.js");
        const relativePath = path.relative(`./categories/${category}/problems`, file);
        const relativeSpecPath = path.relative(`./categories/${category}/test`, specFile);
        fs.copyFileSync(file, path.join(`../${problemSetDirName}/problems`, relativePath));
        fs.copyFileSync(specFile, path.join(`../${problemSetDirName}/test`, relativeSpecPath));
      }
    }
  }
}

async function processAnswer(answer, rl) {
  if (answer === "list") {
    listCategories();
    return await prompt(rl, "list");
  }
  if (answer === "all") {
    if (includeAllCategories()) return;
  } else if (answer.startsWith("all,")) {
    let except = answer.split("all,")[1];
    if (except) except = except.trim();
    if (except.startsWith("except:")) {
      if (excludeCategories(except)) return;
    }
  } else {
    if (includeSomeProblemsInCertainCategories(answer)) {
      return;
    }
  }
  throw new InputError();
}

async function prompt(rl, inputError = null) {
  if (inputError !== "list") {
    console.log("");
    console.group();
    console.log(
      "Input the categories and the number of problems for each category",
      "\nthat you want in the generated problem set. Separate the category",
      "\nand number of problems by commas and spaces.",
      "\nExample input: " + "intro-to-arrays: 2, basic-loops: 1, nested-loops: all".yellow
    );
    console.log("");
    console.log(
      "If you would like ALL problems from ALL categories, then input:",
      "\nall".yellow
    );
    console.log("");
    console.log(
      "If you'd like all problems, EXCEPT certain categories, then input 'all'",
      "\nfollowed by ', except: category'.",
      "\nExample input:",
      "all, except: bonus".yellow
    );
    console.log("");
    console.log(
      "To list all categories, input:",
      "\nlist".yellow
    );
    console.groupEnd();
    console.log("");
    if (inputError) {
      console.log(inputError.message);
    }
  }
  const answer = (await rl.question('> '.yellow)).trim();
  try {
    await processAnswer(answer, rl);
  } catch (err) {
    if (err instanceof InputError) {
      await prompt(rl, err);
    } else {
      throw err;
    }
  }
}

function recurseFiles(dirPath, cb) {
  fs.readdirSync(dirPath).forEach(fileName => {
    const filePath = path.join(dirPath, fileName);
    if (fs.statSync(filePath).isDirectory()) return recurseFiles(filePath, cb);
    cb(filePath);
  });
}

// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

(async function() {
  const rl = readline.createInterface({ input, output });
  console.log("");
  console.log("Welcome to a/A's Practice Assessment Generator".cyan);
  console.log("");
  console.log(
    "This generator will create a practice test based on your input.",
    "\nYou can choose how many problems from each category to include in your test.",
  );
  console.log("");
  console.log(
    "This program will generate a folder called",
    PROBLEM_SET_DIR_NAME.blue,
    "at the\nsame level of this folder."
  );
  await prompt(rl);
  console.log("");
  console.log(
    "1.",
    "cd".yellow,
    "out of this folder and into the",
    PROBLEM_SET_DIR_NAME.blue,
    "folder."
  );
  console.log(
    "2.",
    "Open the",
    PROBLEM_SET_DIR_NAME.blue,
    "folder in VS Code.",
    "In the\n  ",
    PROBLEM_SET_DIR_NAME.blue,
    "folder, you should see two folders called",
    "\n   problems".blue,
    "and",
    "test".blue + "."
  );
  console.log(
    "3.",
    "Implement the problems in the",
    "problems".blue,
    "folder and run",
    "npm install".yellow,
    "to test."
  )
  console.log("");
  rl.close();
})();