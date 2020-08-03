import React from 'react';
import styled from 'styled-components';


import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    padding-top: 94px;

    padding-left: 5%;
    padding-right: 5%;

    background-color: var(--grayDark);
    color: var(--white);
    flex: 1;

    @media (max-width: 800px){
        padding-top: 40px;
    }
`


export default function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}
