import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../CodeBox";
import { Content } from "../Content";
import { DataTable } from "../DataTable";
import { JsonBox } from "../JsonBox";
import { List } from "../List";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { SubContent } from "../SubContent";
import { Title } from "../Title";
import {
  createIndex,
  cursorExample,
  cursorOperations,
  inserts,
  explainCursor,
  debuggingResult,
  debuggingExemple,
  explainDetails,
  explainResult,
  distinctCmd,
  distinctExample,
  geospacialCmd,
  geospacialResult,
  aggregateCmd,
  aggregateResult,
  postsDocument,
  authorDocument,
  design1User,
design2User,
design2Follower,
design3User,
design3Follower,
design3Following,
} from "./commands";
import { Read } from "./crud/Read";
import { Update } from "./crud/Update";
import { Cartouche } from "../Cartouche";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height:450,
  },
}));

const identifier = {
  _id: 1,
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const CaseStudy = () => {
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
          <Title>Case Study</Title>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Blog</Title>
          <Content>Relational</Content>
          <img src="./images/cs_relational.png" alt="Relational Model" className="print-with-background"/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Blog</Title>
          <Content centered>Document</Content>
          <Content>Post</Content>
          <CodeBox code={postsDocument}/>
          <Content>Author</Content>
          <CodeBox code={authorDocument}/>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Socialite</Title>
          <Content>Architecture</Content>
          <Cartouche src="./images/cs_architecture.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 1</Content>
          <CodeBox code={design1User}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 1</Content>
          <img src="./images/cs_twitter.png" alt="Twitter" className={classes.limitHeight}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 2</Content>
          <Content>User collection</Content>
          <CodeBox code={design2User}/>
          <Content>Follower collection</Content>
          <CodeBox code={design2Follower}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 3</Content>
          <Content>User collection</Content>
          <CodeBox code={design3User}/>
          <Content>Follower collection</Content>
          <CodeBox code={design3Follower}/>
          <Content>Following collection</Content>
          <CodeBox code={design3Following}/>
        </Slide>
      </Section>
    </>
  );
};
