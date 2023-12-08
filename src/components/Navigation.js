import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mynotes">My Notes</Link>
                </li>
                <li>
                    <Link to="/Favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;