function updatePrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-price').innerText);
    const storagePrice = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = document.getElementById('total');
    const finalPrice = document.getElementById('price-update');
    totalPrice.innerText = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    finalPrice.innerText = totalPrice.innerText;
    let final = finalPrice.innerText;
    return final;
}

function promoCode() {
    let payableAmount = updatePrice();
    const promoField = document.getElementById('promo-field');
    const promoButton = document.getElementById('promo-btn');
    if (promoField.value == 'stevekaku') {
        payableAmount = payableAmount - (payableAmount * (20 / 100));
        promoField.value = '';
    }
    return payableAmount;
}

// memory update
document.getElementById('base-memory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = 0;
    updatePrice()
});
document.getElementById('updated-memory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = 180;
    updatePrice();
});

// storage update
document.getElementById('base-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 0;
    updatePrice();
});
document.getElementById('higher-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 100;
    updatePrice();
});
document.getElementById('highest-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = 180;
    updatePrice();
});

//Delivery charge update
document.getElementById('free-dc').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 0;
    updatePrice();
});
document.getElementById('accountable-dc').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
    updatePrice();
});

//payable amount update
document.getElementById('promo-btn').addEventListener('click', function () {
    const payable = promoCode();
    const finalPrice = document.getElementById('price-update');
    finalPrice.innerText = payable;
});