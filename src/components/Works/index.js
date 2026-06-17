import React from 'react';

import useScrollReveal from '../../common/useScrollReveal';
import './styles.css';

const Works = (props) => {

    const { data: works } = props;
    const timelineRef = useScrollReveal(0.05);

    return (
        <section className="worksWrapper">
            <div className="worksTitle">
                <h1 className="sectionTitle">Experiências Profissionais</h1>
            </div>
            <div className="worksTimeline" ref={timelineRef}>
                {
                    works.map((work, index) =>
                        <div className={`worksEntry ${index % 2 === 0 ? 'entry--left' : 'entry--right'}`} key={index}>
                            <div className="timelineDot" />
                            <div className="worksCard">
                                {work.isCurrent && <span className="actualBadge">Atual</span>}
                                <h2 className="dateWork">{work.begin} – {work.end}</h2>
                                <h1 className="titleWork">{work.title}</h1>
                                <h3 className="companyWork">{work.company}</h3>
                                <p className="descriptionWork">{work.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Works;
