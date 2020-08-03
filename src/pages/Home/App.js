import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import styled from 'styled-components';
import Menu from '../../components/Menu';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;


  @media (max-width: 800px){
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      
      <Menu />

      <Banner
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
