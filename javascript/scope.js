// global scope 

var varglobalValue= 'i am global';
let letglobalValue = ' i am let global'
console.log(letglobalValue);

// function scope
// var always function scoped 
function named() {
    var varfumctionValue= 'i am var functionvalue';
    var varglobalValue= 'i am function re assgined value ';
    console.log(varglobalValue);
    console.log(varfumctionValue);  
};
const a ="name";
 a=10;
var unnamed = function() {
    var varfumctionValue = 'i am var functionvalue';
    let varglobalValue= 'i am function re assgined value ';
    console.log(varfumctionValue); 
    console.log(varglobalValue); 
}
console.log(varfumctionValue);
console.log(varglobalValue);
named();
unnamed();
console.log(varglobalValue);
console.log(varglobalValue);
console.log(letglobalValue);

// blockscope

// let block scoped

{
    let letglobalValue= 'i am let blockvalue';
    var blockscope = " i am var avialible to outside of block scope"
    console.log(letglobalValue);  
}

console.log("letblockvalue "+ blockscope); 

console.log(letglobalValue);