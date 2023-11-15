import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";
import {List} from "../../component/List";

const useStyle = makeStyles(theme => ({
  images: {
    maxWidth: 500,
  },
}));

export const Technology = () => {
  const classes = useStyle();
  return (
    <>
      <Slide>
        <DockerLogo />
        <Title>Technology</Title>
      </Slide>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Docker</Title>
          <Content>Technology</Content>
          <List
            elements={[
              "Encapsulate an aplication in a container",
              "Lightweight and fast",
              "Easy versionning",
              "Centralized image library",
              "Allow cintainer orchestration",
              "Portable on any multiple environment",
              "Created by Solomon Hykes",
              "Written in Go",
            ]}
          />
        </Slide>
        <Slide>
          <Title>Docker</Title>
          <Content>Supported Desktop OS</Content>
          <img
            src="./images/docker_computer.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Docker</Title>
          <Content>Supported Server OS (Linux only)</Content>
          <img
            src="./images/docker_server.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
      </Section>
    </>
  );
};
