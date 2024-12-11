# Create an immut var id num, immut var id str1, str2, str3, immut var id bools, immut var id char, immut var floats. Create an mut var id count. Create a fn id isString to return true false if arg is a string. Create a fn with no return that increments count if the arg is a string. Print all the vars and print count before and after checking all the vars.

# side note - the declare command has some useful options including for scoping

readonly declare -i num=3;
readonly str1="str1"
readonly str2="str2"
readonly str3="str3"
readonly bools=0;
readonly char="c";
readonly floats=32.32;

declare -i count=0;

function isString() {
    # it may be time to start using python and/or js for shell needs(?) - see note below
    # could be helpful: https://www.youtube.com/watch?v=vjjT8senDEQ
    # (contains more good reasons to use javascript/node and teaches how for shell)
}

# per stack overflow:

# Bash doesn't have types in the same way as Python (although I would say that Python has classes rather than types). But bash variables do have attributes that are given (mostly) through declare, but the range of attributes is fairly small. You can find an attribute using declare -p, for example, declare -i creates an integer:

# declare -i num
# num=42
# declare -p num
# Gives:

# declare -i num="42"
# But this is a poor feature compared to Python, or almost any modern language. The problem is that in something like Bash the basic type is a text string, and that's fine if all you need is text strings for things like filenames. But once you start needing to do heavy processing you need other types. Bash doesn't support floating point, for example. You also need compound types, like a class describing a file with all the attributes that a file can have.

# Bash 4 does have associative arrays (declare -A), similar to Python dictionaries, which extends functionality considerably.

# Even so, most would agree that Object Orientation is pretty much impossible in Bash, although some would argue that it can be done in Korn shell (which has much more powerful features). http://en.wikipedia.org/wiki/Object-oriented_programming

# What bash has is fine for what it is meant for - simple processing that is quick and easy to get working. But there is a critical mass beyond which using such a language becomes unwieldy, error prone, and slow. That critical mass can be one of scale, i.e. large amount of data, or complexity.

# There is no simple cut-off point where you should stop using Bash and switch to Python. Its just that as programs get more complex and larger the case for using Python gets stronger.

# I should add that shell scripts rarely get smaller and less complex over time!
