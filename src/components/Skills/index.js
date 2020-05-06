import React from 'react';

import './styles.css';

const Skills = () => {
    return (
        <section className="skillWrapper">
            <div className="skillTitle">
                <h1 className="sectionTitle">Minhas Habilidades</h1>
            </div>
            <div className="skillCards">
                <div className="skillCard">
                    <h1>
                        C# (C Sharp)
                    </h1>
                    <p>Lorem impsum sit dolor ammet.</p>
                </div>
                <div className="skillCard">
                    <h1>
                        React e React Native
                    </h1>
                    <p>Lorem impsum sit dolor ammet.</p>
                </div>
                <div className="skillCard">
                    <h1>
                        CSS e Javascript
                    </h1>
                    <p>Lorem impsum sit dolor ammet.</p>
                </div>
                <div className="skillCard">
                    <h1>
                        Banco de Dados
                    </h1>
                    <p>Lorem impsum sit dolor ammet.</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;