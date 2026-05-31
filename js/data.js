const products = [
    {
        id: 1,
        title: "Умный робот-пылесос",
        price: 15990,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&h=400&fit=crop",
        description: "Автоматическая уборка с управлением со смартфона. Мощность всасывания 2500 Па, время работы до 120 минут.",
        rating: 4.8,
        reviews: 156,
        orders: 892,
        specs: ["Мощность: 40Вт", "Батарея: 5200mAh", "Объем пылесборника: 0.6л"]
    },
    {
        id: 2,
        title: "Набор ножей KitchenPro",
        price: 4500,
        category: "kitchen",
        image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=400&h=400&fit=crop",
        description: "Профессиональная сталь, эргономичные ручки. В наборе 5 предметов: шеф-нож, универсальный, для хлеба, овощной, ножницы.",
        rating: 4.9,
        reviews: 234,
        orders: 1205,
        specs: ["Материал: нержавеющая сталь", "Рукоять: дерево", "5 предметов"]
    },
    {
        id: 3,
        title: "Органайзер для белья",
        price: 1200,
        category: "storage",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        description: "Дышащий материал, компактное хранение. 6 секций для удобной сортировки.",
        rating: 4.5,
        reviews: 89,
        orders: 456,
        specs: ["Размер: 30x30x10см", "Материал: нетканое полотно", "6 ячеек"]
    },
    {
        id: 4,
        title: "Универсальный очиститель",
        price: 350,
        category: "chemicals",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
        description: "Экологичный состав, подходит для всех поверхностей. Безопасен для детей и животных.",
        rating: 4.6,
        reviews: 312,
        orders: 2340,
        specs: ["Объем: 500мл", "pH: нейтральный", "Биоразлагаемый"]
    },
    {
        id: 5,
        title: "Аккумуляторная дрель",
        price: 6700,
        category: "tools",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop",
        description: "Мощный двигатель, два аккумулятора в комплекте. Крутящий момент 60 Нм, 21 режим.",
        rating: 4.7,
        reviews: 178,
        orders: 534,
        specs: ["Напряжение: 18В", "Крутящий момент: 60Нм", "2 аккумулятора"]
    },
    {
        id: 6,
        title: "Увлажнитель воздуха",
        price: 3200,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=400&h=400&fit=crop",
        description: "Тихая работа, подсветка, ароматизация. Объем резервуара 4 литра, работа до 40 часов.",
        rating: 4.4,
        reviews: 267,
        orders: 789,
        specs: ["Объем: 4л", "Площадь: до 40м²", "Уровень шума: 25дБ"]
    },
    {
        id: 7,
        title: "Набор губок (10 шт)",
        price: 250,
        category: "chemicals",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
        description: "Не царапают поверхность, отлично впитывают. Двусторонние: мягкая и абразивная сторона.",
        rating: 4.3,
        reviews: 445,
        orders: 3200,
        specs: ["Количество: 10 шт", "Размер: 10x6x2см", "Двусторонние"]
    },
    {
        id: 8,
        title: "Вакуумные пакеты",
        price: 890,
        category: "storage",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        description: "Экономия места до 70%, защита от моли. В комплекте 5 пакетов разных размеров.",
        rating: 4.6,
        reviews: 198,
        orders: 678,
        specs: ["В комплекте: 5 шт", "Размеры: S, M, L, XL", "Многоразовые"]
    },
    {
        id: 9,
        title: "Сковорода с антипригарным покрытием",
        price: 2100,
        category: "kitchen",
        image: "https://images.unsplash.com/photo-1590483255066-b82ca54ed053?w=400&h=400&fit=crop",
        description: "Равномерный нагрев, долговечное покрытие. Диаметр 28 см, подходит для всех типов плит.",
        rating: 4.7,
        reviews: 356,
        orders: 1123,
        specs: ["Диаметр: 28см", "Покрытие: керамическое", "Индукция: да"]
    },
    {
        id: 10,
        title: "Набор отверток",
        price: 1500,
        category: "tools",
        image: "https://images.unsplash.com/photo-1530124506208-ca8be62d1190?w=400&h=400&fit=crop",
        description: "Магнитные наконечники, прочный кейс. 24 предмета с различными насадками.",
        rating: 4.8,
        reviews: 289,
        orders: 945,
        specs: ["Предметов: 24", "Материал: Cr-V сталь", "Кейс в комплекте"]
    },
    {
        id: 11,
        title: "Светодиодная лампа (Умная)",
        price: 1800,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&h=400&fit=crop",
        description: "16 млн цветов, управление голосом. Совместима с Alexa и Google Home.",
        rating: 4.5,
        reviews: 423,
        orders: 1567,
        specs: ["Мощность: 9Вт", "Цоколь: E27", "Wi-Fi: 2.4ГГц"]
    },
    {
        id: 12,
        title: "Швабра с отжимом",
        price: 1900,
        category: "tools",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
        description: "Легкий отжим, микрофибра в комплекте. Телескопическая ручка до 130 см.",
        rating: 4.4,
        reviews: 167,
        orders: 523,
        specs: ["Длина: 70-130см", "Насадка: микрофибра", "Ведро в комплекте"]
    },
    {
        id: 13,
        title: "Кофемашина автоматическая",
        price: 24990,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
        description: "Приготовление эспрессо и капучино одним нажатием. Встроенная кофемолка.",
        rating: 4.9,
        reviews: 512,
        orders: 234,
        specs: ["Давление: 15 бар", "Бак: 1.8л", "Мощность: 1400Вт"]
    },
    {
        id: 14,
        title: "Блендер погружной",
        price: 3500,
        category: "kitchen",
        image: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=400&h=400&fit=crop",
        description: "Мощный мотор, несколько скоростей. В комплекте измельчитель и венчик.",
        rating: 4.6,
        reviews: 298,
        orders: 867,
        specs: ["Мощность: 800Вт", "Скоростей: 5+турбо", "Насадки: 3 шт"]
    },
    {
        id: 15,
        title: "Контейнеры для продуктов (набор)",
        price: 1800,
        category: "storage",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        description: "Герметичные контейнеры для хранения сыпучих продуктов. 10 штук разных объемов.",
        rating: 4.7,
        reviews: 234,
        orders: 756,
        specs: ["Количество: 10 шт", "Материал: пластик BPA-free", "Герметичные крышки"]
    }
];

