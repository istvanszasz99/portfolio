import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './AboutStyles';

const About = (props) => (
  <>
    <Section id="about" row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there,
        </SectionTitle>
        <SectionText>
        My name is István Szász, a 24-year-old developer from Hungary.
        I am currently a graduate student in Computer Engineering at the University of Óbuda. Throughout my university education, I have gained extensive knowledge in programming languages and frameworks. Additionally, I am committed to expanding my IT expertise beyond the classroom through various online courses. 
        For my university thesis, I utilized Unreal Engine 5, demonstrating my proficiency in game development and real-time 3D creation.
        In my spare time, I further enhance my programming skills, engage in Notebook and PC repair, and enjoy various leisure activities. These include socializing with friends, following Formula 1 & WEC, hobby cooking, and playing video games.
        </SectionText>
        <Button onClick={(x) => {
          x.preventDefault();
          window.location.href = 'https://github.com/istvanszasz99/portfolio/blob/main/public/files/resume.pdf';
        }}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default About;