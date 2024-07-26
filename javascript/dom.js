const btn = document.getElementById("make-promise");
const log = document.querySelector('.log') // single class target
console.log(log);

btn.addEventListener('click', (event) => {
    console.log(event)
    log.innerHTML = "i am krupa";
});