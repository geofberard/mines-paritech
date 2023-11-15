import * as React from "react";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";

export const Concepts = () => {
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo />
          <Title>Concepts</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Container</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Image</Title>
          <Content>Commandes lancées</Content>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Registry</Title>
          <Content>Concepts</Content>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Disk</Title>
          <Content>Concepts</Content>
        </Slide>
      </Section>
    </>
  );
};
