import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skill from '../components/Skills/Skill';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <About />
        <BgAnimation />
      </Section>
      <Skill />
      <Projects />
    </Layout>
  );
};

export default Home;