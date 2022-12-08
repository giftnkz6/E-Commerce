




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
    products.forEach((sneaker)=>{
        document.querySelector("#admin-data").innerHTML += ` 
        <tr>
                    <th scope="row">${sneaker.id}</th>
                    <td>${sneaker.brand}</td>
                    <td>${sneaker.name}</td>
                    <td>R${sneaker.price}</td>
                    <td>${sneaker.colour}</td>
                    <td><button type="button" class="btn mb-5" id="delete-btn" onclick="deleteBtn()"><i class="fa-solid fa-trash"></button></td>
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
                          ...
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
    console.table(sortedProducts);
    // document.querySelector('.table-sort').innerHTML = sortedProducts.forEach;
    sortedProducts.forEach((sorts) => {
        document.querySelector(".table-sort").innerHTML += `
        <tr>
                    <th scope="row">${sorts.id}</th>
                    <td>${sorts.brand}</td>
                    <td>${sorts.name}</td>
                    <td>R${sorts.price}</td>
                    <td>${sorts.colour}</td>
                    <td><button type="button" class="btn delete-btn mb-5" onclick="deleteBtn()"><i class="fa-solid fa-trash"></button></td>
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
                          ...
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

}


function deleteBtn(id) {
  alert("Deletes")
  if(id >= 0) {
    products.splice(id,1)
    for(let i =0; i < products.length; i++) {
      products[i].id = i++;
    }
  }
}