'use strict';
document.documentElement.classList.add('js');

/* Page ready — no splash screen; start the hero entrance immediately */

/* Hero title word-split: wrap each word so it can wipe up one by one.
   Runs before .loaded so words start hidden without a visible flash. */
(function splitHeroTitle() {
  const title = document.querySelector('.hero_title');
  if (!title || title.querySelector('.w')) return;
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, null);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  let wi = 0;
  textNodes.forEach(node => {
    const parts = node.textContent.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach(part => {
      if (part === '') return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
      const w = document.createElement('span');
      w.className = 'w';
      w.style.setProperty('--wi', wi++);
      const inner = document.createElement('span');
      inner.className = 'wi';
      inner.textContent = part;
      w.appendChild(inner);
      frag.appendChild(w);
    });
    node.parentNode.replaceChild(frag, node);
  });
})();

document.body.classList.add('loaded');
setTimeout(() => document.body.classList.add('hero-done'), 2600); // safety: force hero visible

/* Mobile menu */
const trigger = document.getElementById('menuTrigger');
const opened = document.getElementById('menuOpened');
if (trigger && opened) {
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('open');
    opened.classList.toggle('open');
  });
  opened.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      trigger.classList.remove('open');
      opened.classList.remove('open');
    });
  });
}

/* Service cards — + toggles details (accordion: only one card open at a
   time — opening a card collapses the previously open one; clicking the
   open card's × closes it) */
const serviceToggles = document.querySelectorAll('.service_card-toggle');
serviceToggles.forEach(btn => {
  if (btn.dataset.bound) return; // guard: never bind twice (double script load)
  btn.dataset.bound = '1';
  btn.addEventListener('click', () => {
    const card = btn.closest('.service_card');
    const willOpen = !card.classList.contains('open');
    if (willOpen) {
      // Accordion: collapse every other open card first
      document.querySelectorAll('.service_card.open').forEach(other => {
        if (other !== card) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.service_card-toggle');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
    card.classList.toggle('open', willOpen);
    btn.setAttribute('aria-expanded', String(willOpen));
  });
});

/* Order form → WhatsApp */
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  const uploadBtn = document.getElementById('uploadBtn');
  const fileInput = document.getElementById('of-image');
  const preview = document.getElementById('uploadPreview');
  const previewImg = document.getElementById('uploadPreviewImg');
  const removeBtn = document.getElementById('uploadRemove');
  let selectedFile = null;

  uploadBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please choose an image file.');
      fileInput.value = '';
      return;
    }
    selectedFile = file;
    previewImg.src = URL.createObjectURL(file);
    preview.hidden = false;
    uploadBtn.style.display = 'none';
  });
  removeBtn.addEventListener('click', () => {
    selectedFile = null;
    fileInput.value = '';
    preview.hidden = true;
    previewImg.src = '';
    uploadBtn.style.display = '';
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('of-name').value.trim();
    const phone = document.getElementById('of-phone').value.trim();
    const occasion = document.getElementById('of-occasion').value;
    const date = document.getElementById('of-date').value;
    const type = document.getElementById('of-type').value;
    const size = document.getElementById('of-size').value.trim();
    const message = document.getElementById('of-message').value.trim();

    const lines = [
      'Hi Sweet Blooms by Abi, I would like to place an order!',
      '',
      'Name: ' + name,
      'Phone: ' + phone
    ];
    if (occasion) lines.push('Occasion: ' + occasion);
    if (date) lines.push('Date needed: ' + date);
    if (type) lines.push('Bake: ' + type);
    if (size) lines.push('Size / servings: ' + size);
    if (message) lines.push('Details: ' + message);
    if (selectedFile) lines.push('Reference image: ' + selectedFile.name + ' (I will send the photo here)');

    const text = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/94767691862?text=' + text, '_blank', 'noopener');
  });
}

