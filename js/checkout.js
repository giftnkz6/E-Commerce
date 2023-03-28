let checkoutArray = JSON.parse(localStorage.getItem('checkoutStore'));
console.log(checkoutArray)

function showCheckout () {
    checkoutArray.forEach((item)=>{
        document.querySelector("#checkout-list").innerHTML += ` 
        <tr>
        
                <td><img src= "${item.image}" class="card-img-top" alt="..."></td>
                <td>${item.name}</td>
                <td>${item.colour}</td>
                <td>R ${item.price}</td>
                <td><button class="btn btn-danger">delete</button></td>
    
            </div>
        </div>    

       </tr>
        
        `
    })
};
showCheckout()

function checkoutTotal() {
    let checkOutPrice = JSON.parse(localStorage.getItem('checkoutStore'));
    // console.log(price);
    const totalPrice = checkOutPrice.reduce((sum1, sum2) => {
        return (sum1.price + sum2.price)
        
    });

    document.getElementById("totalCalculation").innerHTML += `
    ${totalPrice}
    
    `
}
checkoutTotal()

