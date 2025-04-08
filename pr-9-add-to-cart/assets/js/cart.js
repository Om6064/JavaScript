let localArr = JSON.parse(localStorage.getItem("cart")) || [];
let checkoutBox = document.getElementById("tablecontent");
let totalAmount = 0;
let totalCard = document.getElementById("totalCard")
let hiddenContent = document.getElementById("hiddenContent")
let counterMain = document.getElementById("counter");
let counterOffcanvas = document.getElementById("counter-offcanvas");


function updateCartCounters(count) {
    if (counterMain) counterMain.innerText = count;
    if (counterOffcanvas) counterOffcanvas.innerText = count;
}

function deleteItem(idx) {
    localArr.splice(idx, 1)
    saveCartArray()
    displayItem()

}
function clearAll() {
    localStorage.removeItem("cart")
    location.reload();
}

function updateQuntity(idx, value) {
    let newQuntity = localArr[idx].quantity + value;

    if (newQuntity <= 0) {
        deleteItem(idx)

    } else {
        localArr[idx].quantity = newQuntity;
        saveCartArray()
    }
    displayItem()
}
function displayItem() {
    checkoutBox.innerHTML = "";
    totalAmount = 0;
    counter.innerHTML = localArr.length;

    updateCartCounters(localArr.length); 


    if (localArr.length === 0) {

        totalCard.style.display = "none";

        checkoutBox.innerHTML = `
            
                <div class="mt-3 ">
                   <img src="https://assets-v2.lottiefiles.com/a/6102a4f8-1176-11ee-bcc5-236dd7d5f88b/aK8IKRE5a3.gif" alt="empty-cart image" height="10%">
                </div>
              
                <div class="text-center w-25">
                    <button  class="w-100 text-center my-3 py-3 rounded text-white fw-bold hover-checkout" onclick="window.location = './index.html'">
                    <i class="fa-solid fa-arrow-left hover-left"></i>
                    Continue Shopping
                </button> 
                </div>    
       
        `;
        return;
    }


    totalCard.style.display = "block";

    let cartHTML = '';
    localArr.forEach((item, idx) => {
        let subTotal = item.quantity * item.price;
        totalAmount += subTotal;
        cartHTML += `
            <div class="d-flex flex-wrap justify-content-between pb-4 border-bottom">
                <div class="col-12 col-md-6 pt-2">
                    <div class="d-flex">
                        <div class="col-6">
                            <img src="${item.img}" alt="${item.productName}" class="img-h">
                        </div>
                        <div class="col-6 d-flex flex-column justify-content-center">
                            <p class="m-0 text-body-secondary font-14">${item.discribtion}</p>
                            <p class="text-black">${item.productName}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center mt-3 mt-md-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="col-3 mt-2 text-center">
                            <p class="fw-bold">$${subTotal}</p>
                        </div>
                        <div class="col-5">
                            <div class="d-flex border justify-content-between px-3 py-2 rounded">
                                <button class="bg-transparent text-secondary" onclick="updateQuntity(${idx},-1)">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <div class="fw-bold">${item.quantity}</div>
                                <button class="bg-transparent text-secondary" onclick="updateQuntity(${idx},1)">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <button class="text-secondary bg-transparent" onclick="deleteItem(${idx})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    checkoutBox.innerHTML = cartHTML;

    totalCard.innerHTML = `
        <div class="position-sticky top-0">
            <div class="border rounded position-sticky top-0">
                <div class="p-40">
                    <div class="d-flex justify-content-between border-bottom mb-4">
                        <p class="text-secondary fw-bold m-0">Subtotal</p>
                        <p class="fw-bold m-0">$${totalAmount}</p>
                    </div>
                    <p class="fw-bold mb-2">Shipping</p>
                    <div class="mb-2">
                        <input type="checkbox" class="assent-color">
                        <label for="" class="text-secondary font-14">Flat rate</label>
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" class="assent-color">
                        <label for="" class="text-secondary font-14">Free shipping</label>
                    </div>
                    <div class="d-flex fw-bold justify-content-between border-bottom mb-4">
                        <p>Shipping to <span class="text-danger"> NY. </span></p>
                        <p><i class="fa-solid fa-location-dot text-danger"></i> Change address</p>
                    </div>

                    <div class="mt-1">
                        <div class="d-flex justify-content-between">
                            <div class="text-body-secondary fw-bold">Total</div>
                            <div class="fw-bold" id="total">$${totalAmount}</div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="w-100 text-center my-3 py-3 rounded text-white fw-bold hover-checkout" onclick="window.location = './thankyou.html'">
                Procced To Check
            </button>
            <div class="d-flex justify-content-between">
                <button class="bg-white fw-bold hover-shoping" onclick="window.location = './index.html'">
                <i class="fa-solid fa-arrow-left hover-left"></i>
                Continue Shopping
            </button>
            <button class="bg-white fw-bold hover-shoping" onclick="clearAll()">
                <i class="fa-solid fa-trash"></i>
                Clear All
            </button>
            </div>
        </div>
    `;
}


displayItem();

function saveCartArray() {
    localStorage.setItem("cart", JSON.stringify(localArr));
}
counter.innerHTML = localArr.length