import React from 'react';

import useScrollReveal from '../../common/useScrollReveal';
import './styles.css';

const Contact = () => {
    const sectionRef = useScrollReveal(0.15);

    return (
        <section className="contactWrapper" id="contato" ref={sectionRef}>
            <div className="contactTitle">
                <h1 className="sectionTitle">Contato</h1>
            </div>
            <form
                className="contactForm"
                action="mailto:romuloedu@gmail.com"
                method="post"
                encType="text/plain"
            >
                <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    required
                />
                <textarea
                    name="mensagem"
                    placeholder="Sua mensagem"
                    rows="5"
                    required
                />
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
}

export default Contact;
