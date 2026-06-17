import React, { useState } from 'react';

import Intro from '../../components/Intro';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import Works from '../../components/Works';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import './styles.css';

const Home = () => {

    const [data] = useState(
        {
            skills: [
                {
                    name: "Desenvolvimento de Software",
                    description: "Fullstack com C#, .NET Core, React, TypeScript e Node.js. Especializado em sistemas escaláveis e APIs robustas para o setor de saúde suplementar."
                },
                {
                    name: "Ciência de Dados & IA",
                    description: "Modelos preditivos com Python, Machine Learning, Deep Learning e redes neurais aplicados à análise de sinistralidade e tomada de decisão em saúde."
                },
                {
                    name: "Engenharia de Dados",
                    description: "Pipelines de dados com SQL, Oracle, PostgreSQL e MongoDB. Integrações e automações com Oracle AQ, Entity Framework e n8n."
                },
                {
                    name: "Arquitetura de Aplicações",
                    description: "Design de sistemas com padrões MVC e MVVM. Gestão técnica de equipes e produtos digitais, do planejamento à entrega em produção."
                }
            ],
            experiences: [
                {
                    company: "Antecipa Saúde",
                    title: "Cofundador",
                    begin: "05/2026",
                    end: "até o momento",
                    isCurrent: true,
                    description: "Healthtech pré-incubada no Porto Digital (Recife) que desenvolve modelos preditivos de sinistralidade para operadoras de saúde de médio porte."
                },
                {
                    company: "Square Labs",
                    title: "Cofundador & Coordenador Técnico",
                    begin: "02/2018",
                    end: "até o momento",
                    isCurrent: true,
                    description: "Fundei a Square Labs para oferecer desenvolvimento de software e soluções de dados sob medida. Atuamos com aplicativos, sites e modelos de dados para empresas de diversos segmentos."
                },
                {
                    company: "MedDay",
                    title: "Cofundador",
                    begin: "10/2018",
                    end: "12/2019",
                    isCurrent: false,
                    description: "Startup de healthtech focada em soluções digitais para gestão de clínicas e serviços médicos no interior de Pernambuco."
                },
                {
                    company: "Fundação Parque Tecnológico Itaipu",
                    title: "Analista de Sistemas",
                    begin: "08/2016",
                    end: "12/2016",
                    isCurrent: false,
                    description: "Desenvolvimento do SARF — Software de Análise de Registros e Fasores — ferramenta de análise de qualidade de energia elétrica em ambiente de alta tensão."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Coordenador de TI",
                    begin: "01/2010",
                    end: "03/2016",
                    isCurrent: false,
                    description: "Liderança técnica do departamento de TI. Gestão de projetos, equipe de desenvolvimento e infraestrutura. Responsável pela certificação ISO 9001:2008 da área."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Analista de Sistemas",
                    begin: "07/2009",
                    end: "12/2009",
                    isCurrent: false,
                    description: "Análise, modelagem e desenvolvimento de sistemas internos para a operadora de saúde, com foco em integrações e processos corporativos."
                },
                {
                    company: "Unimed Caruaru",
                    title: "Desenvolvedor de Software",
                    begin: "08/2007",
                    end: "03/2009",
                    isCurrent: false,
                    description: "Desenvolvimento e manutenção de sistemas corporativos com Oracle, PL/SQL e .NET para suporte às operações da operadora de saúde."
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
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
