let products = [
    {
        brand: "Nike",
        name: "Orange max",
        price: 2999,
        colour: "Orange"
    },
    {
        brand: "Nike",
        name: "Orange max",
        price: 2999,
        colour: "Black"
    },
    {
        brand: "Nike",
        name: "Orange max",
        price: 2999,
        colour: "Red"
    },
    {
        brand: "Nike",
        name: "Orange max",
        price: 2999,
        colour: "Purple"
    }
]

localStorage.setItem("products", JSON.stringify(products))
document.querySelector("#checkoutInfo").innerHTML = localStorage.getItem("brand")
let listOfProducts = localStorage.getItem("products")
console.table(listOfProducts);

