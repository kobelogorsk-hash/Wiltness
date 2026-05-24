// Данные товаров
const products = [
    {
        id: 1,
        name: "Набор губок для посуды",
        category: "khoztovary",
        price: 299,
        description: "Набор из 10 губок для мытья посуды. Отлично удаляют загрязнения, не царапают поверхность.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Швабра с отжимом",
        category: "khoztovary",
        price: 1890,
        description: "Удобная швабра с системой отжима. Подходит для всех типов полов.",
        image: "https://images.unsplash.com/photo-1585421514738-01798e1e8f3b?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Средство для мытья посуды",
        category: "himiya",
        price: 189,
        description: "Эффективное средство для мытья посуды. Удаляет жир даже в холодной воде.",
        image: "https://images.unsplash.com/photo-1585832679652-3e8d78c0f4d2?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Универсальное чистящее средство",
        category: "himiya",
        price: 349,
        description: "Универсальное средство для уборки дома. Безопасно для детей и животных.",
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Набор отверток",
        category: "instrumenty",
        price: 1290,
        description: "Профессиональный набор отверток (12 предметов). Хромированная сталь.",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Молоток столярный",
        category: "instrumenty",
        price: 890,
        description: "Надежный молоток с деревянной ручкой. Вес 500г.",
        image: "https://images.unsplash.com/photo-1586864387967-d02ef13a6f13?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "Полотенце кухонное",
        category: "tekstil",
        price: 450,
        description: "Набор из 3 кухонных полотенец. 100% хлопок, высокая впитываемость.",
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Прихватки для горячего",
        category: "tekstil",
        price: 350,
        description: "Набор из 2 прихваток. Термостойкие, с красивым узором.",
        image: "https://images.unsplash.com/photo-1593618998160-e34015e67543?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Набор кастрюль",
        category: "kuhnya",
        price: 5990,
        description: "Набор из 5 кастрюль разного объема. Нержавеющая сталь, антипригарное покрытие.",
        image: "https://images.unsplash.com/photo-1584992236310-6eddd5696a68?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Сковорода керамическая",
        category: "kuhnya",
        price: 2490,
        description: "Керамическая сковорода диаметром 28 см. Без вредного покрытия PFOA.",
        image: "https://images.unsplash.com/photo-1590487415159-42537fa84d47?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Ваза декоративная",
        category: "dekor",
        price: 1590,
        description: "Стильная ваза для цветов. Современный дизайн, высота 30 см.",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "Свечи ароматические",
        category: "dekor",
        price: 790,
        description: "Набор из 3 ароматических свечей. Натуральный воск, время горения до 40 часов.",
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=300&fit=crop"
    }
];

// Категории товаров
const categories = {
    khoztovary: "Хоз. товары",
    himiya: "Бытовая химия",
    instrumenty: "Инструменты",
    tekstil: "Текстиль",
    kuhnya: "Для кухни",
    dekor: "Декор"
};
