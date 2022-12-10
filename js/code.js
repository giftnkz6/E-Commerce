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

]

function showSneakers () {
    products.forEach((sneaker)=>{
        document.querySelector(".product-wrapper").innerHTML += ` 
        <div class= "col-lg-3 col-md-4 col-sm-6">
        <div class="card" style="width: 14rem;">
            <img src= "${sneaker.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${sneaker.brand}</h5>
                <p class="card-text">${sneaker.name}</p>
                <p class="card-text">${sneaker.colour}</p>
                <p class="card-text">R ${sneaker.price}</p>
        
                <button class="buttons">Add to Checkout</button>
            </div>
        </div>    

        </div>
        
        `
    })
};
showSneakers();





let checkOutButton = [...document.querySelectorAll(".buttons")];
let counter = 0;
let array = {

}



// Checkout button event listener
let checkoutArray = [];
localStorage.setItem('checkoutStore', JSON.stringify(checkoutArray))
Object.keys(checkOutButton).forEach( value => {
    checkOutButton[value].addEventListener("click", (e) => {
        e.preventDefault()
        console.log(products[value])
        checkoutArray.push(products[value])
        console.log(checkoutArray)
        localStorage.setItem('checkoutStore', JSON.stringify(checkoutArray))
        // alert("Successfully added to your checkout")
        // console.log(e.currentTarget.id);
        // counter += 1;
        
    })
    
})


let colorScreen=() => document.querySelector("#colour").value;

function filter() {
    
    if(colorScreen() == "Black"){
        let blackFilter = products.filter((color) => {
            return color.colour == "Black"
        })
        console.table(blackFilter);
        document.querySelector(".product-wrapper").innerHTML =``
        blackFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div style="border-top: 2px solid black;"></div>
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    
    else if(colorScreen() == "White"){
        let whiteFilter = products.filter((color) => {
            return color.colour == "White"
        })
        console.table(whiteFilter);
        document.querySelector(".product-wrapper").innerHTML =``
        whiteFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    else if(colorScreen() == "Orange"){
        let orangeFilter = products.filter((color) => {
            return color.colour == "Orange"
        })
        console.table(orangeFilter);
        document.querySelector(".product-wrapper").innerHTML =``
        orangeFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    else if(colorScreen() == "Red"){
        let redFilter = products.filter((color) => {
            return color.colour == "Red"
        })
        console.table(redFilter);
        document.querySelector(".product-wrapper").innerHTML =``
        redFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })   
    }
    else if(colorScreen() == "Purple"){
        let purpleFilter = products.filter((color) => {
            return color.colour == "Purple"
        })
        console.table(purpleFilter);
        document.querySelector(".product-wrapper").innerHTML =``
        purpleFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    else if(colorScreen() == "Grey"){
        let greyFilter = products.filter((color) => {
            return color.colour == "Grey"
        })
        console.table(greyFilter); 
        document.querySelector(".product-wrapper").innerHTML =``
        greyFilter.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    else if(colorScreen() == "All"){
        document.querySelector(".product-wrapper").innerHTML =``
        products.forEach((sneaker)=>{
            document.querySelector(".product-wrapper").innerHTML += ` 
            <div class= "col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 14rem;">
                <img src= "${sneaker.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${sneaker.brand}</h5>
                    <p class="card-text">${sneaker.name}</p>
                    <p class="card-text">${sneaker.colour}</p>
                    <p class="card-text">R${sneaker.price}</p>
            
                    <button class="buttons">Add to Checkout</button>
                </div>
            </div>    
    
            </div>
            
            `
        })
    }
    
};