const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'electronics', name: 'Электроника' },
    { id: 'kitchen', name: 'Кухня' },
    { id: 'storage', name: 'Хранение' },
    { id: 'chemicals', name: 'Бытовая химия' },
    { id: 'tools', name: 'Инструменты' },
    { id: 'appliances', name: 'Бытовая техника' },
    { id: 'decor', name: 'Декор' },
    { id: 'textiles', name: 'Текстиль' }
];

// Данные для специалистов услуг
const serviceWorkers = [
    {
        id: 1,
        name: "Алексей Петров",
        specialty: "Сантехник",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 287,
        orders: 542,
        experience: "12 лет",
        description: "Профессиональный сантехник с многолетним опытом. Выполняю монтаж и ремонт сантехники любой сложности.",
        services: ["Установка смесителей", "Ремонт труб", "Монтаж унитазов", "Устранение засоров", "Установка водонагревателей"],
        verified: true,
        phone: "+7 (999) 123-45-67"
    },
    {
        id: 2,
        name: "Дмитрий Соколов",
        specialty: "Мастер по ремонту часов",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 156,
        orders: 324,
        experience: "8 лет",
        description: "Ремонт наручных и настольных часов любой сложности. Работаю с механическими и кварцевыми механизмами.",
        services: ["Замена батареек", "Ремонт механизма", "Чистка часов", "Замена ремешков", "Восстановление корпуса"],
        verified: true,
        phone: "+7 (999) 234-56-78"
    },
    {
        id: 3,
        name: "Елена Морозова",
        specialty: "Ремонт гарнитуры и наушников",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 198,
        orders: 445,
        experience: "5 лет",
        description: "Специалист по ремонту аудиооборудования. Восстанавливаю наушники, гарнитуры, колонки.",
        services: ["Замена кабеля", "Ремонт разъема", "Замена динамиков", "Восстановление микрофона", "Чистка устройств"],
        verified: true,
        phone: "+7 (999) 345-67-89"
    },
    {
        id: 4,
        name: "Сергей Иванов",
        specialty: "Электрик",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 412,
        orders: 678,
        experience: "15 лет",
        description: "Лицензированный электрик. Монтаж проводки, установка розеток, светильников, электрощитов.",
        services: ["Монтаж проводки", "Установка розеток", "Подключение бытовой техники", "Ремонт щитков", "Диагностика"],
        verified: true,
        phone: "+7 (999) 456-78-90"
    },
    {
        id: 5,
        name: "Анна Кузнецова",
        specialty: "Мастер маникюра",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 523,
        orders: 892,
        experience: "7 лет",
        description: "Сертифицированный мастер ногтевого сервиса. Классический, аппаратный и комбинированный маникюр.",
        services: ["Классический маникюр", "Аппаратный маникюр", "Покрытие гель-лаком", "Дизайн ногтей", "Укрепление ногтей"],
        verified: true,
        phone: "+7 (999) 567-89-01"
    },
    {
        id: 6,
        name: "Михаил Орлов",
        specialty: "Ремонт бытовой техники",
        image: "https://images.unsplash.com/photo-1542596768-5d1d21f1cfb6?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 267,
        orders: 456,
        experience: "10 лет",
        description: "Ремонт стиральных машин, холодильников, посудомоечных машин на дому и в сервисе.",
        services: ["Диагностика", "Ремонт стиральных машин", "Ремонт холодильников", "Замена запчастей", "Профилактика"],
        verified: true,
        phone: "+7 (999) 678-90-12"
    }
];

// Категории услуг
const serviceCategories = [
    { id: 'all', name: 'Все специалисты' },
    { id: 'plumber', name: 'Сантехники' },
    { id: 'electrician', name: 'Электрики' },
    { id: 'repair', name: 'Ремонт техники' },
    { id: 'beauty', name: 'Красота' },
    { id: 'watchmaker', name: 'Часовой мастер' },
    { id: 'audio', name: 'Ремонт аудио' }
];

// Промокоды
const promoCodes = {
    "SALE2024": 10, // 10% скидка
    "NEWUSER": 15,  // 15% скидка
    "AMET500": 500  // Фиксированная скидка 500 руб
};
