import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { FC } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import { Content } from "./Content";
import { List } from "./List";
import { Section } from "./Section";
import { Slide } from "./Slide";
import { SubTitle } from "./SubTitle";
import { Title } from "./Title";

export const initReveal = () =>
  Reveal.initialize({
    hash: true,
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  });

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: "2rem",
    }
  }
});

export const RootApp: FC = () => {
  React.useEffect(initReveal, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="slides">
        <Slide alignItems="flex-end">
          <img src="./images/mongodb_logo.png" alt="MongoDB Logo" className="print-with-background" />
          <Title>The Humongous Database</Title>
          <SubTitle>Geoffrey Berard / <a href="http://twitter.com/geofberard">@geofberard</a></SubTitle>
          <SubTitle>geoffrey.berard@gmail.com</SubTitle>
          <SubTitle><a href="http://goo.gl/lQe0pD">goo.gl/lQe0pD</a> - <a href="./MongoDB.pdf" target="_blank"> pdf</a></SubTitle>
        </Slide>
        <Section>
          <Slide alignItems="flex-start">
            <Title>Plan</Title>
            <Content>I. MongoDB Presentation</Content>
            <List elements={[
              "Schemaless",
              "BSon",
              "Document Model",
              "Performance",
            ]}/>
            <Content>II. MongoDB Architecture</Content>
            <List elements={[
              "Replica Set",
              "Sharding",
            ]}/>
          </Slide>
          <Slide alignItems="flex-start">
            <Title>Plan</Title>
            <Content>III. MongoDB CRUD</Content>
            <List elements={[
              "CREATE",
              "READ",
              "UPDATE",
              "DELETE",
            ]}/>
            <Content>IV. Software with MongoDB</Content>
            <List elements={[
              "Architecture",
            ]}/>
            <Content>V. Practical</Content>
          </Slide>
        </Section>
        <Section>
          <Slide>Vertical Slide 1</Slide>
          <Slide>Vertical Slide 2</Slide>
          <Slide>Vertical Slide 3</Slide>
        </Section >
      </div>
    </ThemeProvider>
  );
};
