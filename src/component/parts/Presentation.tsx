import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Content } from "../Content";
import { List } from "../List";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";
import { JsonBox } from "../JsonBox";
import { DataTable } from "../DataTable";

const useStyle = makeStyles(theme => ({
  technos: {
    maxWidth: 500,
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

export const Presentation = () => {
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
          <Title>Presentation</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>MongoDB</Title>
          <Content>Technology</Content>
          <List
            elements={[
              "Document oriented Data Base",
              "Non relational",
              "Dynamic : Schemaless",
              "No query lanquage",
              "No transactions",
              "Scalable : Auto Sharding",
              "Made in C++",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>MongoDB</Title>
          <Content>Functionnalities</Content>
          <List
            elements={["Text Search", "GeoSearch", "Aggregation", "Map-Reduce"]}
          />
        </Slide>
        <Slide>
          <Title>MongoDB</Title>
          <Content>Supported languages</Content>
          <img
            src="./images/mongodb_driver.png"
            alt="Drivers"
            className={classes.technos}
          />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>JSON Document</Title>
          <JsonBox json={jsonExample} />
        </Slide>
        <Slide>
          <Title>JSON Document</Title>
          <Content>Available Data Types :</Content>
          <List
            elements={[
              "Array",
              "Object",
              "String",
              "Number",
              "Boolean",
              "Null",
            ]}
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Musiciens</Content>
          <DataTable
            data={[
              ["first_name", "last_name", "birthday"],
              ["Louis", "Armstrong", "4 août 1901"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Alter table</Content>
          <DataTable
            data={[
              ["first_name", "last_name", "title", "birthday"],
              ["Louis", "Armstrong", "", "4 août 1901"],
              ["Paul", "McCartney", "Sir", "18 June 1942"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Holed Table</Content>
          <DataTable
            data={[
              ["first_name", "last_name", "title", "nickname", "birthday"],
              ["Louis", "Armstrong", "", "", "04 août 1901"],
              ["Paul", "McCartney", "Sir", "", "18 June 1942"],
              ["Gordon Matthew Thomas", "Summer", "", "Sting", "02/10/1951"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple - MongoDB</Content>
          <JsonBox json={musiciansJson} />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Be carefull</Content>
          <JsonBox json={carefullJson} />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Be carefull</Content>
          <img src="./images/ben.gif" alt=""/>
        </Slide>
      </Section>
    </>
  );
};
