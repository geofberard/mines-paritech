import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import { FC } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import { MainTitle } from "./section/MainTitle";
import { Plan } from "./section/Plan";
import { Presentation } from "./section/Presentation";
import { Section } from "./Section";
import { Slide } from "./Slide";
import { Architecture } from "./section/Architecture";
import { CRUD } from "./section/CRUD";
import { CaseStudy } from "./section/CaseStudy";
import { Practical } from "./section/Practical";
import { Replication } from "./section/Replication";
import { Bibliography } from "./section/Bibliography";

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
    },
    body2: {
      fontSize: "1.2rem",
    }
  }
});

export const RootApp: FC = () => {
  React.useEffect(initReveal, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="slides">
        <MainTitle/>
        <Plan/>
        <Presentation/>
        <Architecture/>
        <CRUD/>
        <CaseStudy/>
        <Practical/>
        <Replication/>
        <Bibliography/>
      </div>
    </ThemeProvider>
  );
};
