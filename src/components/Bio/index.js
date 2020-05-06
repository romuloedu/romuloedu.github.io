import React from 'react';

import './styles.css';

const Bio = () => {
    return (
        <section className="bioWrapper">
            <div className="bioTitle">
                <h1>Sobre mim</h1>
            </div>
            <div className="bioDescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>
            </div>
        </section>
    );
}

export default Bio;