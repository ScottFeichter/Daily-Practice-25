
A pointer is a general concept for a variable that contains an address in memory.

References are a kind of pointer indicated by the & symbol and borrow the value they point to.


Smart pointers, on the other hand, are data structures that act like a pointer but also have additional metadata and capabilities.


Though we didn’t call them as such at the time, we’ve already encountered a few smart pointers in this book, including String and Vec<T> i


Box<T> for allocating values on the heap
Rc<T>, a reference counting type that enables multiple ownership
Ref<T> and RefMut<T>, accessed through RefCell<T>, a type that enforces the borrowing rules at runtime instead of compile time
