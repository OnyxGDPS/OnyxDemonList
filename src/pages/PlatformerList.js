import React, { useEffect, useState } from 'react';
import LevelCard from '../components/LevelCard';
import './Lists.scss';

const PlatformerList = () => {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        fetch('/public/list.json')
            .then(response => response.json())
            .then(data => {
                const list = data.list.filter(levelId => data[levelId].type === 'platformer');
                setLevels(list.map(levelId => data[levelId]));
            });
    }, []);

    return (
        <div className="list-page">
            <h2>Platformer List</h2>
            {levels.map((level, index) => (
                <LevelCard key={index} level={level} />
            ))}
        </div>
    );
};

export default PlatformerList;