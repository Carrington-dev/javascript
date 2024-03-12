# Javascript
JavaScript Tutorial For Beginners in React

## JavaScript Notes

1. Javascipt is weakly typed or dynamically typed meaning users don't have to specify the type on declaration

2. Statically vs. dynamically typed
Statically-typed programming languages do type checking (i.e., the process of verifying and enforcing the constraints of types on values) at compile-time, whereas dynamically-typed languages do type checks at runtime.

Examples
Statically-typed: C, C++, Java.

Dynamically-typed: Perl, Ruby, Python, PHP, JavaScript.


Strongly vs. weakly typed
Weakly-typed languages make conversions between unrelated types implicitly; whereas, strongly-typed languages don’t allow implicit conversions between unrelated types.

Python is a strongly-typed language:

```python
var = 21            #type assigned as int at runtime.
var = var + "dot"    #type-error, string and int cannot be concatenated.
print(var)
```

JavaScript is a weakly-typed language:

```javascript
value = 21;             
value = value + "dot";
console.log(value);
/*
This code will run without any error. As Javascript
is a weakly-typed language, it allows implicit conversion
between unrelated types.
*/
```