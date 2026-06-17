import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles.css';

const Intro = () => {
    return (
        <section className="introWrapper">
            <div className="col1">
                <span>Olá,</span>
                <h1>Sou Romulo Eduardo.</h1>
                <h2>Fullstack & Cientista de Dados</h2>
                <h2>C# | Python | React</h2>
                <AnchorLink href="#bio">Me Conheça</AnchorLink>
            </div>
            <div className="col2">
                <div className="layer1"></div>
                <div className="layer2"></div>
                <div className="layer3"></div>
                <div className="layer4"></div>
            </div>
            <AnchorLink href="#bio" className="scrollIndicator" aria-label="Rolar para baixo">
                ↓
            </AnchorLink>
        </section>
    );
}

export default Intro;