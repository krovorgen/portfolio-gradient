import React from 'react';

import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { Slider } from '@/components/organisms/Slider';
import { Skills } from '@/components/organisms/Skills';
import { Cooperation } from '@/components/organisms/Cooperation';
import { Footer } from '@/components/organisms/Footer';
import { portfolioMockData } from '../data/portfolioMockData';
import { creativeMockData } from '../data/creativeMockData';

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
