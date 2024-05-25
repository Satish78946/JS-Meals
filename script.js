let order = [];
let total = 0;

function addToOrder(name, price) {
    order.push({ name, price });
    total += price;
    updateOrder();
}

function updateOrder() {
    const orderList = document.getElementById('orderList');
    const totalPrice = document.getElementById('totalPrice');

    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderList.appendChild(li);
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}
