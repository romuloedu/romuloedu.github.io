import React from 'react';

import useScrollReveal from '../../common/useScrollReveal';
import './styles.css';

const Skills = (props) => {

    const { data: skills } = props;
    const cardsRef = useScrollReveal(0.1);

    return (
        <section className="skillWrapper">
            <div className="skillTitle">
                <h1 className="sectionTitle">Minhas Habilidades</h1>
            </div>
            <div className="skillCards" ref={cardsRef}>
                {
                    skills.map((skill, index) =>
                        <div className="skillCard" key={index}>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Skills;