import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../../../component/CodeBox";
import { Content } from "../../../component/Content";
import { Section } from "../../../component/Section";
import { Slide } from "../../../component/Slide";
import { Title } from "../../../component/Title";
import {
  installMacOs1,
  installMacOs2,
  installMacOs3,
  installMacOs4,
  installMacOs5,
  installWindows1,
  installWindows2,
  installWindows3,
  installWindows4,
  installToolsMacOs1,
  installToolsMacOs2,
  runPythonServer,
  installPip,
  gitCloneRepo,
  runWithDocker7,
  runWithDocker6,
} from "../commands";
import { SubContent } from "../../../component/SubContent";
import { PracticalGit } from "./PracticalGit";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height: 450,
  },
  imageMid: {
    height: 350,
  },
  imageFullWidth: {
    width: 750,
  },
  simpleArchi: {
    height: 200,
  },
  focused: {
    color: "#5ca831",
  },
}));

const identifier = {
  _id: 1,
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const PracticalPart2 = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <Title>MongoTasks</Title>
          <Content centered>MongoDB based App</Content>
          <img
            src="./images/mongo_tasks_capture.png"
            alt="MongoTasks"
            className={classes.limitHeight}
          />
        </Slide>
        <Slide>
          <Title>MongoTasks</Title>
          <img
            src="./images/mongo_tasks_tech.png"
            alt="MongoTasks"
            className={classes.simpleArchi}
          />
          <SubContent>
            <a href="https://github.com/geofberard/MongoTasks">
              https://github.com/geofberard/MongoTasks
            </a>{" "}
          </SubContent>
        </Slide>
        <Slide>
          <Title>MongoTasks</Title>
          <Content>Architecture</Content>
          <img
            src="./images/mongo_tasks_archi.png"
            alt="MongoTasks"
            className={classes.imageMid}
          />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Run MongoDB</Title>
          <Content>Start server with docker</Content>
          <CodeBox code={runWithDocker6} />
          <Content>If needed, connect with mongo shell</Content>
          <CodeBox code={runWithDocker7} />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>MongoTasks</Title>
          <Content centered>Python</Content>
          <Content>
            Install Python (
            <a
              href="https://docs.python.org/3/using/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            )
          </Content>
          <Content>
            Install Git (
            <a
              href="https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            )
          </Content>
          <Content>Get source code</Content>
          <CodeBox code={gitCloneRepo} />
          <Content>Install python dependencie</Content>
          <CodeBox code={installPip} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>MongoTasks</Title>
          <Content centered>Python</Content>
          <Content>Start the server</Content>
          <CodeBox code={runPythonServer} />
          <Content centered>
            <img
              src="./images/mongo_tasks_python.png"
              alt="MongoTasks"
              className={classes.imageFullWidth}
            />
          </Content>
          <SubContent>
            Then you can access the app on:{" "}
            <a
              href="http://localhost:8000"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:8000
            </a>
          </SubContent>
        </Slide>
        <PracticalGit
          language="Python"
          fileName="src/main/python/api/tasks_service.py"
        />
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>MongoTasks</Title>
          <Content centered>Java</Content>
          <Content>
            Install Java (
            <a
              href="https://www.java.com/fr/download/help/download_options.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            )
          </Content>
          <Content>
            Install Maven (
            <a
              href="https://maven.apache.org/install.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            )
          </Content>
          <Content>
            Install Git (
            <a
              href="https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            )
          </Content>
          <Content>Get source code</Content>
          <CodeBox code={gitCloneRepo} />
          <Content>Install java dependencie</Content>
          <CodeBox code="$ mvn clean install" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>MongoTasks</Title>
          <Content centered>Java</Content>
          <Content>Start the server</Content>
          <CodeBox code="$ mvn clean install -Pstart" />
          <Content centered>
            <img
              src="./images/mongo_tasks_java.png"
              alt="MongoTasks"
              className={classes.imageFullWidth}
            />
          </Content>
          <SubContent>
            Then you can access the app on:{" "}
            <a
              href="http://localhost:8000"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:8000
            </a>
          </SubContent>
        </Slide>
        <PracticalGit
          language="Java"
          fileName="src/main/java/com/mongodb/TasksService.java"
        />
      </Section>
    </>
  );
};
