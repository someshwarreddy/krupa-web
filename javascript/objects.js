person = {
    name: 'somesh',
    play: 'cricket',
    age: 60
}

// .notation 
// bracket notation

//person.name // . notation
// bracket notaion

function vehicle(name) {
    const obj = {};
    obj.name = name;
    obj.vname = function () {
        console.log(`Hi! I'm bus ${this.name}.`);
    }
    return obj;

}



let bus = vehicle('bus')
console.log(bus.vname());

function a() {
    return {
        name: [],
        value: {}
    };
}
var b = a();
console.log(b.name)

let pr = new Promise((resolve, reject) => {

    if (true) {
       console.log( resolve(fetch('https://jsonplaceholder.typicode.com/posts/1')))

    }

    //reject('i am failed to fetch api ')
    //resolve(' iam success full');
   // resolve(' iam success full two');
   // resolve(' iam success full three');
   // reject('i am failed block');

})
pr.then((result) => {
    console.log(result);
})

