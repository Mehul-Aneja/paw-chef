import React, { useState, useEffect } from 'react';
import './team.css'
import TeamCard from '../components/teamCard';
import { fetchTeam as fetchTeamAPI } from '../api';
import SkeletonCard from '../components/skeletonCard';

const Team = () => {

    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTeam = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchTeamAPI();
            setTeam(data.team);
        } catch (error) {
            setError('Error fetching team');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => { fetchTeam(); }, []);

    return (
        <div className="team-cards-container">
            {loading && <SkeletonCard /> }
            {error && <p>{error}</p>}
            {!loading && !error && team.map((team, index) => (
                <TeamCard
                    key={index}
                    id={team.id}
                    src={team.image}
                    title={team.title} />))}
        </div>
    );
};

export default Team;