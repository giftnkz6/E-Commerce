let checkoutArray = JSON.parse(localStorage.getItem('checkoutStore'));
console.log(checkoutArray)

function showCheckout () {
    checkoutArray.forEach((item)=>{
        document.querySelector("#checkout-list").innerHTML += ` 
        <tr>
        
                <td><img src= "${item.image}" class="card-img-top" alt="..."></td>
                <td>${item.name}</td>
                <td>${item.name}</td>
                <td>R ${item.price}</td>
    
            </div>
        </div>    

       </tr>
        
        `
    })
};
showCheckout()

function checkoutTotal() {
    let checkoutPrice = JSON.parse(localStorage.getItem('checkoutStore'));
    console.log(checkoutPrice);
    let totalPrice = checkoutPrice.reduce((sum1, sum2) => {
        return sum1.price + sum2.price
    });

    document.getElementById("totalCalculation").innerHTML += `
    ${totalPrice}
    
    `
}
checkoutTotal()

