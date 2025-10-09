// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Elementy
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
  
    const buyNowBtn = document.getElementById('buyNowBtn');
  
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.getElementById('closeCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    const formMsg = document.getElementById('formMsg');
  
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccess');
    const downloadLink = document.getElementById('downloadLink');
  
    // Dane kursu
    const kurs = {
      id: 'kursinf03',
      title: 'Kurs INF03 - Zaawansowane przygotowanie',
      price: 99
    };
  
    // Koszyk (na razie tylko 1 produkt, ale można rozszerzyć)
    let cart = [];
  
    // Aktualizacja koszyka w UI
    function updateCartUI() {
      cartCount.textContent = cart.length;
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Twój koszyk jest pusty.</p>';
        cartTotal.textContent = '0 PLN';
        return;
      }
  
      let html = '<ul>';
      let total = 0;
      cart.forEach(item => {
        html += `<li>${item.title} — ${item.price} PLN</li>`;
        total += item.price;
      });
      html += '</ul>';
      cartItemsContainer.innerHTML = html;
      cartTotal.textContent = total + ' PLN';
    }
  
    // Dodaj do koszyka
    function addToCart(product) {
      // Jeśli już jest, nie dodaj drugi raz
      if (cart.find(item => item.id === product.id)) {
        alert('Produkt jest już w koszyku');
        return;
      }
      cart.push(product);
      updateCartUI();
      alert('Dodano kurs do koszyka');
    }
  
    // Otwórz modal
    function openModal(modal) {
      modal.setAttribute('aria-hidden', 'false');
    }
  
    // Zamknij modal
    function closeModal(modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  
    // Eventy
  
    // Pokaż koszyk po kliknięciu
    cartBtn.addEventListener('click', () => {
      updateCartUI();
      openModal(cartModal);
    });
  
    // Zamknij koszyk
    closeCartBtn.addEventListener('click', () => {
      closeModal(cartModal);
    });
  
    // Kup teraz - dodaj i otwórz formularz zamówienia
    buyNowBtn.addEventListener('click', () => {
      addToCart(kurs);
      updateCartUI();
      closeModal(cartModal);
      openModal(checkoutModal);
    });
  
    // Zamknij checkout
    closeCheckoutBtn.addEventListener('click', () => {
      closeModal(checkoutModal);
      formMsg.textContent = '';
      checkoutForm.reset();
    });
  
    // Zamknij sukces
    closeSuccessBtn.addEventListener('click', () => {
      closeModal(successModal);
    });
  
    // Obsługa formularza checkout
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Prosta walidacja
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
  
      if (fullname.length < 2) {
        formMsg.textContent = 'Podaj poprawne imię i nazwisko (min. 2 znaki).';
        formMsg.style.color = 'red';
        return;
      }
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        formMsg.textContent = 'Podaj poprawny adres e-mail.';
        formMsg.style.color = 'red';
        return;
      }
  
      // Symulacja płatności
      formMsg.textContent = 'Przetwarzanie płatności...';
      formMsg.style.color = 'black';
  
      setTimeout(() => {
        formMsg.textContent = '';
        closeModal(checkoutModal);
        openModal(successModal);
        cart = [];
        updateCartUI();
  
        // Ustaw link do pobrania (demo)
        downloadLink.href = 'demo-kurs.txt'; // to możesz zmienić na faktyczny plik
      }, 2000);
    });
  
  });
  