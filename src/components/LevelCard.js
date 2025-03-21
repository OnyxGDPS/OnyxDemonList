import React from 'react';
import PropTypes from 'prop-types';
import './LevelCard.scss';

const LevelCard = ({ level }) => {
    const { id, creators, verifier, records } = level;

    const creatorsText = creators.length === 1 && creators[0] === verifier
        ? 'Creator and Verifier'
        : `Creators: ${creators.join(', ')} | Verifier: ${verifier}`;

    return (
        <div className="level-card">
            <h3>Level ID: {id}</h3>
            <p>{creatorsText}</p>
            <div className="records">
                {records.map((record, index) => (
                    <div key={index} className="record">
                        <p>Player: {record.player}</p>
                        <p>Percent: {record.percent}%</p>
                        <p>Hz: {record.hz}</p>
                        <a href={record.completionLink} target="_blank" rel="noopener noreferrer">Completion Video</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

LevelCard.propTypes = {
    level: PropTypes.object.isRequired
};

export default LevelCard;