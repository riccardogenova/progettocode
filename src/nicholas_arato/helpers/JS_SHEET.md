<!-- @format -->

# **JavaScript Cheat Sheet**

## Table of Contents

1. [Variables](#1-variables)
2. [Data Types](#2-data-types)
3. [Operators](#3-operators)
4. [Control Structures](#4-control-structures)
5. [Functions](#5-functions)
6. [Objects](#6-objects)
7. [Arrays](#7-arrays)
8. [DOM Manipulation](#8-dom-manipulation)
9. [Asynchronous JavaScript](#9-asynchronous-javascript)
10. [Error Handling](#10-error-handling)
11. [Common Methods](#11-common-methods)

---

### 1. Variables

Variables are used to store data values. In JavaScript, variables can be declared using `var`, `let`, or `const` keywords.

- `var`: Declares a variable with function scope. Variables declared with `var` can be reassigned and re-declared within the same function.

- `let`: Declares a block-scoped variable. Variables declared with `let` can be reassigned but not re-declared within the same block.

- `const`: Declares a block-scoped constant. Variables declared with `const` cannot be reassigned or re-declared.

Variables can store various types of data, including numbers, strings, booleans, arrays, objects, and functions.

### 2. Data Types

JavaScript has several primitive and non-primitive data types.

- **Primitive Types:** Data types that are immutable and directly stored in memory.

  - `number`: Represents numeric values (e.g., `5`, `3.14`).
  - `string`: Represents textual data (e.g., `"Hello, world"`).
  - `boolean`: Represents logical values `true` or `false`.
  - `null`: Represents the absence of any value.
  - `undefined`: Represents the value of uninitialized variables.

- **Non-Primitive Types:** Data types that are composed of multiple values or are objects.
  - `object`: Represents a collection of key-value pairs.
  - `function`: Represents reusable blocks of code.
  - `array`: Represents a collection of elements.

JavaScript is a dynamically typed language, meaning variables can hold values of any data type, and the data type of a variable can change during the execution of the program.

### 3. Operators

Operators are used to perform operations on variables and values.

- **Arithmetic Operators:** Used to perform arithmetic operations.

  - `+`: Addition
  - `-`: Subtraction
  - `*`: Multiplication
  - `/`: Division
  - `%`: Modulus (remainder of division)

- **Comparison Operators:** Used to compare values.

  - `==`: Equal to
  - `===`: Strictly equal to (checks both value and type)
  - `!=`: Not equal to
  - `!==`: Strictly not equal to
  - `>`: Greater than
  - `<`: Less than
  - `>=`: Greater than or equal to
  - `<=`: Less than or equal to

- **Logical Operators:** Used to combine multiple conditions.

  - `&&`: Logical AND
  - `||`: Logical OR
  - `!`: Logical NOT

- **Assignment Operators:** Used to assign values to variables.

  - `=`: Assign value
  - `+=`: Add and assign
  - `-=`: Subtract and assign
  - `*=`: Multiply and assign
  - `/=`: Divide and assign
  - `%=`: Modulus and assign

- **Ternary Operator:** A shorthand for `if...else` statement.
  - `condition ? expr1 : expr2`: If `condition` is true, evaluates `expr1`, otherwise evaluates `expr2`.

JavaScript also supports bitwise operators (`&`, `|`, `^`, `<<`, `>>`, `>>>`) for performing bitwise operations on integers.

### 4. Control Structures

Control structures are used to control the flow of execution in a program.

- **if...else Statement:** Executes a block of code if a specified condition is true, otherwise executes another block of code.

```javascript
if (condition) {
  // Code block to execute if condition is true
} else {
  // Code block to execute if condition is false
}
```

- **switch Statement:** Evaluates an expression and executes a block of code based on matching cases.

```javascript
switch (expression) {
  case value1:
    // Code block
    break;
  case value2:
    // Code block
    break;
  default:
  // Code block
}
```

- **for Loop:** Executes a block of code a specified number of times.

```javascript
for (initialization; condition; increment / decrement) {
  // Code block to be executed
}
```

- **while Loop:** Executes a block of code while a specified condition is true.

```javascript
while (condition) {
  // Code block to be executed
}
```

- **do...while Loop:** Similar to `while` loop, but executes the block of code at least once before checking the condition.

```javascript
do {
  // Code block to be executed
} while (condition);
```

- **for...in Loop:** Iterates over the properties of an object.

```javascript
for (variable in object) {
  // Code block to be executed
}
```

- **for...of Loop:** Iterates over the values of an iterable object (e.g., arrays, strings).

```javascript
for (variable of iterable) {
  // Code block to be executed
}
```

### 5. Functions

Functions are blocks of code designed to perform a specific task. They are reusable and can accept parameters and return values.

- **Function Declaration:** Declares a named function.

```javascript
function functionName(parameters) {
  // Code block
}
```

- **Function Expression:** Assigns a function to a variable.

```javascript
const functionName = function(parameters) {
    //

 Code block
};
```

- **Arrow Function:** A shorthand syntax for defining functions.

```javascript
const functionName = parameters => {
  // Code block
};
```

Functions in JavaScript are first-class citizens, meaning they can be passed as arguments to other functions, returned from functions, and assigned to variables.

### 6. Objects

Objects are used to store collections of key-value pairs.

- **Object Literal:** An object can be defined using curly braces `{}`.

```javascript
const person = {
  name: 'John',
  age: 30,

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

- **Accessing Object Properties:** Properties of an object can be accessed using dot notation (`person.name`) or bracket notation (`person['name']`). The dot notation is commonly used when the property name is a valid identifier (e.g., does not contain spaces or special characters), whereas bracket notation is more flexible and can handle any property name.

- **Adding and Deleting Properties:** Properties can be added or deleted from an object using dot notation or bracket notation. To add a new property, simply assign a value to a new property name using dot notation. To delete a property, use the `delete` keyword followed by the property name.

```javascript
person.city = 'New York'; // Adding a new property
delete person.age; // Deleting an existing property
```

The dot (.) operator is used to access properties and methods of an object. It provides a convenient syntax for accessing members of an object, making the code more readable and concise.

### 7. Arrays

Arrays are used to store multiple values in a single variable.

- **Array Literal:** An array can be defined using square brackets `[]`.

```javascript
const fruits = ['apple', 'banana', 'orange'];
```

- **Accessing Array Elements:** Elements of an array can be accessed using index notation (`fruits[0]`). JavaScript arrays are zero-indexed, meaning the first element has an index of 0.

- **Modifying Arrays:** Arrays in JavaScript are mutable, meaning elements can be added, removed, or modified after the array is created. Common array methods include `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `reverse`, `sort`.

### 8. DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. JavaScript can be used to manipulate the DOM, allowing dynamic interaction with web pages.

- **Selecting Elements:** Elements in the DOM can be selected using various methods (`getElementById`, `querySelector`, `querySelectorAll`).

- **Modifying HTML Content:** The `innerHTML` property can be used to modify the HTML content of an element.

- **Adding/Removing CSS Classes:** The `classList` property can be used to add or remove CSS classes from an element.

### 9. Asynchronous JavaScript

Asynchronous JavaScript enables non-blocking execution of code, allowing tasks to be performed concurrently without waiting for each other to complete.

- **Promises:** Promises represent the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous operations in a more manageable way.

### 10. Error Handling

Error handling in JavaScript allows for graceful handling of runtime errors.

- **try...catch Statement:** The `try...catch` statement is used to catch exceptions that occur within a block of code.

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

### 11. Common Methods

JavaScript provides a variety of built-in methods for performing common tasks.

- **String Methods:** Methods for working with strings (`charAt`, `concat`, `indexOf`, `substring`, `toUpperCase`, `toLowerCase`, `trim`, `split`, `replace`).

- **Array Methods:** Methods for working with arrays (`push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `reverse`, `sort`, `indexOf`, `includes`, `forEach`, `map`, `filter`, `reduce`).

- **Math Methods:** Methods for mathematical operations (`Math.random`, `Math.floor`, `Math.ceil`, `Math.max`, `Math.min`, `Math.round`, `Math.pow`, `Math.sqrt`).

- **Date Methods:** Methods for working with dates (`new Date()`, `getDate`, `getMonth`, `getFullYear`, `getHours`, `getMinutes`, `getSeconds`, `getMilliseconds`, `getTime`, `setDate`, `setMonth`, `setFullYear`, `setHours`, `setMinutes`, `setSeconds`, `setMilliseconds`, `toDateString`, `toTimeString`, `toLocaleString`, `toLocaleDateString`, `toLocaleTimeString`, `toString`).
