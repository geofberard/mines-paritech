import * as React from "react";
import { Content } from "../Content";
import { List } from "../List";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";

export const Plan = () => (
  <Section>
    <Slide alignItems="flex-start">
      <Title>Plan</Title>
      <Content>I. MongoDB Presentation</Content>
      <List
        elements={["Schemaless", "BSon", "Document Model", "Performance"]}
      />
      <Content>II. MongoDB Architecture</Content>
      <List elements={["Replica Set", "Sharding"]} />
    </Slide>
    <Slide alignItems="flex-start">
      <Title>Plan</Title>
      <Content>III. MongoDB CRUD</Content>
      <List elements={["CREATE", "READ", "UPDATE", "DELETE"]} />
      <Content>IV. Software with MongoDB</Content>
      <List elements={["Architecture"]} />
      <Content>V. Practical</Content>
    </Slide>
  </Section>
);
