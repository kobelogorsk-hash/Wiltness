// Основной JavaScript файл

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Обновление счетчика корзины
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Сохранение корзины в localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Добавление товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    showNotification('Товар добавлен в корзину');
}

// Удаление товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Изменение количества товара
function changeQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

// Рендеринг корзины
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Корзина пуста</p>
            </div>
        `;
        cartTotalElement.textContent = '0 ₽';
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} ₽</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    cartTotalElement.textContent = `${total} ₽`;
}

// Открытие/закрытие корзины
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
        renderCart();
    }
}

// Уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #27AE60;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Добавление анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Рендеринг карточки товара
function renderProductCard(product) {
    const categoryName = categories[product.category] || product.category;
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} ₽</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> В корзину
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Рендеринг популярных товаров на главной
function renderPopularProducts() {
    const container = document.getElementById('popularProducts');
    if (!container) return;

    const popularProducts = products.slice(0, 4);
    container.innerHTML = popularProducts.map(renderProductCard).join('');
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Заказ оформлен!\nСумма: ${total} ₽\n\nМенеджер свяжется с вами в ближайшее время.`);
    
    cart = [];
    saveCart();
    toggleCart();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Обработчики событий корзины
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartModal = document.getElementById('cartModal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }

    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }

    if (cartModal) {
        cartModal.querySelector('.cart-overlay').addEventListener('click', toggleCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Рендеринг популярных товаров
    renderPopularProducts();

    // Мобильное меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Форма контактов
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
        });
    }
});
