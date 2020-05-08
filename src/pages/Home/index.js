import React, { useState } from 'react';

import Intro from '../../components/Intro';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import Works from '../../components/Works';

import './styles.css';

const Home = () => {

    const [skills] = useState(
        [
            {
                name: "Desenvolvimento Web",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                    "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
            },
            {
                name: "Desenvolvimento Mobile",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                    "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
            },
            {
                name: "CI/CD",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                    "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
            },
            {
                name: "Arquitetura de Aplicações",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                    "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
            },
            {
                name: "Arquitetura de Aplicações",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                    "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
            }
        ]
    );

    return (
        <div className="container">
            <Intro />
            <Bio />
            <Skills data={skills} />
            <Works data={skills} />
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
