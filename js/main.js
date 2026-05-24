document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon-wrapper');
    const modal = document.getElementById('cartModal');
    const closeModal = document.querySelector('.close-modal');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.getElementById('totalPrice');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const promoInput = document.getElementById('promoCode');
    const applyPromoBtn = document.getElementById('applyPromo');
    const promoMessage = document.getElementById('promoMessage');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentDiscount = 0; // Скидка в процентах или рублях (упрощенно проценты для примера логики)
    let fixedDiscount = 0;

    // Открытие/закрытие корзины
    if(cartIcon) {
        cartIcon.addEventListener('click', () => {
            modal.classList.add('active');
            renderCart();
        });
    }

    if(closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Применение промокода
    if(applyPromoBtn) {
        applyPromoBtn.addEventListener('click', () => {
            const code = promoInput.value.trim().toUpperCase();
            if (promoCodes[code]) {
                const discountValue = promoCodes[code];
                // Логика: если число меньше 100 считаем процентами, иначе фиксировано (упрощено)
                if(discountValue < 100) {
                    currentDiscount = discountValue;
                    fixedDiscount = 0;
                    promoMessage.textContent = `Промокод применен! Скидка ${discountValue}%`;
                    promoMessage.style.color = '#00ff88';
                } else {
                    fixedDiscount = discountValue;
                    currentDiscount = 0;
                    promoMessage.textContent = `Промокод применен! Скидка ${discountValue}₽`;
                    promoMessage.style.color = '#00ff88';
                }
                renderCart();
            } else {
                promoMessage.textContent = 'Неверный промокод';
                promoMessage.style.color = '#ff4757';
                currentDiscount = 0;
                fixedDiscount = 0;
                renderCart();
            }
        });
    }

    function addToCart(id) {
        const product = products.find(p => p.id === id);
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartCount();
        saveCart();
        
        // Анимация кнопки (визуальный отклик)
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "Добавлено!";
        btn.style.background = "#00ff88";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ""; // сброс к CSS градиенту
        }, 1000);
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCart();
        updateCartCount();
    }

    function changeQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                saveCart();
                renderCart();
            }
        }
    }

    function renderCart() {
        if (!cartItemsContainer) return;
        
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; padding:20px;">Корзина пуста</p>';
            totalElement.textContent = 'Итого: 0 ₽';
            return;
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <strong>${item.title}</strong><br>
                    <small>${item.price} ₽ x ${item.quantity}</small>
                </div>
                <div class="cart-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background:#ff4757; margin-left:5px;">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });

        // Расчет итоговой суммы со скидкой
        let finalTotal = total;
        if (currentDiscount > 0) {
            finalTotal = total - (total * (currentDiscount / 100));
        } else if (fixedDiscount > 0) {
            finalTotal = Math.max(0, total - fixedDiscount);
        }

        totalElement.textContent = `Итого: ${Math.round(finalTotal)} ₽`;
        if(currentDiscount > 0 || fixedDiscount > 0) {
            totalElement.innerHTML += `<br><small style="font-size:0.8rem; color:#00ff88">Скидка применена</small>`;
        }
    }

    function updateCartCount() {
        const countElement = document.querySelector('.cart-count');
        if (countElement) {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            countElement.textContent = totalCount;
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) {
                alert("Ваша корзина пуста!");
                return;
            }
            alert("Спасибо за заказ! Менеджер свяжется с вами для уточнения деталей оплаты (СБП, Яндекс Pay).");
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
            modal.classList.remove('active');
        });
    }

    // Инициализация
    updateCartCount();
    
    // Глобальная функция для доступа из HTML
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.changeQuantity = changeQuantity;
});
