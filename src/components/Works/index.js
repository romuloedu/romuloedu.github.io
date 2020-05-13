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
                            {
                                index === 0
                                    ? <span className="actualBadge">Atual</span>
                                    : null
                            }
                            <h2 className="dateWork">{work.begin} - {work.end}</h2>
                            <h1 className="titleWork">{work.title}</h1>
                            <h3 className="companyWork">{work.company}</h3>
                            <p className="descriptionWork">{work.description}</p>
                        </div>
                    )
                }
            </div>
        </section >
    );
}

export default Works;