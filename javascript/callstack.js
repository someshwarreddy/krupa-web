// function tenth() {alert() }

// function ninth() { tenth() }

// function eigth() { ninth() }

// function seventh() { eigth() }

// function sixth() { seventh() }

// function fifth() { sixth() }

// function fourth() { fifth() }

// function third() { fourth() }

// function second() { third() }

// function first() { second() }

// first();

function first() {
    function second() {
        function third() {
            function fourth() {
                function fifth() {
                    console.log('5')
                }
                fifth();
                console.log('4')
            }
            fourth();
            console.log('3')
        }
        third();
        console.log('2')
    }
    second();
    console.log('1')
}
first();
b();
a();
function a(){
    console.log('a')
}
function b(){
    console.log('b')
}


var a=2;
var b=5;
var c= 100;

if (c==1001){
    console.log('i am block of if statement value 10');
}
else if(c==99){
    console.log(' i am else if block value 100');
}
else {
    console.log(' i am else  value 1000');
}
var discount= false;

if(discount) {
    console.log('288');
}
else {
    console.log(1300)
}
                    //true                      // false
//(condition) ? (variable = Expression2) : (variable = Expression3);

discount ? console.log(1000) : console.log(2000);