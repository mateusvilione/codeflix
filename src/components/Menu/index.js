import React from 'react';
import Logo from '../../assets/img/logo.png';
import { MenuWrapper, ButtonLink, LogoImage } from './style';

export default function Menu() {
    return (
        <MenuWrapper>
            <a href="/">
                <LogoImage src={Logo} alt="CodeFlix Logo" />
            </a>

            <ButtonLink as="a"href="/">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}