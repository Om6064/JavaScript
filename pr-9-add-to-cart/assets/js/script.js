let products = [
    {
        id: 1,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img8.webp",
        productName: "Girl's Sport Bra",
        price: 19.00,
        discribtion: "Under Wear"
    },
    {
        id: 2,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img6.webp",
        productName: "Champion Bra",
        price: 25.00,
        discribtion: "Under Wear"
    },
    {
        id: 3,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img11_1.webp",
        productName: "Maidenform Bra",
        price: 50.00,
        discribtion: "Under Wear"
    },
    {
        id: 4,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img7.webp",
        productName: "Hanes Women's Bra",
        price: 75.00,
        discribtion: "Under Wear"
    },
    {
        id: 5,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img8_2.jpg",
        productName: "Girl's Sport Bra",
        price: 31.00,
        discribtion: "Under Wear"
    },
    {
        id: 6,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img12.webp",
        productName: "Maidenform Bra",
        price: 100.00,
        discribtion: "Under Wear"
    },
    {
        id: 7,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/woman-shirt-338x450.png",
        productName: "Maidenform Bra",
        price: 20.00,
        discribtion: "Under Wear"
    },
    {
        id: 8,
        img: "https://weiboo.pixcelsthemes.com/weiboo/assets/images/hand-picked/slider-img13-1.webp",
        productName: "Hanes Women's Pant",
        price: 35.00,
        discribtion: "Under Wear"
    },
];

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];


let counterMain = document.getElementById("counter");
let counterOffcanvas = document.getElementById("counter-offcanvas");


function updateCartCount(count) {
    if (counterMain) counterMain.innerText = count;
    if (counterOffcanvas) counterOffcanvas.innerText = count;
}


updateCartCount(cartArr.length);

function addToCart(productId) {
    let product = products.find((obj) => obj.id === productId);
    let productIdx = cartArr.findIndex((obj) => obj.id === productId);

    if (productIdx !== -1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "It is already in the cart",
        });
        return;
    } else {
        product.quantity = 1;
        cartArr.push(product);
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Item Added In Cart",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cartArr));
    updateCartCount(cartArr.length);
}

products.forEach((product) => {
    document.getElementById("rowContent").innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 hover-card">
            <div class="bg-white">
                <div class="h-50c overflow-hidden">
                    <img src="${product.img}" alt="${product.productName}" class="w-100 big-img">
                </div>
                <div class="p-4">
                    <div class="d-flex gap-2 mb-2">
                        <i class="fa-solid fa-star text-danger"></i>
                        <i class="fa-solid fa-star text-danger"></i>
                        <i class="fa-solid fa-star text-danger"></i>
                        <i class="fa-solid fa-star text-danger"></i>
                        <i class="fa-solid fa-star text-danger"></i>
                    </div>
                    <p class="text-body-secondary mb-2">${product.productName}</p>
                    <div class="justify-content-between d-flex align-items-center">
                        <p class="fw-bold mb-0">$${product.price}</p>
                        <button class="bg-color-icon hover-icon" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
});
