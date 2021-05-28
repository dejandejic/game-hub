function addToCart(product_id) {
    let productInCart = _.find(myCart, { product_id })
    if (productInCart !== undefined) productInCart.quantity++
    else {
        myCart.push({
            quantity: 1,
            product_id: product_id,
        })
    }
    localStorage.setItem("cart", JSON.stringify(myCart))
}
let html_contents = '';

products_items.forEach((item) => {
    html_contents += `<div class="col-4">
                <img src=${item.src} alt=${item.alt}>
                <h3>${item.title}</h3>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    ` + (item.id % 2 == 0 ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-half-o"></i>') + `
                </div>
                <p>${item.price}kr</p>
                <a href="cart.html" class="btn" onclick="addToCart(${item.id})" >Buy Now &#8594;</a>
            </div>`;
});

const products = document.querySelector('.products');
if (products) products.innerHTML = html_contents;



// CART FUNCTION
function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]))
    myCart = []
    changeCart()
}

function deleteProductFromCart(id) {
    _.remove(myCart, {
        product_id: id
    })
    changeCart()
}

function changeCart() {
    cartHTML = '';
    totalPrice = 0;
    document.querySelector('.cart-count-item span').innerHTML = myCart.length;
    if (myCart.length === 0) {
        let cartPage = document.querySelector('.cart-page');
        if (cartPage) cartPage.innerHTML = "<h2>Cart is empty</h2>"

        localStorage.setItem("cart", JSON.stringify(myCart))
        return;
    }
    myCart.forEach((item) => {
        findProduct = products_items.find(x => x.id === item.product_id);
        itemPrice = item.quantity * findProduct.price;
        totalPrice += itemPrice;

        cartHTML += `
            <tr>
                <td class="product-info">
                    <div class="cart-info">
                        <img src=${findProduct.src} alt="${findProduct.alt}">
                        <div>
                            <p>${findProduct.title}</p>
                            <small>$${findProduct.price}</small>
                        </div>
                    </div>
                </td>
                <td class="product-qty">
                    <div class="qty-btns" data-product-id=${item.product_id}>
                        <button class="remove-item cart-qty-btn">
                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="#000629">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                    d="M18 12H6" />
                            </svg>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="add-item cart-qty-btn">
                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="product-price"><strong>$${itemPrice}</strong></td>
                <td class="product-delte">
                    <button onclick="deleteProductFromCart(${item.product_id})">
                        Remove
                    </button>
                </td>
            </tr>`
    })

    document.querySelector('#total-price').innerHTML = `$${totalPrice}`;
    document.querySelector('.my-cart-table').innerHTML = cartHTML;


    // Increment Product
    const productsBoxForAddEvents = document.querySelectorAll(".add-item");
    productsBoxForAddEvents.forEach(function (productBox) {
        productBox.addEventListener('click', function (e) {
            let parentEvenedElement = e.target.parentNode
            let foundCartItem = myCart.find(x => x.product_id == parentEvenedElement.dataset.productId)
            foundCartItem.quantity++;
            changeCart()
        })
    })

    // Decrement Product
    const productsBoxForRemoveEvents = document.querySelectorAll(".remove-item");
    productsBoxForRemoveEvents.forEach(function (productBox) {
        productBox.addEventListener('click', function (e) {
            let parentEvenedElement = e.target.parentNode
            let foundCartItem = myCart.find(x => x.product_id == parentEvenedElement.dataset.productId)
            foundCartItem.quantity--;
            if (foundCartItem.quantity < 1) foundCartItem.quantity = 1;
            changeCart()
        })
    })
    localStorage.setItem("cart", JSON.stringify(myCart))
}

let cartHTML = '';
let totalPrice = 0;
let findProduct, itemPrice = 0;
changeCart()