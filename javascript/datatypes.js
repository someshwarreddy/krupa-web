// variables var , let , const

// datatypes

// number

// Primitive Data Types
// 1. *Number*: Represents both integer and floating-point numbers.
   
   let age = 25;
   let temperature = 98.6;
   console.log(age)
   

// 2. *String*: Represents textual data.
   
   let namee = "Alice";
   let greeting = 'Hello, world!';
   console.log(namee)
   

// 3. *Boolean*: Represents true or false values.
   
   let isActive = true;
   let isLoggedIn = false;
   console.log(isActive)

// 4. *Null*: Represents the intentional absence of any object value.
   
   let emptyValue = null;
   console.log(typeof(emptyValue))

// 5. *Undefined*: Indicates that a variable has not been assigned a value.
   
   let unassigned;
   console.log( typeof(unassigned))


// 6. *Symbol*: A unique and immutable primitive value, often used to identify object properties uniquely.
   
   let symbol = Symbol('description');
   

// 7. *BigInt*: Represents whole numbers larger than \(2^{53} - 1\).
   
   let bigIntNumber = 1234567890123456789012345678901234567890n;
   

// ### Non-Primitive Data Types

// 1. *Object*: A collection of properties, where each property is a key-value pair.
   
   let person = {
     name: "John",
     age: 30,
     isEmployed: true
   };
   console.log(typeof(person));

// 2. *Array*: An ordered list of values.
   
   let fruits = ["apple", "banana", "cherry"];
   console.log(typeof(fruits));

// 3. *Function*: A block of code designed to perform a particular task.
   
   function greet() {
     return "Hello, world!";
   }
   console.log(typeof(greet));

// 4. *Date*: Represents dates and times.
   
   let now = new Date();
   

// 5. *Map*: A collection of keyed data items, like an object but with more flexible keys.
   
   let map = new Map();
   map.set('key1', 'value1');
   

// 6. *Set*: A collection of unique values.
   
   let set = new Set();
   set.add(1);
   set.add(2);
   
// - *Type Coercion*: javascript often converts values between types automatically.
// - *Type Checking*: Use typeof operator to check data types.
   
    console.log(typeof age); // "number"
    console.log(typeof namee); // "string"
   
