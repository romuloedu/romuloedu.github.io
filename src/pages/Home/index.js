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
                    company: "Square Labs",
                    title: "Sócio-Fundador / Desenvolvedor",
                    begin: "02/2018",
                    end: "até o momento",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "MedDay",
                    title: "Sócio-Fundador / Desenvolvedor",
                    begin: "10/2018",
                    end: "12/2019",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Fundação Parque Tecnológico Itaipu",
                    title: "Analista de Sistemas",
                    begin: "08/2016",
                    end: "12/2016",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Coordenador de TI",
                    begin: "01/2010",
                    end: "03/2016",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Analista de Sistemas",
                    begin: "07/2009",
                    end: "12/2009",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        "Pellentesque varius, quam ac varius semper, nisi nulla pulvinar sem, " +
                        "nec efficitur elit risus molestie lectus. Quisque ut imperdiet dui, in rutrum odio."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Desenvolvedor de Software",
                    begin: "08/2007",
                    end: "03/2009",
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
