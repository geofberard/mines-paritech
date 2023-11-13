import * as React from "react";
import { Content } from "../../component/Content";
import { Details } from "../../component/Details";
import { List } from "../../component/List";
import { Section } from "../../component/Section";
import { Slide } from "../../component/Slide";
import { SubTitle } from "../../component/SubTitle";
import { Title } from "../../component/Title";

export const Plan = () => (
  <Section>
    <Slide alignItems="flex-start">
      <Title>Plan <Details>(07/12/2022)</Details></Title>
      
      <Content>I. MongoDB Presentation</Content>
      <List
        elements={["Schemaless", "BSon", "Document Model", "Performance"]}
      />
      <Content>II. MongoDB CRUD</Content>
      <List elements={["CREATE", "READ", "UPDATE", "DELETE"]} />
      <Content>III. Practical</Content>
    </Slide>
    <Slide alignItems="flex-start">
    <Title>Plan <Details>(09/12/2022)</Details></Title>
      <Content>VI. MongoDB Architecture</Content>
      <List elements={["Replica Set", "Sharding"]} />
      <Content>V. Software with MongoDB</Content>
      <List elements={["Architecture"]} />
      <Content>VI. Practical</Content>
    </Slide>
  </Section>
);
