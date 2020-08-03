import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png';
import { MenuWrapper, ButtonLink, LogoImage } from './style';

export default function Menu() {
    return (
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="CodeFlix Logo" />
            </Link>

            <ButtonLink as={Link} to="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}