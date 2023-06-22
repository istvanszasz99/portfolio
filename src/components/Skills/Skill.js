import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListTitle } from "./SkillStyles";
import { SkillData } from './SkillData'

const Skill = () => (
  <Section id="skills">
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    I have experience with these technologies as a developer. I'm always open to learn more.
    </SectionText>
    <List>
      {SkillData.map((item) => (
        <ListItem key={item.slug}>
          <picture>
            <item.Component size="4rem" />
          </picture>
          <ListContainer>
            <ListTitle>{item.title}</ListTitle>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Skill;