import React from 'react';

import './styles.css';

const Works = (props) => {

    const { data: works } = props;

    return (
        <section className="worksWrapper">
            <div className="worksTitle">
                <h1 className="sectionTitle">Experiências Profissionais</h1>
            </div>
            <div className="worksCards">
                {
                    works.map((work, index) =>
                        <div className="worksCard" key={index}>
                            <h1>{work.name}</h1>
                            <p>{work.description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Works;