function secondimage() {
    var img = document.getElementById('2ndimg')
    img.src = '2.png'
}

function thirdimage() {
    var img = document.getElementById('2ndimg')
    img.src = '3.png'
}

function firstimage() {
    var img = document.getElementById('2ndimg')
    img.src = 'iphone15-front.png'
}
function calculateTotal() {
    var quantity = document.getElementById("quantityInput").value;
    var pricePerItem = 156900;
    var totalPrice = quantity * pricePerItem;
    document.getElementById("totalPrice").textContent = totalPrice;
}