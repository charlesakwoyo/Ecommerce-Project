const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

const cartItems = [
  {
    name: "Classic Sneakers",
    price: 1200,
    image: "images/photo-1491553895911-0055eca6402d.avif",
    quantity: 1,
  },
  {
    name: "Wireless Headphones",
    price: 2800,
    image: "images/photo-1574920162043-b872873f19c8.avif",
    quantity: 1,
  },
  {
    name: "Smartwatch",
    price: 4000,
    image: "images/photo-1722153297252-8fb1645f5bfb.avif",
    quantity: 1,
  },
];

function updateTotal() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPriceEl.textContent = `Ksh ${total.toLocaleString()}`;
}

function renderCart() {
  cartItemsContainer.innerHTML = '';

  cartItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = "flex items-center bg-white shadow rounded-lg p-4";

    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded mr-4" />
      <div class="flex-1">
        <h3 class="text-lg font-semibold">${item.name}</h3>
        <p class="text-gray-600">Ksh ${item.price}</p>
      </div>
      <div class="flex items-center space-x-2">
        <button class="decrease bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">-</button>
        <span class="quantity-value font-bold">${item.quantity}</span>
        <button class="increase bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">+</button>
      </div>
      <button class="remove bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4">Remove</button>
    `;

    const decreaseBtn = itemEl.querySelector('.decrease');
    const increaseBtn = itemEl.querySelector('.increase');
    const removeBtn = itemEl.querySelector('.remove');
    const quantityValue = itemEl.querySelector('.quantity-value');

    decreaseBtn.onclick = () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantityValue.textContent = item.quantity;
        updateTotal();
      }
    };

    increaseBtn.onclick = () => {
      item.quantity++;
      quantityValue.textContent = item.quantity;
      updateTotal();
    };

    removeBtn.onclick = () => {
      cartItems.splice(index, 1);
      renderCart();
      updateTotal();
    };

    cartItemsContainer.appendChild(itemEl);
  });

  updateTotal();
}

renderCart();
