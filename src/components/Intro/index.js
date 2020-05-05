import React from 'react';

import './styles.css';

const Intro = () => {
    return (
        <section className="introWrapper">
            <div className="welcomeMessage">
                <span>Olá,</span>
                <h1>Sou Romulo</h1>
                <h2>Desenvolvedor Fullstack apaixonado
                    por C#, React e NodeJS.</h2>
            </div>
            <div className="profileImage">
                Minha foto
            </div>
        </section>
    );
}

export default Intro;