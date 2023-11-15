import * as React from "react";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";

export const Technology = () => {
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo />
          <Title>Technology</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>History</Title>
          <Content>IP Addresses</Content>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Paradigme</Title>
          <Content>Ports Number</Content>
        </Slide>
      </Section>
    </>
  );
};
