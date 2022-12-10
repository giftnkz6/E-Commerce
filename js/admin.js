// localStorage.removeItem('products');

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

];


function adminData () {
  document.querySelector("#admin-data").innerHTML = "";
    products.forEach((sneaker)=>{
        document.querySelector("#admin-data").innerHTML += ` 
        <tr>
                    <th scope="row">${sneaker.id}</th>
                    <td>${sneaker.brand}</td>
                    <td>${sneaker.name}</td>
                    <td>R${sneaker.price}</td>
                    <td>${sneaker.colour}</td>
                    <td><button type="button" class="btn mb-5" id="delete-btn"><i class="fa-solid fa-trash"></button></td>
                    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" id ="edt-btn" data-bs-target="#exampleModal"><i class="fa-sharp fa-solid fa-pen"></i>
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="mb-3">
                        
                        <input type="text" class="form-control" id="brand-input" placeholder="Enter brand of the product">
                      </div>
                      <div class="mb-3">
                      <input type="text" class="form-control" id="name-input" placeholder="Enter name of the product">
                      </div>
                      <div class="mb-3">
                      <input type="number" class="form-control" id="price-input" placeholder="Enter the price of the product">
                      </div>
                      <div class="mb-3">
                      <input type="text" class="form-control" id="colour-input" placeholder="Enter the colour of the product">
                      </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div></td>
                  </tr>
        
        `
    })

};
adminData();

// Sort Method
let sortButton = document.querySelector("#sort-btn");
sortButton.addEventListener("click", (e)=>{
    e.preventDefault()
    sorted();
    localStorage.removeItem('products');
})

function sorted() {
    let sortedProducts = products.sort((a,b) => {
    if(a.name < b.name){
            return -1;
        }
        else if(a.name > b.name){
            return 1;
        }
        else{
            return 0;
        }
    })
    document.querySelector(".table-sort").innerHTML = ``
    sortedProducts.forEach((sorts) => {
        document.querySelector(".table-sort").innerHTML += `
        <tr>
                    <th scope="row">${sorts.id}</th>
                    <td>${sorts.brand}</td>
                    <td>${sorts.name}</td>
                    <td>R${sorts.price}</td>
                    <td>${sorts.colour}</td>
                    <td><button type="button" class="btn mb-5" id="delete-btn"><i class="fa-solid fa-trash"></button></td>
                    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-sharp fa-solid fa-pen"></i>
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                        </div>
                        <div class="modal-footer">
                           
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div></td>
                  </tr>
        
        `

    })

}

let removeProduct = document.querySelectorAll("#delete-btn")
for(let counter = 0; counter < removeProduct.length; counter++){
  removeProduct[counter].addEventListener("click", (event) => {
    event.target.parentElement.parentElement.parentElement.remove()
  })
}



let addProductBtn = document.querySelector("#add-product")
console.log(addProductBtn);
addProductBtn.addEventListener("click", () => {
  console.log("Nanzo");
  let inputId = document.querySelector("#id-add-btn").value;
  let inputBrand = document.querySelector("#brand-add-btn").value;
  let inputName = document.querySelector("#name-add-btn").value;
  let inputPrice = document.querySelector("#price-add-btn").value;
  let inputColour = document.querySelector("#colour-add-btn").value;
  let inputImage = document.querySelector("#image-add-btn").value;

  function formValidation() {
    let productBrand = document.forms["productForm"]["product-brand"].value;
    let productName = document.forms["productForm"]["product-name"].value;
    let productPrice = document.forms["productForm"]["product-price"].value;
    let productColour = document.forms["productForm"]["product-colour"].value;
    if(productBrand == "" || (productName == "") || (productPrice == "") || (productColour == "") ) {
      alert("Please fill out all input")
      return false;
    }
  }
  formValidation()
 
  
products.push(
  {
    id: `${inputId}`,
    brand: `${inputBrand}`,
      name: `${inputName}`,
      price: `${inputPrice}`,
      colour: `${inputColour}`,
      image:`${inputImage}`
  }
);

localStorage.setItem('products', JSON.stringify(products));
});






