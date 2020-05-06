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
                <a href="#" className="downloadCV">
                    Download do Meu Currículo
                </a>
                <a href="https://linkedin.com/in/romuloeduardo/"
                    className="visitLinkedIn"
                    target="blank">
                    Meu Perfil no LinkedIn
                </a>
            </div>
        </section >
    );
}

export default Bio;