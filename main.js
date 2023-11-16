////@ts-check


const navEmail = document.querySelector('.navbar-email') //Email clickeable 
const desktopMenu = document.querySelector('.desktop-menu')//Menu desplegabla
const burgerMenu = document.querySelector('.burgerMenu')//icono Burger
const sideMenuMovil = document.querySelector('.mobile-menu')//Menu desplegabla movile
const shoopingicon = document.querySelector('.navbar-shopping-cart') //shoopingcart icon
const productDetail = document.querySelector('.cart-detail')//carrito de compras
const productDetailContainer = document.querySelector('.product-detail')//Detalle de productos
const priceCartTotal = document.querySelector('#productCartPriceLabel')
const porductItemsCount = document.querySelector('#itemsCount')
const footer = document.querySelector('footer')
const emptyCart = document.querySelector('.empty-cart')

//Botones de búsqueda 
const bigKittys = document.querySelector('#big-kittys')
const allKittys = document.querySelector('#all-kittys')
const littleKitty = document.querySelector('#little-kittys')
const funnyKitty = document.querySelector('#funny-kittys')
const kittyInCustom = document.querySelector('#kittys-in-custom')

let shoppingCart = []
let iSearch = ''




//click es un evento de escucha, es una palabra reservada para este metodo

navEmail.addEventListener('click', toggleDesktopMenu)//evento del email clickeable llama a funcion
burgerMenu.addEventListener('click', toggleMovileMenu)// abré el menu hamburguesa en la version movil
shoopingicon.addEventListener('click', toogleProductDetail)//Abre carrito de compras

//Botones filtro 
bigKittys.addEventListener('click', function (event) {
    event.preventDefault();
    iSearch = 'Big Kitty'
    search(iSearch)
})
littleKitty.addEventListener('click', function (event) {
    event.preventDefault();
    iSearch = 'Little Kitty'
    search(iSearch)
})
funnyKitty.addEventListener('click', function (event) {
    event.preventDefault();
    iSearch = 'Funny Kitty'
    search(iSearch)
})
kittyInCustom.addEventListener('click', function (event) {
    event.preventDefault();
    iSearch = 'Kitty in Custom'
    search(iSearch)
})
kittyInCustom.addEventListener('click', function (event) {
    event.preventDefault();
    iSearch = 'Kitty in Custom'
    search(iSearch)
})
allKittys.addEventListener('click', function (event) {
    event.preventDefault();
    footer.style.position = 'inherit'
    renderProducts(productList)
})

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

function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}

