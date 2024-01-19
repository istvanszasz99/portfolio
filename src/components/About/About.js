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
        I'm István Szász. 
        24 years old Developer from Hungary.
        I am currently a graduate student of Computer Engineering at the University of Óbuda.
        Through my university years I studied lot about programming languages and frameworks.
        I am also expanding my IT knowledge outside the university with online courses.
        I wrote my university thesis with Unreal Engine 5.
        In my free time I usually learn about programming, Notebook & PC servicing, hang out with my friends, doing free time activities, playing video games, watching movies or TV series.
        </SectionText>
        <Button onClick={(x) => {
          x.preventDefault();
          window.location.href = 'https://raw.githubusercontent.com/istvanszasz99/portfolio/main/public/files/resume.pdf';
        }}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default About;