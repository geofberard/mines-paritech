import * as React from "react";
import { FC } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

export const initReveal = () =>
  Reveal.initialize({
    hash: true,
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  });

export const RootApp: FC = () => {
  React.useEffect(initReveal, []);

  return (
    <div className="slides">
      <section>Horizontal Slide</section>
      <section>
        <section>Vertical Slide 1</section>
        <section>Vertical Slide 2</section>
        <section>Vertical Slide 3</section>
      </section>
    </div>
  );
};
