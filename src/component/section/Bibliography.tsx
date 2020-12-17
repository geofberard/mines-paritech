import * as React from "react";
import { Slide } from "../Slide";
import { SubTitle } from "../SubTitle";
import { Title } from "../Title";
import { Content } from "../Content";

export const Bibliography = () => (
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
);
