const products = [
    {
        id: 1,
        title: "Умный робот-пылесос",
        price: 15990,
        category: "electronics",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Robot+Vacuum",
        description: "Автоматическая уборка с управлением со смартфона."
    },
    {
        id: 2,
        title: "Набор ножей KitchenPro",
        price: 4500,
        category: "kitchen",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Knives+Set",
        description: "Профессиональная сталь, эргономичные ручки."
    },
    {
        id: 3,
        title: "Органайзер для белья",
        price: 1200,
        category: "storage",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Storage+Box",
        description: "Дышащий материал, компактное хранение."
    },
    {
        id: 4,
        title: "Универсальный очиститель",
        price: 350,
        category: "chemicals",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Cleaner",
        description: "Экологичный состав, подходит для всех поверхностей."
    },
    {
        id: 5,
        title: "Аккумуляторная дрель",
        price: 6700,
        category: "tools",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Power+Drill",
        description: "Мощный двигатель, два аккумулятора в комплекте."
    },
    {
        id: 6,
        title: "Увлажнитель воздуха",
        price: 3200,
        category: "electronics",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Humidifier",
        description: "Тихая работа, подсветка, ароматизация."
    },
    {
        id: 7,
        title: "Набор губок (10 шт)",
        price: 250,
        category: "chemicals",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Sponges",
        description: "Не царапают поверхность, отлично впитывают."
    },
    {
        id: 8,
        title: "Вакуумные пакеты",
        price: 890,
        category: "storage",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Vacuum+Bags",
        description: "Экономия места до 70%, защита от моли."
    },
    {
        id: 9,
        title: "Сковорода с антипригарным покрытием",
        price: 2100,
        category: "kitchen",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Frying+Pan",
        description: "Равномерный нагрев, долговечное покрытие."
    },
    {
        id: 10,
        title: "Набор отверток",
        price: 1500,
        category: "tools",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Screwdrivers",
        description: "Магнитные наконечники, прочный кейс."
    },
    {
        id: 11,
        title: "Светодиодная лампа (Умная)",
        price: 1800,
        category: "electronics",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Smart+Lamp",
        description: "16 млн цветов, управление голосом."
    },
    {
        id: 12,
        title: "Швабра с отжимом",
        price: 1900,
        category: "tools",
        image: "https://via.placeholder.com/300x300/ffffff/333333?text=Mop",
        description: "Легкий отжим, микрофибра в комплекте."
    }
];

const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'electronics', name: 'Электроника' },
    { id: 'kitchen', name: 'Кухня' },
    { id: 'storage', name: 'Хранение' },
    { id: 'chemicals', name: 'Бытовая химия' },
    { id: 'tools', name: 'Инструменты' }
];

// Промокоды
const promoCodes = {
    "SALE2024": 10, // 10% скидка
    "NEWUSER": 15,  // 15% скидка
    "AMET500": 500  // Фиксированная скидка 500 руб
};
