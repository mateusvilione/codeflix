import React from 'react';
import './style.css';
import Logo from '../../assets/img/logo.png';
import ButtonLink from '../ButtonLink';
import Button from '../Button';

export default function Menu() {
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="CodeFlix Logo" />
                </a>

                <Button as="a" className="ButtonLink" href="/">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    );
}