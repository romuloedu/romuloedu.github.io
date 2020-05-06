import React from 'react';

import './styles.css';

const Bio = () => {
    return (
        <section className="bioWrapper">
            <div className="bioTitle">
                <h1 className="sectionTitle">Sobre mim</h1>
            </div>
            <div className="bioDescription">
                <p>
                    Formado em Análise e Desenvolvimento de Sistemas pela FAFICA,
                    venho me especializando no desenvolvimento
                    de aplicativos e sites utilizando a linguagem C# com os
                    frameworks .NET Standard e .NET Core (multiplataforma).
                </p>
                <p>
                    No contexto do desenvolvimento de softwares, trabalhei com
                    ORMs como NHibernate e Entity Framework, as linguagens SQL
                    e PL/SQL e com os bancos Oracle, MySQL, PostgreSQL e MongoDB.
                    Além de padrões de projeto com MVC e MVVM.
                </p>
                <p>
                    Para desenvolvimento front-end, trabalhei com frameworks
                    como AngularJS, JQuery e Bootstrap.
                </p>
                <p>
                    Enquanto Coordenador de TI, gerenciei uma equipe de 18
                    colaboradores dividido entre desenvolvimento,
                    infraestrutura e suporte. Aqui pude implementar
                    tecnologias de versionamento de código (TFS e GIT) e
                    boas práticas de gerenciamento (SCRUM), além de mediar
                    conflitos e planejar estrategicamente os objetivos do
                    setor.
                </p>
                <p>
                    Atuei ainda no Parque Tecnológico Itaipu, onde pude
                    trabalhar com WPF (XAML), desenvolvendo um software de
                    análise de fasores para a equipe de engenheiros da usina
                    hidrelétrica.
                </p>
                <p>
                    Possuo ainda experiência com integração e entrega
                    continua usando Jenkins, ferramentas de DevOps como
                    Docker e Azure e algoritmos de inteligência artificial
                    usando R e Python.
                </p>
                <a href="#" className="downloadCV">Download do Currículo</a>
                <a href="https://linkedin.com/in/romuloeduardo/"
                    className="visitLinkedIn"
                    target="blank">
                    Visite o LinkedIn
                </a>
            </div>
        </section >
    );
}

export default Bio;