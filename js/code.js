//  Array of objects
let products = JSON.parse(localStorage.getItem("products")) ? 
    JSON.parse(localStorage.getItem("products")) : [
    {
        id: 1,
        brand: "Nike",
        name: "Air VaporMax Plus",
        price: 1908,
        colour: "Orange",
        image: "https://i.postimg.cc/T1SRHLDT/Nike1.jpg"
    },
    {
        id: 2,
        brand: "Nike",
        name: "Nike Air Force 1 '07",
        price: 2799,
        colour: "Black",
        image: "https://i.postimg.cc/pybdL5Xq/Nike-Air-Force-01.webp"
    },
    {
        id: 3,
        brand: "Nike",
        name: "Air Jordan 1 mid",
        price: 2000,
        colour: "Red",
        image: "https://i.postimg.cc/qRRJpVyb/Nike-Air-Jordan-1.jpg"
    },
    {
        id: 4,
        brand: "Nike",
        name: "Nike Air Max Plus 3x",
        price: 3599,
        colour: "Purple",
        image: "https://i.postimg.cc/13sZ91ZG/Nike4.webp"
    },
    {
        id: 5,
        brand: "Adidas",
        name: "Neo entrap-mid",
        price: 2299,
        colour: "Grey",
        image: "https://i.postimg.cc/XqXBgYNb/Adidas-Neo-entrap-mid.jpg"
    },
    {
        id: 6,
        brand: "Adidas",
        name: "Sabalo youth sneakers",
        price: 1199,
        colour: "Grey",
        image: "https://i.postimg.cc/QCts9B8p/Adidas-Grey-sabalo-youth-sneakers.jpg"
    },
    {
        id: 7,
        brand: "Adidas",
        name: "Tensaur running shoes",
        price: 599,
        colour: "Black",
        image: "https://i.postimg.cc/3xCKqQc0/Adidas-tensaur-black.webp"
    },
    {
        id: 8,
        brand: "Adidas",
        name: "Adidas Superstars",
        price: 1384,
        colour: "Whites",
        image: "https://i.postimg.cc/kMvP9vyL/Adidas-White-Superstar.jpg"
    }
]

function showSneakers () {
    products.forEach((sneaker)=>{
        document.querySelector(".product-wrapper").innerHTML += ` 
        <div class= "col-lg-3 col-md-4 col-sm-12">
        <div class="card" style="width: 14rem;">
            <img src= "${sneaker.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${sneaker.name}</h5>
                <p class="card-text">${sneaker.colour}</p>
                <p class="card-text">R${sneaker.price}</p>
        
                <button class="buttons">Add to Checkout</button>
            </div>
        </div>    

        </div>
        
        `
    })
    // product.forEach(sneakers => {
    //     document.querySelector("#products").innerHTML +=`
    //     <div class="row">
    //         <div class="col">
    //             <div class="card" style="width: 14rem;">
    //                 <img src= "${sneakers.image}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                   <h5 class="card-title"> ${sneakers.name}</h5>
    //                   <p class="card-text">${sneakers.colour}</p>
    //                   <p class="card-text">${sneakers.price}</p>
                
    //                   <button class="buttons">Checkout</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // })
};
showSneakers();
// Sort Method
// let sortedProducts = products.sort((a,b) => {
//     if(a.name < b.name){
//         return -1;
//     }
//     else if(a.name > b.name){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// })
// console.log(sortedProducts);




let checkOutButton = document.querySelectorAll(".buttons");

// Checkout button event listener
checkOutButton.forEach( value => {
    value.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Successfully added to your checkout")
        console.log(e.currentTarget.id);
    })
})

// Admin
function adminData() {
    products.forEach((sneaker) => {
        document.querySelector(".table").innerHTML += `
        <tbody>
          <tr>
            <th scope="row">${sneaker.id}</th>
            <td>${sneaker.brand}</td>
            <td>${sneaker.name}</td>
            <td>${sneaker.colour}</td>
          </tr>
          <tr>
        </tbody>
        `
    })
}
console.log(adminData());

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

