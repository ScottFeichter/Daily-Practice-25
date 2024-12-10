// Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

// problems:
// how to make an arg not type specific...
// how to use type(of:...) with equality

let num: Int = 3;
let str1: String = "str1";
let str2: String = "str2";
let str3: String = "str3";
let bools: Bool = false;
let char: Character = "c";
let floats: Float = 32.32;

var count: Int = 0;

func isString(param: Any) -> Bool {
    if type(of: param) == String {
        return true
    }
    return false;
}

func incrementCount(param: Any) -> Void {
    if isString(param) {
        count+=1;
    }
}

func printType(param: Any) -> Void {
    print(param);
}

print(num, str1, str2, str3, bools, char, floats, count);

printType(num);
printType(str1);
printType(str2);
printType(str3);
printType(bools);
printType(char);
printType(floats);


incrementCount(num);
incrementCount(str1);
incrementCount(str2);
incrementCount(str3);
incrementCount(bools);
incrementCount(char);
incrementCount(floats);

print("final count: \(count)");
