let cartCount = 0;
let cartTotal = 0;
const cartCountEl = document.getElementById('cartCount');

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const priceText = card.querySelector('.price').textContent; // e.g. "KSh 1,200"
    const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);

    cartCount++;
    cartTotal += price;
    cartCountEl.textContent = cartCount;

    const original = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('added');
      btn.disabled = false;
    }, 1200);
  });
});

// Cash out modal
const cashOutBtn = document.getElementById('cashOutBtn');
const cashOutModal = document.getElementById('cashOutModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalItemCount = document.getElementById('modalItemCount');
const modalTotal = document.getElementById('modalTotal');

cashOutBtn.addEventListener('click', () => {
  modalItemCount.textContent = `${cartCount} item${cartCount !== 1 ? 's' : ''}`;
  modalTotal.textContent = `KSh ${cartTotal.toLocaleString()}`;
  cashOutModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  cashOutModal.classList.add('hidden');
});
const cartTotalDisplay = document.getElementById('cartTotalDisplay');

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('.pname').textContent;
    const priceText = card.querySelector('.price').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);

    cartItems.push({ name, price });
    cartCountEl.textContent = cartItems.length;

    // live-update total on the page
    const runningTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalDisplay.textContent = `KSh ${runningTotal.toLocaleString()}`;

    const original = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('added');
      btn.disabled = false;
    }, 1200);
  });
});
