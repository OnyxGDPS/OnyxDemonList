import React, { useEffect, useState } from 'react';
import Leaderboard from '../components/Leaderboard';
import './LeaderboardPage.scss';

const LeaderboardPage = () => {
    const [players, setPlayers] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('/public/leaderboard.json')
            .then(response => response.json())
            .then(data => {
                // Apply filter logic here if needed
                setPlayers(data.players);
            });
    }, [filter]);

    return (
        <div className="leaderboard-page">
            <h2>Leaderboard</h2>
            <div className="filters">
                <button onClick={() => setFilter('')}>All Lists</button>
                <button onClick={() => setFilter('impossible')}>Impossible List</button>
                <button onClick={() => setFilter('challenge')}>Challenge List</button>
                <button onClick={() => setFilter('classic')}>Classic List</button>
                <button onClick={() => setFilter('platformer')}>Platformer List</button>
            </div>
            <Leaderboard players={players} />
        </div>
    );
};

export default LeaderboardPage;