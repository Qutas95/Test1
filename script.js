// Proste zarządzanie koszykiem i symulacja płatności
const cart = [];
const product = {
  id: 'inf03',
  title: 'Kurs INF03',
  price: 99
};

// elementy
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const addToCartBtn = document.getElementById('addToCart');
const buyBtn = document.getElementById('buyBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const formMsg = document.getElementById('formMsg');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const downloadLink = document.getElementById('downloadLink');

// helper
function formatPLN(n){ return `${n} PLN`; }

function updateCartUI(){
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';
  if(cart.length === 0){
    cartItems.innerHTML = '<p>Koszyk jest pusty.</p>';
    cartTotal.textContent = formatPLN(0);
    return;
  }
  let sum = 0;
  cart.forEach((it, idx) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `<div>${it.title}</div><div>${formatPLN(it.price)} <button data-idx="${idx}" class="btn small remove">Usuń</button></div>`;
    cartItems.appendChild(row);
    sum += it.price;
  });
  cartTotal.textContent = formatPLN(sum);
  // attach remove handlers
  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', e=>{
      const idx = parseInt(e.currentTarget.dataset.idx,10);
      cart.splice(idx,1);
      updateCartUI();
    });
  });
}

function openModal(modal){
  modal.setAttribute('aria-hidden','false');
}
function closeModal(modal){
  modal.setAttribute('aria-hidden','true');
}

// dodaj do koszyka
addToCartBtn.addEventListener('click', () => {
  cart.push({...product});
  updateCartUI();
  openModal(cartModal);
});

// otwórz koszyk
cartBtn.addEventListener('click', () => {
  updateCartUI();
  openModal(cartModal);
});
closeCart.addEventListener('click', ()=> closeModal(cartModal));

// kup teraz -> bezpośrednio do checkout (dodaje produkt jeśli pusty)
buyBtn.addEventListener('click', () => {
  if(cart.length === 0) cart.push({...product});
  updateCartUI();
  closeModal(cartModal);
  openModal(checkoutModal);
});
checkoutBtn.addEventListener('click', () => {
  closeModal(cartModal);
  openModal(checkoutModal);
});
closeCheckout.addEventListener('click', ()=> closeModal(checkoutModal));

// obsługa formularza (walidacja + symulacja płatności)
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '';
  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();

  if(fullname.length < 2){
    formMsg.style.color = 'red';
    formMsg.textContent = 'Podaj poprawne imię i nazwisko.';
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    formMsg.style.color = 'red';
    formMsg.textContent = 'Podaj poprawny e‑mail.';
    return;
  }

  // Suma
  const total = cart.reduce((s, i) => s + i.price, 0);
  if(total <= 0){
    formMsg.style.color = 'red';
    formMsg.textContent = 'Koszyk jest pusty.';
    return;
  }

  // symulacja płatności
  formMsg.style.color = 'black';
  formMsg.textContent = 'Przetwarzanie płatności...';

  // symulacja krótkiego opóźnienia (natychmiastowy wynik — nie zapisujemy nic na serwerze)
  setTimeout(() => {
    formMsg.style.color = 'green';
    formMsg.textContent = 'Płatność zaksięgowana. Przygotowuję dostęp do kursu...';

    // generuj plik z treścią kursu (demo) i ustaw link do pobrania
    const demoText = `Kurs INF03 - materiał demo\n\nDziękujemy, ${fullname}!\nTo jest przykładowy plik kursu.\n\nPowodzenia na egzaminie!`;
    const blob = new Blob([demoText], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.style.display = 'inline-block';

    // pokaz potwierdzenie
    closeModal(checkoutModal);
    openModal(successModal);
    // wyczyść koszyk
    cart.length = 0;
    updateCartUI();

    // (W prawdziwej aplikacji: zapisz zamówienie na serwerze, wyślij e-mail z linkiem itp.)
  }, 900); // krótka symulacja
});

// zamknij success
closeSuccess.addEventListener('click', ()=> closeModal(successModal));

// accessibility: zamykaj modale ESC
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal[aria-hidden="false"]').forEach(m => m.setAttribute('aria-hidden','true'));
  }
});

// init
updateCartUI();
