import React from "react";
import './teamCard.css'

const TeamCard = ( { src, title } ) => {

    return (
        <div className="team-card">
            <span className="team-name">{title}</span>
            <img src={src} alt={title} className="team-image"/>
        </div>
    );
};

export default TeamCard;