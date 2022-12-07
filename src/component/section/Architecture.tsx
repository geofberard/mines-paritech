import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Content } from "../Content";
import { Separator } from "../Separator";
import { List } from "../List";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";
import { JsonBox } from "../JsonBox";
import { DataTable } from "../DataTable";
import { CodeBox } from "../CodeBox";
import { SubTitle } from "../SubTitle";
import { SubContent } from "../SubContent";
import { Cartouche } from "../Cartouche";
import { Horizontal } from "../Horizontal";

const useStyle = makeStyles(theme => ({
  technos: {
    maxWidth: 500,
  },
  cartouches: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
  limitedHeight: {
    height: 450,
  },
}));

const jsonExample = {
  _id: 1,
  first_name: "Paul",
  surname: "McCartney",
  instruments: ["Guitar", "Bass guitar", "Piano"],
  address: {
    street: "20 Forthlin Road",
    city: "LiverPool",
    zip: "United Kingdom",
  },
};

const musiciansJson = [
  {
    first_name: "Louis",
    surname: "Armstrong",
    birthday: "4 août 1901",
  },
  {
    first_name: "Paul",
    surname: "McCartney",
    title: "Sir",
    birthday: "18 June 1942",
  },
  {
    first_name: "Gordon Matthew Thomas",
    surname: "Sumner",
    nickname: "Sting",
    birthday: "2 octobre 1951",
  },
];

const carefullJson = [
  {
    first_name: "Louis",
    surname: "Armstrong",
    birthday: "4 août 1901",
  },
  {
    first_name: 42,
  },
];

const mongoModel = {
  first_name: "Paul",
  surname: "Miller",
  city: "London",
  cars: [
    {
      model: "Bentley",
      year: 1973,
      value: 100000,
    },
    {
      model: "Rolls Royce",
      year: 1965,
      value: 330000,
    },
  ],
};

export const Architecture = () => {
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
          <Title>Architecture</Title>
          <SubTitle>09/12/2022</SubTitle>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Horizontal>
            <Cartouche src="./images/rs_presentation.png" />
            <div>
              <Content>Two copies or more</Content>
              <Content>Master / Slave</Content>
              <Content>Automatic Failover</Content>
              <Content>Purpose</Content>
              <List
                elements={["High Availability", "Data Recovery", "Maintenance"]}
              />
            </div>
          </Horizontal>
        </Slide>
        <Slide>
          <Title>Replica Set</Title>
          <Content>Architecture</Content>
          <img
            src="./images/rs_architecture.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
        <Slide>
          <Title>Replica Set</Title>
          <Content>Architecture</Content>
          <img
            src="./images/rs_organisation.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
        <Slide>
          <Title>Replica Set</Title>
          <Content>Architecture</Content>
          <img
            src="./images/rs_failover.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Config Server</Content>
          <Separator />
          <Content>Contains cluster metadatas</Content>
          <List
            elements={[
              "1 instance in dev, 3 in production",
              "Contains intervals definitions (chunks)",
              "Maintenance",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Query Router (M ongos)</Content>
          <Separator />
          <Content>Contains cluster metadatas</Content>
          <List
            elements={[
              "Behaves identically to mongod",
              "Query router",
              "Load Balancer",
              "Dedicated or shared",
            ]}
          />
        </Slide>
        <Slide>
          <Title>Sharding</Title>
          <Content>Architecture</Content>
          <img
            src="./images/sharding_architecture.png"
            className="print-with-background"
            alt="Architecture"
          />
        </Slide>
        <Slide>
          <Title>Sharding</Title>
          <Content>Shard = Cluster Node</Content>
          <img
            src="./images/sharding_presentation.png"
            alt="Chunk"
            className={classes.limitedHeight}
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Sharding</Title>
          <Content>Balancing</Content>
          <img
            src="./images/sharding_balancing.png"
            className="print-with-background"
            alt="Chunks"
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Sharding Key</Content>
          <Separator />
          <Content>Requirement :</Content>
          <List
            elements={[
              "Immutablility (key/value)",
              "Big cardinality",
              "Distributed",
              "Should be indexed",
              "Limited to 512 octets",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Chunk</Content>
          <Separator />
          <Content>Requirement :</Content>
          <List
            elements={[
              "Split if bigger than 64Mo",
              "Split & Moved",
              "Split only between 2 différent values",
              "Moved Automatically",
            ]}
          />
          <Content centered>
            <img
              src="./images/sharding_chunk.png"
              className="print-with-background"
              alt="Chunks"
            />
          </Content>
        </Slide>
      </Section>
    </>
  );
};
