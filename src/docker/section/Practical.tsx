import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";
import {AnimatedImage} from "../../component/AnimatedImage";
import {CodeBox} from "../../component/CodeBox";
import {SubContent} from "../../component/SubContent";

const useStyle = makeStyles(theme => ({
  images: {
    maxWidth: 500,
  },
}));

export const Practical = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo />
          <Title>Practical</Title>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Starting container</Title>
          <AnimatedImage urls={["docker_start_1.png", "docker_start_2.png"]}/>
        </Slide>
        <Slide>
          <Title>Local registry</Title>
          <img
            src="./images/docker_start_3.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Starting container</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]" />
          <Content>with port forwarding :</Content>
          <CodeBox code="$ docker run -p 8080:80 IMAGE " />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/run/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
        <Slide>
          <Title>Starting container</Title>
          <img
            src="./images/docker_run_ex.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>List current containers</Title>
          <img
            src="./images/docker_list.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>List current containers</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker stats [OPTIONS] [CONTAINER...]" />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/stats/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
        <Slide>
          <Title>List current containers</Title>
          <img
            src="./images/docker_stats_ex.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Execute commands</Title>
          <img
            src="./images/docker_process.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Execute commands</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker exec [OPTIONS] CONTAINER COMMAND [ARG...]" />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/exec/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
        <Slide>
          <Title>Execute commands</Title>
          <img
            src="./images/docker_exec_ex.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Execute shell</Title>
          <AnimatedImage urls={["docker_shell_1.png", "docker_shell_2.png"]}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Execute shell</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker exec -it CONTAINER /bin/ash" />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Copy File/Directory</Title>
          <AnimatedImage urls={["docker_copy_1.png", "docker_copy_2.png"]}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Copy File/Directory</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-" />
          <CodeBox code="$ docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH" />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/cp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Mount File/Directory</Title>
          <AnimatedImage urls={["docker_mount_1.png", "docker_mount_2.png"]}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Mount File/Directory</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker run --mount source=<hostDir>,target=<targetDir> CONTAINER" />
          <SubContent>
            <a
              href="https://docs.docker.com/storage/volumes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Port Forwarding</Title>
          <img
            src="./images/docker_port_forwarding.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Port Forwarding</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker run -p 80:80 CONTAINER" />
          <SubContent>
            <a
              href="https://docs.docker.com/network/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Create Image</Title>
          <img
            src="./images/docker_build.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Execute commands</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker build [OPTIONS] PATH | URL | -" />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/build/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Composition</Title>
          <img
            src="./images/docker_compose.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Composition</Title>
          <Content>Run the following command :</Content>
          <CodeBox code="$ docker docker compose" />
          <SubContent>
            <a
              href="https://docs.docker.com/engine/reference/commandline/compose/"
              rel="noopener noreferrer"
              target="_blank"
            >
              documentation
            </a>
          </SubContent>
          <SubContent>
            <a
              href="https://docs.docker.com/compose/gettingstarted/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Try it !
            </a>
          </SubContent>
        </Slide>
      </Section>
    </>
  );
};
