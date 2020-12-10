import * as React from "react";
import { Slide } from "../Slide";
import { SubTitle } from "../SubTitle";
import { Title } from "../Title";



export const MainTitle = () => (
  <Slide>
    <img src="./images/mongodb_logo.png" alt="MongoDB Logo" className="print-with-background" />
    <Title>The Humongous Database</Title>
    <SubTitle>Geoffrey Berard / <a href="http://twitter.com/geofberard">@geofberard</a></SubTitle>
    <SubTitle>geoffrey.berard@gmail.com</SubTitle>
    <SubTitle><a href="http://goo.gl/lQe0pD">goo.gl/lQe0pD</a> - <a href="./MongoDB.pdf" target="_blank"> pdf</a></SubTitle>
  </Slide> 
);