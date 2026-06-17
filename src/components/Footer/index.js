import React from 'react';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footerWrapper">
            <p className="footerCopy">
                © {new Date().getFullYear()} Romulo Eduardo — Todos os direitos reservados
            </p>
            <div className="footerLinks">
                <a
                    href="https://github.com/romuloedu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/romuloeduardo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
