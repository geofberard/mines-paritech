import * as React from "react";
import {Content} from "../../component/Content";
import {Details} from "../../component/Details";
import {List} from "../../component/List";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";

export const Plan = () => (
    <Slide alignItems="flex-start">
        <Title>Plan <Details>(15/11/2023)</Details></Title>

        <Content>I. Fundamentals</Content>
        <List
            elements={["Virtualization", "Networking", "Processes"]}
        />
        <Content>II. Technology</Content>
        <List elements={["Technology", "???", "???", "DELETE"]}/>
        <Content>III. Concepts</Content>
    </Slide>
);
