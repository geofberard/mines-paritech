import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Slide } from "../Slide";
import { SubTitle } from "../SubTitle";
import { Title } from "../Title";
import { Content } from "../Content";
import { Section } from "../Section";
import { SubContent } from "../SubContent";

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

export const Bibliography = () => {
  const classes = useStyle();
  return (
    <Section>
      <Slide>
        <Title>Bibliography</Title>
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
      <Slide>
        <Title>Bibliography</Title>
        <Content>
          <a
            href="http://docs.mongodb.org/manual/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB Manual
          </a>
        </Content>
        <Content>
          <a
            href="https://university.mongodb.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB University
          </a>
        </Content>
        <Content>
          <a href="http://www.json.org/" target="_blank" rel="noopener noreferrer">
            JSon Specification
          </a>
        </Content>
        <Content>
          <a
            href="http://bsonspec.org/spec.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            BSon Specification
          </a>
        </Content>
        <Content>
          <a
            href="https://github.com/10gen-labs/socialite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Socialite
          </a>
        </Content>
      </Slide>
    </Section>
  )
};