/* Scroll reveal — slide-up cards (.reveal) + clip-wipe images (.reveal-img) */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach(el => {
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
  const idx = siblings.indexOf(el);
  el.style.setProperty('--d', (idx * 90) + 'ms');
});
/* Clip-wipe images are observed via their (unclipped) wrapper — Chromium
   treats a fully clip-path-clipped element as zero-area, so it would never
   intersect on its own. */
const revealImgs = document.querySelectorAll('.reveal-img');
if (reducedMotion) {
  revealEls.forEach(el => el.classList.add('in-view'));
  revealImgs.forEach(el => el.classList.add('in-view'));
} else if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const t = entry.target;
        const img = t.classList.contains('reveal-img') ? t : t.querySelector('.reveal-img');
        if (img) img.classList.add('in-view');
        t.classList.add('in-view');
        setTimeout(() => {
          if (img) img.classList.add('reveal-force');
          t.classList.add('reveal-force');
        }, 1600); // safety net
        io.unobserve(t);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));
  revealImgs.forEach(img => io.observe(img.parentElement));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
  revealImgs.forEach(el => el.classList.add('in-view'));
}

/* Home v2: transparent header over the hero — goes solid once scrolled */
const homeMenu = document.querySelector('body.home .menu');
if (homeMenu) {
  const onHomeScroll = () => homeMenu.classList.toggle('scrolled', window.scrollY > 40);
  onHomeScroll();
  window.addEventListener('scroll', onHomeScroll, { passive: true });
}

/* Subtle parallax on the story photo */
const parImg = document.querySelector('[data-parallax]');
if (parImg && !reducedMotion) {
  let ticking = false;
  const update = () => {
    const rect = parImg.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom > 0 && rect.top < vh) {
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      parImg.style.transform = 'scale(1.12) translateY(' + (progress * -30).toFixed(1) + 'px)';
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

/* Cursor-follow "VIEW" badge on portfolio photos (hover-capable devices only) */
const workCursor = document.getElementById('workCursor');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (workCursor && canHover && !reducedMotion) {
  const wraps = document.querySelectorAll('.work_card-img-wrap');
  const move = (e) => {
    workCursor.style.left = e.clientX + 'px';
    workCursor.style.top = e.clientY + 'px';
  };
  wraps.forEach(w => {
    w.addEventListener('mouseenter', () => {
      workCursor.classList.add('show');
    });
    w.addEventListener('mousemove', move);
    w.addEventListener('mouseleave', () => {
      workCursor.classList.remove('show');
    });
  });
}

/* Newsletter → WhatsApp (no backend) */
const newsForm = document.getElementById('newsForm');
if (newsForm) {
  newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = newsForm.querySelector('[name="news-name"]').value.trim();
    const email = newsForm.querySelector('[name="news-email"]').value.trim();
    const text = encodeURIComponent(
      'Hi Sweet Blooms by Abi, please add me to the newsletter!\n\nName: ' + name + '\nEmail: ' + email
    );
    window.open('https://wa.me/94767691862?text=' + text, '_blank', 'noopener');
    newsForm.reset();
  });
}

/* Menu "More" buttons — reveal the 4th item of each category */
const menuMoreBtns = document.querySelectorAll('.menu-more-btn');
menuMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.menu-section');
    const isOpen = section.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? 'Less' : 'More';
  });
});

