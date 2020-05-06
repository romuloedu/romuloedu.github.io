import React from 'react';

import './styles.css';

const Skills = () => {
    return (
        <section className="skillWrapper">
            <div className="skillTitle">
                <h1 className="sectionTitle">Minhas Habilidades</h1>
            </div>
            <div className="skillCards">
                <div className="skillCard">Card 1</div>
                <div className="skillCard">Card 2</div>
                <div className="skillCard">Card 3</div>
                <div className="skillCard">Card 4</div>
            </div>
        </section>
    );
}

export default Skills;