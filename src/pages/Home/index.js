import React from 'react';

import Intro from '../../components/Intro';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import Works from '../../components/Works';

import './styles.css';

const Home = () => {
    return (
        <div className="container">
            <Intro />
            <Bio />
            <Skills />
            <Works />
            {/* <section>
                <span>Skills</span>
            </section>
            <section>
                <span>GitHub</span>
            </section>
            <section>
                <span>LinkedIn</span>
            </section>
            <section>
                <span>Contato</span>
            </section>
            <section>
                <span>Rodapé</span>
            </section> */}
        </div>
    );
}

export default Home;
