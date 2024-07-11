import React, { useState, useEffect } from 'react';
import './dishes.css'
import DishCard from '../components/dishCard';
import AddDishModal from '../components/addDishModal';

const Dishes = () => {

    const [dishes, setDishes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetchDishes = () => {
        fetch('http://127.0.0.1:8000/dishes/api/dishes/')
        .then(response => response.json())
        .then(data => setDishes(data.dishes))
        .catch(error => console.error('Error fetching dishes:', error));
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => { fetchDishes(); }, []);

    return (
        <div className="dish-cards-container">

            {dishes.map((dish, index) => (
                <DishCard
                    key={index}
                    id={dish.id}
                    src={dish.image}
                    title={dish.title}
                    mins={dish.prep_time}
                    fetchDishes={fetchDishes}/>))}

            <div onClick={handleOpenModal} className="add-dish">
                <div className="add-dish-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <span className="add-dish-text">Add a New Dish</span>
                <span className="add-dish-time">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                        </svg>
                    </div>
                    <span className="add-dish-mins">__ minutes</span>
                </span>
            </div>
            <AddDishModal show={showModal} handleClose={handleCloseModal} fetchDishes={fetchDishes} />

        </div>
    );
};

export default Dishes;