//  Array of objects
let products = [
    {
        brand: "Nike",
        name: "Orange max",
        price: 2999,
        colour: "Orange",
        image: "./images/background image.jpg"
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
let checkOutButton = document.querySelectorAll(".buttons");
let details = document.querySelector(".card-text").innerHTML;
let nameOfProduct = document.querySelector(".card-title").innerHTML;
let btn = document.querySelector(".clickMe");
// Checkout event listener
checkOutButton.forEach( value => {
    value.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Successfully added to your checkout")
        console.table(checkOut);
        console.log(e.currentTarget.id);
    })
})


// function checkClickedProduct() {
//     if(checkOutButton[0]){
//         document.querySelector("#checkoutInfo").innerHTML =  
//     }
// }


// checkOutButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     alert("Successfully added to your checkout")
//     checkOut.push(nameOfProduct)
//     checkOut.push(details)
//     // console.log(checkOut);
//     display.innerHTML = checkOut
//     console.table(checkOut)
//     // document.write(checkOut)

// });

