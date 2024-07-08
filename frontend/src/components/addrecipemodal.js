import React, { useState } from 'react';
import './addrecipemodal.css';

const AddRecipeModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [mins, setMins] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image == null) {
        setNotification('Please upload an image.');
        return;
    }
    if (title == '') {
        setNotification('Please add a title.');
        return;
    }
    if (mins == '') {
        setNotification('Please add a prep time.');
        return;
    }
    // Add submit logic here
    setNotification('');
    setImage(null);
    setTitle('');
    setMins('');
    handleClose();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setNotification('Image uploaded successfully!'); 
  };

  return (
  <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Add a New Recipe</h2>
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
                    <input name="RecipeName" placeholder="Enter Recipe Name..." type="text" value={title} onChange={(e) => setTitle(e.target.value)} minLength="3" maxLength="26" required />
                </div>
                <div className="input-group">
                    <input name="PrepTime" placeholder="Enter Preparation Time in Minutes..." type="number" min="1" max="999" value={mins} onChange={(e) => setMins(e.target.value)} minLength="1" maxLength="3" required />
                </div>
                <button onClick={handleSubmit} type="submit">Add Recipe</button>
            </form>
        </div>
    </div>
  );
};

export default AddRecipeModal;
