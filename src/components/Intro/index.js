import React from 'react';

import ProfilePhoto from '../../assets/profile.png';

import './styles.css';

const Intro = () => {
    return (
        <section className="introWrapper">
            <div className="welcomeMessage">
                <span>Olá,</span>
                <h1>Sou Romulo</h1>
                <h2>Desenvolvedor Fullstack | C#, React e NodeJS.</h2>
                <a href="#">Saiba Mais</a>
            </div>
            <div className="profileImage">
                {/* <img src={ProfilePhoto} alt="Foto de Romulo Eduardo" /> */}
            </div>
        </section>
    );
}

export default Intro;