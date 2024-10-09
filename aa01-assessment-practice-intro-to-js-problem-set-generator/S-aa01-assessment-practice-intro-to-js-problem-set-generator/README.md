# Intro to JavaScript Problem Set Generator

This is a practice test generator to prepare for your first assessment.

This tool can help you get comfortable with the types of problems that could pop
up on an assessment. Note that its purpose is **NOT** to help you memorize
solutions. Memorizing solutions without understanding them may get you by in the
short-term, but it will never be worth it in the long run. Practice thinking and
struggling through these problems so that you are agile enough to tackle
anything that you might see on assessment day.

## How to use this generator

**WARNING: Do not push this generator or any of the generated problem sets to
GitHub. This generator is licensed and owned by App Academy.**

Download this generator. Navigate to its root directory in the terminal and
install dependencies:

```sh
npm install
```

Run the generator:

```sh
node index.js
```

The problems in the generator are separated by category. To list all the
categories available in the generator, input the following:

```sh
> list
```

To generate a problem set, you can use three different types of inputs:

1. Generate a problem set with specific categories and a randomized number of
   problems in each category.
   - For example, this input will generate a problem set with 4 random problems
     from `intro-to-functions`, 5 random problems from `basic-loops`, and all
     problems from `nested-loops`:

     ```sh
     > intro-to-functions: 4, basic-loops: 5, nested-loops: all
     ```

2. Generate a problem set with all problems in all categories:

   ```sh
   > all
   ```

3. Generate a problem set with all problems except the problems from select
   categories:
   - For example, this input will generate a problem set with all problems
     in all categories except the `bonus` category:

     ```sh
     > all, except: bonus
     ```

   - For example, this input will generate a problem set with all problems
     in all categories except the `intro-functions`, `conditionals`, and `bonus`
     categories:

     ```sh
     > all, except: intro-to-functions, conditionals, bonus
     ```

The generated practice problem set will be at the same level in your file
structure as the generator.

```plaintext
.
├── intro-to-js-problem-set-generator/
└── practice-problem-set-00/
```

Navigate to the generated practice problem set and open it in VS Code. Read the
__README.md__ file inside of the practice problem set folder for instructions on
how to set up and run the specs.

**IMPORTANT: Do not modify any of the __problems__ or __test__ directories in
the generator.** The files in these directories are used to generate the problem
sets. Changing them could break the generator.
