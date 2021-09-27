import React from 'react';

import { About } from '@/components/organisms/About';
import { Cooperation } from '@/components/organisms/Cooperation';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Skills } from '@/components/organisms/Skills';
import { Slider } from '@/components/organisms/Slider';
import { creativeMockData } from 'data/creativeMockData';
import { portfolioMockData } from 'data/portfolioMockData';

const Home = () => (
  <div className={'main-wrap'}>
    <Header />
    <main>
      <Hero />
      <About />
      <div id={'portfolio'} />
      <Slider mockData={portfolioMockData} />
      <Slider mockData={creativeMockData} />
      <Skills />
      <Cooperation />
    </main>
    <Footer />
  </div>
);
export default Home;
