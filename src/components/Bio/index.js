import React from 'react';

import ProfilePic from '../../assets/profile-pic.jpg';
import CV from '../../assets/cv.pdf';

import './styles.css';

const Bio = () => {
    return (
        <section className="bioWrapper" id="bio">
            <div className="bioTitle">
                <h1 className="sectionTitle">Sobre mim</h1><br />
                <img src={ProfilePic} alt="Romulo Eduardo" />
            </div>
            <div className="bioDescription">
                <p>
                    Coordenador de Desenvolvimento e Cientista de Dados com foco em saúde suplementar.
                    Cofundador da Antecipa Saúde, healthtech pré-incubada no Porto Digital (Recife) que
                    desenvolve modelos preditivos de sinistralidade para operadoras de saúde. À frente da
                    Square Labs desde 2018, entregando soluções de software e dados sob medida para
                    empresas de diferentes segmentos.
                </p>
                <p>
                    Minha stack principal abrange C# e .NET no backend, Python para modelos de machine
                    learning e deep learning, e React no frontend. Formado em Análise e Desenvolvimento
                    de Sistemas pela FAFICA, com MBA em Data Science e Analytics pela USP/Esalq e
                    Especialização em Deep Learning pelo Centro de Informática da UFPE.
                </p>
                <a href={CV} className="downloadCV" target="blank">
                    Meu Currículo
                </a>
                <a href="https://linkedin.com/in/romuloeduardo/"
                    className="visitLinkedIn"
                    target="blank">
                    Meu LinkedIn
                </a>
                <a href="https://github.com/romuloedu"
                    className="visitLinkedIn"
                    target="blank">
                    Meu GitHub
                </a>
            </div>
        </section >
    );
}

export default Bio;