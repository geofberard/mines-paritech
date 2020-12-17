import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../../CodeBox";
import { Content } from "../../Content";
import { Section } from "../../Section";
import { Slide } from "../../Slide";
import { Title } from "../../Title";
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
} from "../commands";
import { SubContent } from "../../SubContent";
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
  quote: {
    backgroundColor: "#272822",
    fontSize: theme.typography.body2.fontSize,
    textAlign: "left",
    padding: theme.spacing(1),
  },
}));

const identifier = {
  _id: 1,
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const PracticalPart3 = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <img
            src="./images/mongodb_logo.png"
            alt="MongoDB Logo"
            className="print-with-background"
          />
          <Title>Practical</Title> 
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Replication</Title>
          <Content>MongoDB consistency in real world</Content>
          <div className={classes.quote}>
            Read the documentation for the systems you depend on thoroughly–then
            verify their claims for yourself. You may discover surprising
            results!
          </div>
          <SubContent> — Kyle Kingsbury(Aphyr) </SubContent>
          <SubContent>
            {" "}
            <a
              href="https://aphyr.com/posts/322-jepsen-mongodb-stale-reads"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aphyr.com/posts/322-jepsen-mongodb-stale-reads
            </a>{" "}
          </SubContent>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replication</Title>
          <Content>
            MongoDB proposes a replica set tutorial in the{" "}
            <a
              href="https://docs.mongodb.com/manual/administration/replica-set-deployment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
          </Content>
          <Content>
            The full documentation is{" "}
            <a
              href="https://docs.mongodb.com/manual/replication/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
        </Slide>
      </Section>
    </>
  );
};
