import React from 'react';
import { Link } from 'react-router-dom';
import discordIcon from '../public/assets/icons/discord.svg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Onyx Demon List</Link>
            </div>
            <div className="navbar-links">
                <Link to="/impossible-list">Impossible List</Link>
                <Link to="/challenge-list">Challenge List</Link>
                <Link to="/classic-list">Classic List</Link>
                <Link to="/platformer-list">Platformer List</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <a href="https://discord.gg/yourdiscordinvite" target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord" className="discord-icon" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;