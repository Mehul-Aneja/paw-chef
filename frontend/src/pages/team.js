import React, { useState, useEffect } from 'react';
import './team.css'
import TeamCard from '../components/teamCard';

const Team = () => {

    const [team, setTeam] = useState([]);

    const fetchTeam = () => {
        fetch('http://pawchef-backend-lb-1434329021.us-east-1.elb.amazonaws.com/team/api/team/')
        .then(response => response.json())
        .then(data => setTeam(data.team))
        .catch(error => console.error('Error fetching team:', error));
    };
    useEffect(() => { fetchTeam(); }, []);

    return (
        <div className="team-cards-container">
            {team.map((team, index) => (
                <TeamCard
                    key={index}
                    id={team.id}
                    src={team.image}
                    title={team.title} />))}
        </div>
    );
};

export default Team;