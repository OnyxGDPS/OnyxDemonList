import React from 'react';
import PropTypes from 'prop-types';
import './Leaderboard.scss';

const Leaderboard = ({ players }) => {
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Leaderboard.propTypes = {
    players: PropTypes.array.isRequired
};

export default Leaderboard;