import { About, Footer, Header, Hero, Skills, Slider } from '@/components/index';
import Cooperation from '@/components/organisms/Cooperation';
import { creativeMockData } from 'data/creativeMockData';
import { portfolioMockData } from 'data/portfolioMockData';

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <div id={'portfolio'} />
    <Slider mockData={portfolioMockData} />
    <Slider mockData={creativeMockData} />
    <Skills />
    <Cooperation />
    <Footer />
  </>
);
export default Home;
