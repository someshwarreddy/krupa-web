window.onload = function () {
    userdetails()
}


async function userdetails() {
    var id = localStorage.getItem("id")
    url = `https://fakestoreapi.com/products/+${id}`
    getdata = await fetch(url)
    if (!getdata.ok) {
        throw new Error(`${getdata.status}`);
    }
    let data = await getdata.json();
   console.log(data.title)
}
