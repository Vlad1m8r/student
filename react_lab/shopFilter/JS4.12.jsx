import React, { useState } from 'react';
import './fm.css';

const objects = [
    {
        id: 1,
        name: 'Смартфон 1',
        manufacturer: 'Apple',
        color: 'Черный',
        price: 1000,
        image: 'phone1.jpg',
    },
    {
        id: 2,
        name: 'Планшет 1',
        manufacturer: 'Samsung',
        color: 'Белый',
        price: 800,
        image: 'tablet1.jpg',
    },
    {
        id: 3,
        name: 'Смартфон 2',
        manufacturer: 'Apple',
        color: 'Золотой',
        price: 1200,
        image: 'phone2.jpg',
    },
    {
        id: 4,
        name: 'Планшет 2',
        manufacturer: 'Samsung',
        color: 'Черный',
        price: 900,
        image: 'tablet2.jpg',
    },
    {
        id: 5,
        name: 'Смартфон 3',
        manufacturer: 'Apple',
        color: 'Розовый',
        price: 1100,
        image: 'phone3.jpg',
    },
    {
        id: 6,
        name: 'Планшет 3',
        manufacturer: 'Samsung',
        color: 'Серебристый',
        price: 950,
        image: 'tablet3.jpg',
    },
    {
        id: 7,
        name: 'Смартфон 4',
        manufacturer: 'Apple',
        color: 'Черный',
        price: 1050,
        image: 'phone4.jpg',
    },
    {
        id: 8,
        name: 'Планшет 4',
        manufacturer: 'Samsung',
        color: 'Золотой',
        price: 850,
        image: 'tablet4.jpg',
    },
    {
        id: 9,
        name: 'Смартфон 5',
        manufacturer: 'Apple',
        color: 'Белый',
        price: 1150,
        image: 'phone5.jpg',
    },
    {
        id: 10,
        name: 'Планшет 5',
        manufacturer: 'Samsung',
        color: 'Черный',
        price: 950,
        image: 'tablet5.jpg',
    },
    {
        id: 11,
        name: 'Смартфон 6',
        manufacturer: 'Apple',
        color: 'Серебристый',
        price: 1000,
        image: 'phone6.jpg',
    },
    {
        id: 12,
        name: 'Планшет 6',
        manufacturer: 'Samsung',
        color: 'Черный',
        price: 800,
        image: 'tablet6.jpg',
    },
    {
        id: 13,
        name: 'Смартфон 7',
        manufacturer: 'Apple',
        color: 'Золотой',
        price: 1200,
        image: 'phone7.jpg',
    },
    {
        id: 14,
        name: 'Планшет 7',
        manufacturer: 'Samsung',
        color: 'Белый',
        price: 900,
        image: 'tablet7.jpg',
    },
    {
        id: 15,
        name: 'Смартфон 8',
        manufacturer: 'Apple',
        color: 'Черный',
        price: 1100,
        image: 'phone8.jpg',
    },
    {
        id: 16,
        name: 'Планшет 8',
        manufacturer: 'Samsung',
        color: 'Золотой',
        price: 850,
        image: 'tablet8.jpg',
    },
    {
        id: 17,
        name: 'Смартфон 9',
        manufacturer: 'Apple',
        color: 'Белый',
        price: 1050,
        image: 'phone9.jpg',
    },
    {
        id: 18,
        name: 'Планшет 9',
        manufacturer: 'Samsung',
        color: 'Черный',
        price: 950,
        image: 'tablet9.jpg',
    },
    {
        id: 19,
        name: 'Смартфон 10',
        manufacturer: 'Apple',
        color: 'Серый',
        price: 1100,
        image: 'phone10.jpg',
    },
    {
        id: 20,
        name: 'Планшет 10',
        manufacturer: 'Samsung',
        color: 'Белый',
        price: 950,
        image: 'tablet10.jpg',
    },
];


const App = () => {
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [colorFilter, setColorFilter] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleColorFilterChange = (event) => {
        setColorFilter(event.target.value);
    };

    const filteredObjects = objects.filter((object) => {
        const nameMatch = object.name.toLowerCase().includes(search.toLowerCase());
        const priceMatch =
            (minPrice === '' || object.price >= parseInt(minPrice)) &&
            (maxPrice === '' || object.price <= parseInt(maxPrice));
        const colorMatch = colorFilter === '' || object.color.toLowerCase() === colorFilter.toLowerCase();
        return nameMatch && priceMatch && colorMatch;
    });

    return (
        <div className="container">
            <header>
                <input
                    type="text"
                    placeholder="Поиск..."
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                />

                <div className="filter-container">
                    <label className="filter-label">Цена:</label>
                    <input
                        type="number"
                        placeholder="От"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="filter-input"
                    />
                    <input
                        type="number"
                        placeholder="До"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="filter-input"
                    />
                </div>

                <div className="filter-container">
                    <label className="filter-label">Цвет:</label>
                    <select value={colorFilter} onChange={handleColorFilterChange} className="filter-input select-input">
                        <option value="">Все цвета</option>
                        {[...new Set(objects.map((object) => object.color.toLowerCase()))].map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
            </header>

            <div className="slider">
                {/* Вставьте здесь код слайдера */}
            </div>

            <div className="content">
                {filteredObjects.map((object) => (
                    <ObjectCard key={object.id} object={object} />
                ))}
            </div>
        </div>
    );
};

const ObjectCard = ({ object }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCardHover = () => {
        setIsHovered(true);
    };

    const handleCardLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`object-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
        >
            <img src={object.image} alt={object.name} className="card-image" />
            <div className="card-details">
                <div className="card-info">
                    <span className="card-manufacturer">{object.manufacturer}</span>
                    <span className="card-color">{object.color}</span>
                </div>
                <div className="card-price">{object.price} руб.</div>
                <div className="card-name">{object.name}</div>
            </div>
        </div>
    );
};

export default App;
