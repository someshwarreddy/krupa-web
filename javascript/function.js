

(function () {
    console.log('hi i am iife function');
   })();

//  function declatations or named function

function krupa () {
    console.log('hi i am krupa');
}

krupa(); // function call or function invoke;


var a = ' argument';
let b = {name:'krupa'};
const c = [2]

function parm(x,y,z){ // here is parameter
    // console.log(x,y,z);

    // console.log(`i am ${x},`, `i am object ${y}`, `i am array ${z}`) // template literal
    return 1
}

// parm('i am arugument', 'age', 33); // arguments

// parm (a, b, c) // arguments

console.log(parm(a,b,c))

// iife function immediately innvoked function



// function expression or unnamed function

const unnamed = function(x) {
    // console.log('i am unnammed function', x)
     return  1033;
};

// unnamed(a);
console.log(unnamed(a))
// arrow function;

const arrow = x => 10;

// arrow()
console.log(arrow())


