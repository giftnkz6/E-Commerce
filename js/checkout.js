
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
    name: "Air Force 1 '07",

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
    name: "Air Max Plus 3x",
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
    name: "Superstar sneaker",
    price: 1384,
    colour: "White",
    image: "https://i.postimg.cc/kMvP9vyL/Adidas-White-Superstar.jpg"
},
{
    id: 9,
    brand: "Puma",
    name: "RV future vintage",
    price: 1384,
    colour: "Orange",
    image: "https://i.postimg.cc/sgfRP4rG/Rider-FV-future-vintage.jpg"
},
{
    id: 10,
    brand: "Puma",
    name: "Slipstream-mid-trainers",
    price: 1384,
    colour: "White",
    image: "https://i.postimg.cc/Ls1YRpbp/Slipstream-mid-trainers.jpg"
},
{
    id: 11,
    brand: "Puma",
    name: "ST runner v3",
    price: 1384,
    colour: "Black",
    image: "https://i.postimg.cc/x1RYzFNz/Puma-black-sneaker.jpg"
},
{
    id: 12,
    brand: "Puma",
    name: "Calcas Puma trainer",
    price: 1384,
    colour: "Grey",
    image: "https://i.postimg.cc/V6P3Zqt8/Puma-Grey-sneaker.jpg"
},

];

// (function checks() {
//     products.forEach((sneaker)=>{
//         document.querySelector("#checkout-list").innerHTML = ` 
//         <tr>
//                     <td>${sneaker.image}</td>
//                     <td>${sneaker.name}</td>
//                     <td>R${sneaker.price}</td>
//                     <td>R${sneaker.price}</td>

                  
//                   </div></td>
//                   </tr>
        
//         `
//     })
// })();
