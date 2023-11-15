import * as React from "react";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";

export const Practical = () => {
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo />
          <Title>Practical</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Start container</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Run Command in container</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Copy File In Container</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Mount Disk in container</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Create Image</Title>
          <Content>IP Addresses</Content>
        </Slide>
      </Section>
    </>
  );
};
