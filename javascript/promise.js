// function a () {
//     for (i=0; i<10; i++){
//       alert(i) ;
//     }
// }
//  function b (parm) {
//     setTimeout(parm, 1000)
//     parm();

//  }
//  b(a)
//  console.log('i am synchronous');
let fetchedpromise = fetch('https://jsonplaceholder.typicode.com/posts/2');

var pro = new Promise((resolve, reject) => {
    if (false) {
        resolve(' i am excuted correct');
    }
    else {
        reject(' i am failed');
    }
})

pro.then(data => {
    console.log(data);
})
    .catch(e => {
        console.log(e)
    })
function testPromise() {
    event.stopPropagation()
    fetchedpromise.then((response) => new Promise((resolve, reject) => {
        if (response.status !== 200) {
            reject(new Error(`something is not right!: ${response.status}`));
        }
        resolve(response.json())
    }))
        .then((data) => {
            console.log(data)
        })
        .catch((error) => { console.log(error) })


}

function fetchData1() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(`There was an error: ${error}`));
}


async function fetchData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
fetchData1();
fetchData2();
const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);