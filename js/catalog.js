// JavaScript для страницы каталога

let currentCategory = '';
let currentSort = 'default';
let minPrice = 0;
let maxPrice = 0;

// Получение параметров из URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || ''
    };
}

// Фильтрация товаров
function filterProducts() {
    let filtered = [...products];

    // Фильтр по категории
    if (currentCategory) {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Фильтр по цене
    if (minPrice > 0) {
        filtered = filtered.filter(p => p.price >= minPrice);
    }
    if (maxPrice > 0) {
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Сортировка
    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    return filtered;
}

// Рендеринг каталога
function renderCatalog() {
    const container = document.getElementById('catalogProducts');
    if (!container) return;

    const filteredProducts = filterProducts();

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 60px; color: #ccc; margin-bottom: 20px;"></i>
                <h3 style="color: #7F8C8D;">Товары не найдены</h3>
                <p style="color: #95A5A6;">Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProducts.map(product => {
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
    }).join('');
}

// Обновление активной категории в фильтре
function updateActiveFilter(category) {
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
}

// Инициализация каталога
document.addEventListener('DOMContentLoaded', () => {
    const params = getUrlParams();
    currentCategory = params.category;

    // Установка активной категории
    updateActiveFilter(currentCategory);

    // Рендеринг каталога
    renderCatalog();

    // Обработчик сортировки
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderCatalog();
        });
    }

    // Обработчик фильтра по цене
    const applyPriceFilter = document.getElementById('applyPriceFilter');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');

    if (applyPriceFilter && minPriceInput && maxPriceInput) {
        applyPriceFilter.addEventListener('click', () => {
            minPrice = parseInt(minPriceInput.value) || 0;
            maxPrice = parseInt(maxPriceInput.value) || 0;
            renderCatalog();
        });
    }

    // Переключение вида (сетка/список)
    const viewBtns = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('catalogProducts');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.dataset.view;
            if (productsGrid) {
                if (view === 'list') {
                    productsGrid.style.gridTemplateColumns = '1fr';
                } else {
                    productsGrid.style.gridTemplateColumns = '';
                }
            }
        });
    });
});
