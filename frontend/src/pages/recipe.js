import React, { useState } from 'react';
import './recipe.css'
import RecipeCard from '../components/recipecard';
import AddRecipeModal from '../components/addrecipemodal';

const recipes = [
    {
      src: '/BeefNoodles.png',
      title: 'Beef Noodles',
      mins: 45,
    },
    {
      src: '/ChickenCurry.jpg', 
      title: 'Chicken Curry',
      mins: 30,
    },
    {
        src: '/ChocolateCake.png', 
        title: 'Chocolate Cake',
        mins: 60,
    },
    {
        src: '/ChocolateCake.png', 
        title: 'Peanut Butter Chocolate',
        mins: 60,
    },
  ];

const Recipe = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="recipe-cards-container">

            {recipes.map((recipe, index) => (
                <RecipeCard
                    key={index}
                    src={recipe.src}
                    title={recipe.title}
                    mins={recipe.mins}/>))}

            <div onClick={handleOpenModal} className="add-recipe">
                <div className="add-recipe-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <span className="add-recipe-text">Add a New Recipe</span>
                <span className="add-recipe-time">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                        </svg>
                    </div>
                    <span className="add-recipe-mins">__ minutes</span>
                </span>
            </div>
            <AddRecipeModal show={showModal} handleClose={handleCloseModal} />

        </div>
    );
};

export default Recipe;