/* Menu cart — add to cart, finalize, send via WhatsApp */
const cartFab = document.getElementById('cartFab');
if (cartFab) {
  const cartCount = document.getElementById('cartCount');
  const cartPanel = document.getElementById('cartPanel');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartTotal = document.getElementById('cartTotal');
  const cartView = document.getElementById('cartView');
  const cartCheckoutView = document.getElementById('cartCheckoutView');
  const cartCheckout = document.getElementById('cartCheckout');
  const cartBack = document.getElementById('cartBack');
  const cartSend = document.getElementById('cartSend');
  const cartToast = document.getElementById('cartToast');
  const items = [];

  const itemName = (btn) => btn.closest('.m-item').querySelector('h3').textContent.trim();
  const displayName = (btn) => {
    const sec = btn.closest('.menu-section');
    const cat = sec ? sec.querySelector('.title-l').textContent.trim() : '';
    return cat ? itemName(btn) + ' (' + cat + ')' : itemName(btn);
  };

  document.querySelectorAll('.m-item .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = displayName(btn);
      const found = items.find(i => i.name === name);
      if (found) found.qty++;
      else items.push({ name, qty: 1 });
      renderCart();
      showToast(itemName(btn) + ' added to your order');
    });
  });

  function renderCart() {
    const count = items.reduce((s, i) => s + i.qty, 0);
    cartCount.textContent = count;
    cartFab.hidden = count === 0;
    cartTotal.textContent = count;
    cartEmpty.hidden = items.length > 0;
    cartItemsEl.innerHTML = '';
    items.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML =
        '<span class="cart-item-name"></span>' +
        '<div class="cart-qty">' +
          '<button type="button" data-act="dec" aria-label="Decrease quantity">-</button>' +
          '<span></span>' +
          '<button type="button" data-act="inc" aria-label="Increase quantity">+</button>' +
        '</div>' +
        '<button type="button" class="cart-item-remove" data-act="del" aria-label="Remove ' + item.name + '">✕</button>';
      row.querySelector('.cart-item-name').textContent = item.name;
      row.querySelector('.cart-qty span').textContent = item.qty;
      row.querySelector('[data-act="dec"]').addEventListener('click', () => changeQty(idx, -1));
      row.querySelector('[data-act="inc"]').addEventListener('click', () => changeQty(idx, 1));
      row.querySelector('[data-act="del"]').addEventListener('click', () => removeItem(idx));
      cartItemsEl.appendChild(row);
    });
  }

  function changeQty(idx, delta) {
    items[idx].qty += delta;
    if (items[idx].qty <= 0) items.splice(idx, 1);
    renderCart();
  }
  function removeItem(idx) {
    items.splice(idx, 1);
    renderCart();
  }

  let toastTimer = null;
  function showToast(msg) {
    cartToast.textContent = msg;
    cartToast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { cartToast.hidden = true; }, 2200);
  }

  const openCart = () => {
    cartPanel.classList.add('open');
    cartPanel.setAttribute('aria-hidden', 'false');
    cartOverlay.hidden = false;
    document.body.style.overflow = 'hidden'; // keep the page behind the cart still
  };
  const closeCart = () => {
    cartPanel.classList.remove('open');
    cartPanel.setAttribute('aria-hidden', 'true');
    cartOverlay.hidden = true;
    document.body.style.overflow = '';
  };

  cartFab.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  cartCheckout.addEventListener('click', () => {
    if (items.length === 0) return;
    cartView.hidden = true;
    cartCheckoutView.hidden = false;
  });
  cartBack.addEventListener('click', () => {
    cartCheckoutView.hidden = true;
    cartView.hidden = false;
  });

  cartSend.addEventListener('click', () => {
    const name = document.getElementById('co-name').value.trim();
    const phone = document.getElementById('co-phone').value.trim();
    if (!name || !phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    const date = document.getElementById('co-date').value;
    const notes = document.getElementById('co-notes').value.trim();
    const lines = [
      'Hi Sweet Blooms by Abi, I would like to place an order!',
      '',
      'Items:'
    ];
    items.forEach(i => lines.push('- ' + i.qty + 'x ' + i.name));
    lines.push('', 'Name: ' + name, 'Phone: ' + phone);
    if (date) lines.push('Date needed: ' + date);
    if (notes) lines.push('Notes: ' + notes);
    const text = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/94767691862?text=' + text, '_blank', 'noopener');
    items.length = 0;
    renderCart();
    document.getElementById('co-name').value = '';
    document.getElementById('co-phone').value = '';
    document.getElementById('co-date').value = '';
    document.getElementById('co-notes').value = '';
    cartCheckoutView.hidden = true;
    cartView.hidden = false;
    closeCart();
    showToast('Order sent — we will reply on WhatsApp!');
  });
}
