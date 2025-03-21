import React from 'react';
import PropTypes from 'prop-types';
import './LevelDetail.scss';

const LevelDetail = ({ level }) => {
    return (
        <div className="level-detail">
            <h2>{level.id}</h2>
            <p>Creators: {level.creators.join(', ')}</p>
            <p>Verifier: {level.verifier}</p>
            <div className="records">
                {level.records.map((record, index) => (
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

LevelDetail.propTypes = {
    level: PropTypes.object.isRequired
};

export default LevelDetail;