(function () {
    productsAll()
})()

var products;
let serchitem = document.querySelector('.btn');

async function productsAll() {
    try {
        let getdata = await fetch('https://fakestoreapi.com/products');
        if (!getdata.ok) {
            throw new Error(`${getdata.status}`);
        }
        let data = await getdata.json();
        products = data;
        allusers(data);
    }
    catch (error) {
        //  function calling
        errorhandler(error);
    }
}

//  function defination
function allusers(data) {
    let cardContent = "";
    let products = document.getElementById('products');
    data.forEach(element => {
        console.log(element)
        cardContent += `
        <div class="card mt-4 ms-4 border-info " style="width: 18rem;">
      <img src="${element.image}" class="card-img-top" alt="${element.title}">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <a href="topbrands.html" class="btn btn-primary">details</a>
      </div>
    </div>`
  
        products.innerHTML = cardContent;
    });

}

let searchvalue = "";

let searchTermcheck = document.querySelector('.form-control');
searchTermcheck.addEventListener('blur', (e) => {
    e.preventDefault();
    if (searchvalue !== "") {
        allusers(products)
    }
})

serchitem.addEventListener('click', (e) => {
    e.preventDefault()
    let searchTerm = document.querySelector('.form-control').value;
    searchvalue = searchTerm;
    document.querySelector('.form-control').value = searchTerm;
    let fiterarray = products.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase()) || element.id === +searchTerm);
    allusers(fiterarray);
})

function errorhandler(error) {
    alert(error)
}