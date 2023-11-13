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
  gitReset,
} from "../commands";
import { SubContent } from "../../../component/SubContent";

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

interface PracticalGitProps {
  language: string;
  fileName: string;
}

export const PracticalGit = ({ language,fileName }: PracticalGitProps) => {
  const classes = useStyle();
  return (
    <>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>All changes need to be done in the file :</Content>
        <CodeBox code={fileName}/>
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>CheatSheet</Content>
        <SubContent>
          Each step of the practical is saved in a specific branch.
        </SubContent>
        <SubContent>
          If you get stuck, you might jump to the next step (replace X) with :
        </SubContent>
        <CodeBox code={gitReset} />
        <SubContent>
          All your changes will be lost but you will see a working
          implementation and you will be able <br/> to keep going.
        </SubContent>
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>Create</Content>
        <SubContent>
          You need to add a new document in the tasks collection
        </SubContent>
        <CodeBox code="$ git checkout step-1" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>Read</Content>
        <SubContent>
          You need to return all the notes from the tasks collection
        </SubContent>
        <CodeBox code="$ git checkout step-2" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>Update</Content>
        <SubContent>
          You need to update a document &apos;done&apos; field in the tasks collection
        </SubContent>
        <CodeBox code="$ git checkout step-3" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>Delete</Content>
        <SubContent>
          You need to remove a document from the tasks collection
        </SubContent>
        <CodeBox code="$ git checkout step-4" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoTasks</Title>
        <Content centered>{language}</Content>
        <Content>Full Implementation</Content>
        <CodeBox code="$ git checkout complete" />
      </Slide>
    </>
  );
};
