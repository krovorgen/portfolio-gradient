import { About, Header, Hero, Skills, Slider } from '@/components/index';
import portfolioMockData from '../data/portfolioMockData';
import creativeMockData from '../data/creativeMockData';

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Slider mockData={portfolioMockData} />
    <Slider mockData={creativeMockData} />
    <Skills />
  </>
);
export default Home;
