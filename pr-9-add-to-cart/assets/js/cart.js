document.addEventListener("DOMContentLoaded", function () {
    let localArr = JSON.parse(localStorage.getItem("cart")) || [];
    let checkoutBox = document.getElementById("tablecontent");

   
   
    
    
    function displayItem() {
        checkoutBox.innerHTML = "";  
        
        if (localArr.length === 0) {
            checkoutBox.innerHTML = `
                <img src="./assets/images/empty-cart.png" alt="empty-cart image" width="100%">
                <p class='text-center'>Your cart is empty</p>`;
            return;
        }

        let cartHTML = '';
        localArr.forEach((item, idx) => {
            cartHTML += `
                <div class="d-flex flex-wrap justify-content-between pb-4 border-bottom">
                    <div class="col-12 col-md-6">
                        <div class="d-flex">
                            <div class="col-6">
                                <img src="${item.img}" alt="" class="img-fluid">
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
                                <p class="fw-bold">$${item.price}</p>
                            </div>
                            <div class="col-5">
                                <div class="d-flex border justify-content-between px-3 py-2 rounded">
                                    <button class="bg-transparent text-secondary">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <div class="fw-bold">${item.quantity}</div>
                                    <button class="bg-transparent text-secondary">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-2 text-center">
                                <button class="text-secondary bg-transparent" onclick='deleteItem()'>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>`
        });

      
        checkoutBox.innerHTML = cartHTML;
    }

  
    displayItem();
    
    
    function deleteItem(){
        console.log("wejteirjgti");
    }
   
    
    function saveCartArray() {
        localStorage.setItem("cart", JSON.stringify(localArr));
    }
});