//se crea arreglo para poder almacenar los productos 
const productList = []
productList.push({
    name: 'Gatito',
    price: 120,
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, culpa amet. Autem, numquam maxime? Qui neque aliquam, sequi minima similique iure odio, ipsam commodi sint, est recusandae rerum. Nisi, molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, culpa amet. Autem, numquam maxime? Qui neque aliquam, sequi minima similique iure odio, ipsam commodi sint, est recusandae rerum. Nisi, molestiae.',
    category: 'Little Kitty'
})
productList.push({
    name: 'Gato Ojón',
    price: 320,
    image: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 2   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum necessitatibus optio consequatur non, libero magnam accusamus illum reprehenderit alias nihil aperiam ratione facilis voluptas ipsa? Maiores nisi blanditiis dolorum.',
    category: 'Funny Kitty'
})
productList.push({
    name: 'Gato Patitas',
    price: 420,
    image: 'https://images.pexels.com/photos/1398185/pexels-photo-1398185.jpeg',
    description: 'Kitty 3   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'Gato Ojotes',
    price: 620,
    image: 'https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 4   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Little Kitty'
})
productList.push({
    name: 'Gato Menso',
    price: 720,
    image: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 5   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Funny Kitty'
})
productList.push({
    name: 'Gato Cat Noir',
    price: 820,
    image: 'https://images.pexels.com/photos/1447884/pexels-photo-1447884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 6   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Little Kitty'
})
productList.push({
    name: 'El Cheto',
    price: 920,
    image: 'https://images.pexels.com/photos/11399435/pexels-photo-11399435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 7   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Cheto Enojado',
    price: 1020,
    image: 'https://images.pexels.com/photos/5270660/pexels-photo-5270660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 8   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Funny Kitty'
})
productList.push({
    name: 'Gato Sparrow',
    price: 1020,
    image: 'https://static.wixstatic.com/media/1a82fe_5c1659e17fb54610bd19326750191a0f~mv2_d_3984_2656_s_4_2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1a82fe_5c1659e17fb54610bd19326750191a0f~mv2_d_3984_2656_s_4_2.jpg',
    description: 'Kitty 9   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Kitty in Custom'
})
productList.push({
    name: 'Gatita Reina',
    price: 2020,
    image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 10   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Kitty in Custom'
})
productList.push({
    name: 'Gato Loco',
    price: 3020,
    image: 'https://images.pexels.com/photos/1112621/pexels-photo-1112621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 11   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Funny Kitty'
})
productList.push({
    name: 'Gato Esponjoso',
    price: 4020,
    image: 'https://images.pexels.com/photos/12344999/pexels-photo-12344999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 12   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'Gato Mimiendo',
    price: 5020,
    image: 'https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 13   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'Gato Baka',
    price: 6020,
    image: 'https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 14   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Kitty in Custom'
})
productList.push({
    name: 'Gato Estudihambre',
    price: 7020,
    image: 'https://images.pexels.com/photos/1852914/pexels-photo-1852914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 15   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'Gato Cono de la Verguenza',
    price: 8020,
    image: 'https://images.pexels.com/photos/776374/pexels-photo-776374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 16  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Kitty in Custom'
})
productList.push({
    name: 'El Toto',
    price: 10020,
    image: 'https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 17  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Little Kitty'
})
productList.push({
    name: 'El Nachito',
    price: 11020,
    image: 'https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 18  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Sushi',
    price: 12020,
    image: 'https://images.pexels.com/photos/1441586/pexels-photo-1441586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 19  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Zafiro',
    price: 13020,
    image: 'https://images.pexels.com/photos/1262943/pexels-photo-1262943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 20  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Tilin',
    price: 14020,
    image: 'https://images.pexels.com/photos/13178239/pexels-photo-13178239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 21  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Panda',
    price: 15020,
    image: 'https://images.pexels.com/photos/13027589/pexels-photo-13027589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 22  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})
productList.push({
    name: 'El Polvorón',
    price: 16020,
    image: 'https://images.pexels.com/photos/9845135/pexels-photo-9845135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 23  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Little Kitty'
})
productList.push({
    name: 'El Salsa',
    price: 17020,
    image: 'https://images.pexels.com/photos/5263698/pexels-photo-5263698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kitty 24  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi qui, nisi incidunt, temporibus aliquid ipsum dicta fuga cumque atque eaque facere magni est mollitia delectus ut, porro ea commodi.',
    category: 'Big Kitty'
})



function renderProducts(arr) {//Muestra los productos 
    //se crea una funcion con el arreglo de productos 
    const cardsContainer = document.querySelector('.cards-container')
    cardsContainer.innerHTML = ''
    for (product of arr) { //Recorre todos los productos del arreglo creando la vista para cada uno

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
        <div style="width: 50px;height: 50px;">
        <img src="./logos/kittyPaw.webp" style="width:100%; height:85%;">
        
        </div>
        </figure>
        </div>
        </div>
    
        `
        cardsContainer.innerHTML += cardHTML;

    }
    const productDetailSelector = document.querySelectorAll('.product-card')

    for (let i = 0; i < productDetailSelector.length; i++) { //Se crea un for que otere todos los elementos del arreglo, en este caso .product-card
        productDetailSelector[i].addEventListener('click', function () { //se añade el event listener por cada elemento
            openProductDetail(arr[i]);//se abre el elemento seleccionado :I No se porqué no se me ocurrió 
        });
    }

}//fin
renderProducts(productList);


function openProductDetail(product) {
    const productDetailHTML =
        `
    <div class="product-detail-close">
    <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="${product.image}">
    <div class="product-info">
    <p>$${product.price}</p>
    <p>${product.name}</p>
    <p>${product.description}</p>
    <button id="add-to-cart-button" class="primary-button add-to-cart-button">
    <img src="./logos/kittyPaw.webp" alt="add to cart" style="width: 45px;height: 45px;">
    Add to cart
    </button>
    </div>
    `
    productDetailContainer.innerHTML = productDetailHTML;
    productDetailContainer.classList.remove('inactive')

    const closeProductD = document.querySelector('.product-detail-close')
    closeProductD.addEventListener('click', closeProductDetail)
    const addToCartButton = document.querySelector('#add-to-cart-button')

    addToCartButton.addEventListener('click', function () {
        renderProductsCart(product)
    })

}

var duplicated = 1;
function renderProductsCart(product) {//Productos en carrito
    //const arr = Object.values(product)
    emptyCart.classList.add('inactive')//Quita la imagen de carrito vacio

    const ifProductExist = shoppingCart.find(item => item.name === product.name) //busca productos duplicados
    console.log('ifProductExist' + ifProductExist)
    if (ifProductExist) {
        duplicated++
        updateCartItems(product)
    } else {
        shoppingCart.push(product)
        addCartItem(product)
        productPriceCart(shoppingCart)
    }
}

function addCartItem(product) {//Agrega productos no duplicados
    const cartHTML =
        `
<div class="my-order-content">
<div class="shopping-cart">
<figure>
<img src="${product.image}">
</figure>
<p class ="productName" >${product.name}</p>
<p>$${product.price}</p>
<img id="closeProductInCart" src="./icons/icon_close.png" alt="close">
</div>
</div>
`
    const shoopingCartContainer = document.querySelector('.cart-detail-order')
    shoopingCartContainer.innerHTML += cartHTML

    const deleteItems = document.querySelectorAll('#closeProductInCart')
    console.log('Producto' + JSON.stringify(product) + '  Cantidad ' + product.length)
    console.log('deleteitems -> ' + deleteItems)
    deleteItems.forEach(deleteItem => {
        deleteItem.addEventListener('click', function () {
            const productIndex = Array.from(deleteItems).indexOf(deleteItem)
            console.log('product Index -> ' + deleteItem)
            const clickedProduct = product[productIndex] /
            console.log('Producto Clickeado -> ' + product.name)//aparece object object
            deleteCartItem(clickedProduct) //aparece undefined
            console.log('deleteItem ' + JSON.stringify(clickedProduct))
        })
    })



}



function updateCartItems(product) {//Actualiza el carrito cuando detecta productos duplicados
    const duplicatedProduct = document.querySelector(`.productName`)
    duplicatedProduct.innerText = product.name + ' x ' + duplicated
}

function deleteCartItem(product) {
    const productCart = document.querySelector('.shopping-cart')
    const index = shoppingCart.indexOf(product);
    if (index !== -1) {
        productCart.parentNode.removeChild(productCart)
        if (product) {
            shoppingCart.splice(index, 1)
        }
    }
}

function productPriceCart(shoopingcart) {
    let total = 0.00;

    for (let i = 0; i < shoopingcart.length; i++) {
        total += shoopingcart[i].price
    }

    priceCartTotal.innerText = '$' + total;
    porductItemsCount.innerText = shoopingcart.length

}

function search(iSearch) { //Funcion para realizar la busqueda dentro de los botones del menú 
    const filtro = productList.filter(function (productList) {
        return productList.category === iSearch
    })
    renderProducts(filtro)
    if (filtro.length < 12) { //Acomoda el footer según la cantidad de articulos mostrados en la vista 
        footer.style.position = 'fixed'
        console.log(filtro.length)
    }
}