import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";
import { PracticalPart1 } from "./practical/PracticalPart1";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height: 450,
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

export const Practical1 = () => {
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
          <Title>Practical - CRUD</Title>
        </Slide>
      </Section>
      <PracticalPart1/>
    </>
  );
};
