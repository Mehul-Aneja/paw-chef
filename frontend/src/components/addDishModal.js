import React, { useState } from 'react';
import './addDishModal.css';

const AddDishModal = ({ show, handleClose, fetchDishes }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [prepTime, setPrepTime] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image == null) {
            setNotification('Please upload an image.');
            return;
        }
        if (title === '') {
            setNotification('Please add a title.');
            return;
        }
        if (prepTime === '') {
            setNotification('Please add a prep time.');
            return;
        }
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('prep_time', prepTime);
        formData.append('image', image);
        
        fetch('http://127.0.0.1:8000/dishes/api/dishes/', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setNotification('Dish added successfully!');
            setTimeout(() => { setNotification(''); }, 3000);
            setImage(null);
            setTitle('');
            setPrepTime('');
            fetchDishes();
            handleClose();
        })
        .catch(error => {
            console.error('Error adding dish:', error);
            setNotification('Error adding dish. Please try again.');
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setNotification('Image uploaded successfully!'); 
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Add a New Dish</h2>
                <form onSubmit={handleSubmit}>
                    <div className="image-upload">
                        <label htmlFor="file-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                        </label>
                        <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} required />
                        {notification && <p className="notification">{notification}</p>}
                    </div>
                    
                    <div className="input-group">
                        <input name="DishName" placeholder="Enter Dish Name..." type="text" value={title} onChange={(e) => setTitle(e.target.value)} minLength="3" maxLength="26" required />
                    </div>
                    <div className="input-group">
                        <input name="PrepTime" placeholder="Enter Preparation Time in Minutes..." type="number" min="1" max="999" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} minLength="1" maxLength="3" required />
                    </div>
                    <button onClick={handleSubmit} type="submit">Add Dish</button>
                </form>
            </div>
        </div>
    );
};

export default AddDishModal;