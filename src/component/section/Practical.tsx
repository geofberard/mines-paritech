import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../CodeBox";
import { Content } from "../Content";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";
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
  installToolsMacOs3,
} from "./commands";
import { SubContent } from "../SubContent";
import { PracticalPart1 } from "./practical/PracticalPart1";
import { PracticalPart2 } from "./practical/PracticalPart2";

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

export const Practical = () => {
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
          <Title>Practicals</Title>
        </Slide>
      </Section>
      <PracticalPart1/>
      <PracticalPart2/>
    </>
  );
};
