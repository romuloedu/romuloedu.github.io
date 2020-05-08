import React from 'react';

import './styles.css';

const Intro = () => {
    return (
        <section className="introWrapper">
            <div className="col1">
                <span>Olá,</span>
                <h1>Sou Romulo Eduardo.</h1>
                <h2>Desenvolvedor Fullstack</h2>
                <h2>C# | ReactJS e React Native | Node.JS</h2>
                <a href="#">Leia Minha Bio</a>
            </div>
            <div className="col2">
                <div className="layer1"></div>
                <div className="layer2"></div>
                <div className="layer3"></div>
                <div className="layer4"></div>
            </div>
        </section>
    );
}

export default Intro;