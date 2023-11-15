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

export const Terminology = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo/>
          <Title>Concepts</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Image</Title>
          <List elements={[
            "Containerized Application Snapshot",
            "Layered File System",
            "Immutable and Versioned",
            "Portable and Reproducible",
            "Efficient Deployment and Scalability",
          ]}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>dokerdile</Title>
          <img
            src="./images/docker_dockerfile.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Cycle</Title>
          <img
            src="./images/docker_cycle.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Container</Title>
          <List elements={[
            "Runnable Instance of a Docker Image",
            "Isolation",
            "Efficient Resource Utilization",
            "Dynamic and Scalable",
            "Stateless and Immutable",
          ]}/>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Registry</Title>
          <List elements={[
            "Image Storage and Distribution",
            "Private and Public Registries",
            "Image Tagging and Versioning",
            "Security and Access Control",
            "Self-Hosted Registries",
          ]}/>
        </Slide>
        <Slide>
          <Title>Registry</Title>
          <img
            src="./images/docker_registry.png"
            alt="Drivers"
            className={classes.images}
          />
          <a
            href="https://hub.docker.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://hub.docker.com/
          </a>
        </Slide>
      </Section>
    </>
  );
};
