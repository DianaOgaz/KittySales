const navEmail = document.querySelector('.navbar-email') //Email clickeable 
const desktopMenu = document.querySelector('.desktop-menu')//Menu desplegabla
const burgerMenu = document.querySelector('.burgerMenu')//icono Burger
const sideMenuMovil = document.querySelector('.mobile-menu')//Menu desplegabla movile
const shoopingicon = document.querySelector('.navbar-shopping-cart') //shoopingcart icon
const productDetail = document.querySelector('.cart-detail')//carrito de compras
const cardsContainer = document.querySelector('.cards-container')//contenedor de los productos
const productDetailContainer = document.querySelector('.product-detail')//Detalle de productos
const productDetailClose = document.querySelector('.product-detail-close')//


//click es un evento de escucha, es una palabra reservada para este metodo

navEmail.addEventListener('click', toggleDesktopMenu)//evento del email clickeable llama a funcion
burgerMenu.addEventListener('click', toggleMovileMenu)
shoopingicon.addEventListener('click', toogleProductDetail)
productDetailClose.addEventListener('click', closeProductDetail)


//funcion para que detecte click y se inactive o active el menu
function toggleDesktopMenu() {

    //identificamos el componente a mostrar con desktopMenu
    //classlist nos trae todas las clases que contiene el elemento dsktopMenu
    //toggle es una sublase de classlist que permite alternar entre la clase 
    //inactive es la clase que se va a alternar al dar click en navEmail

    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive')

    if (isProductDetailOpen || isProductDetailContainerOpen) {
        productDetail.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    } else {

        desktopMenu.classList.toggle('inactive')
    }

}


function toggleMovileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive')

    if (isProductDetailOpen || isProductDetailContainerOpen) { //condicional que detecta si se muestra el componente
        productDetail.classList.add('inactive') //el otro menu se cierra

        productDetailContainer.classList.add('inactive')
    } else {
        sideMenuMovil.classList.toggle('inactive')//de no ser asi, permanece abierto
    }
}

function toogleProductDetail() {
    const isSideMenuMovilOpen = !sideMenuMovil.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive')

    if (isSideMenuMovilOpen || isDesktopMenuOpen || isProductDetailOpen) {
        sideMenuMovil.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    } else {
        productDetail.classList.toggle('inactive')
    }

}
function openProductDetail(product) {
    productDetailContainer.classList.remove('inactive')
    console.log('olaaa')
    let isThereActiveProduct = document.querySelectorAll(".product-detail").length > 0;
    if (isThereActiveProduct) {
        document.querySelectorAll(".product-detail").forEach((element) => {
            element.remove();
        });
    }

}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}




//se crea arreglo para poder almacenar los productos 
const productList = []
productList.push({
    name: 'Kitty',
    price: 120,
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'kitty',
    price: 320,
    image: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 420,
    image: 'https://images.pexels.com/photos/1398185/pexels-photo-1398185.jpeg',
})
productList.push({
    name: 'Salud',
    price: 520,
    image: 'https://images.pexels.com/photos/4012470/pexels-photo-4012470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 620,
    image: 'https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 720,
    image: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 820,
    image: 'https://images.pexels.com/photos/1447884/pexels-photo-1447884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 920,
    image: 'https://images.pexels.com/photos/11399435/pexels-photo-11399435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Salud',
    price: 1020,
    image: 'https://images.pexels.com/photos/5270660/pexels-photo-5270660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

function renderProducts(arr) {
    //se crea una funcion con el arreglo de productos 
    for (product of arr) {

        const cardHTML =
            `
        <div class="product-card">
        <img src="${product.image}">
        <div class="product-info-cart">
        <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
        </div>
        <figure>
        <img src= "./icons/bt_add_to_cart.svg" alt="product image">
        </figure>
        </div>
        </div>
        
        `

        const cardsContainer = document.querySelector('.cards-container')
        cardsContainer.innerHTML += cardHTML;

        const productDetailOpen = document.querySelector('.product-card')

        //productDetailOpen.onclick = function () { openProductDetail(product) }
    }

}

renderProducts(productList);


shoopingCartContainer.forEach((product.price) => {
    total *= product, price;

});

function renderProductsCart(arr) {
    let total = 0.00;
  

    for (product of arr) {

        const cartHTML =
            `
    
        <div class="my-order-content">
        <div class="shopping-cart">
        <figure>
        <img src="${product.image}">
        </figure>
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <img src="./icons/icon_close.png" alt="close">
        </div>
        </div>
        `
        const shoopingCartContainer = document.querySelector('.cart-detail')
        shoopingCartContainer.innerHTML += cartHTML

    }

    const cartOrderHTML =
        `
    <div class="order">
    <p>
    <span>Total</span>
    </p>
    <p>$560.00</p>
    </div>

    <button class="primary-button">
    Checkout
    </button>
    `
    const shoopingCartOrderContainer = document.querySelector('.cart-detail')
    shoopingCartOrderContainer.innerHTML += cartOrderHTML

}


renderProductsCart(productList);
