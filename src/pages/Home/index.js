import React, { useState } from 'react';

import Intro from '../../components/Intro';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import Works from '../../components/Works';

import './styles.css';

const Home = () => {

    const [data] = useState(
        {
            skills: [
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
                }
            ],
            experiences: [
                {
                    company: "Microsoft",
                    title: "Desenvolvimento Web",
                    begin: "01/01/2007",
                    end: "31/12/2020",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Microsoft",
                    title: "Desenvolvimento Web",
                    begin: "",
                    end: "",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Microsoft",
                    title: "Desenvolvimento Web",
                    begin: "",
                    end: "",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                }
            ]
        });

    return (
        <div className="container">
            <Intro />
            <Bio />
            {
                data.skills.length > 0
                    ? <Skills data={data.skills} />
                    : null
            }
            {
                data.experiences.length > 0
                    ? <Works data={data.experiences} />
                    : null
            }
            {/*
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
