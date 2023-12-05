import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Content } from "../../component/Content";
import { List } from "../../component/List";
import { Section } from "../../component/Section";
import { Slide } from "../../component/Slide";
import { Title } from "../../component/Title";
import { JsonBox } from "../../component/JsonBox";
import { DataTable } from "../../component/DataTable";
import { CodeBox } from "../../component/CodeBox";
import { SubTitle } from "../../component/SubTitle";
import { SubContent } from "../../component/SubContent";
import { Cartouche } from "../../component/Cartouche";
import { Horizontal } from "../../component/Horizontal";

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

const alternativeMongoModel = {
  model: "Bentley",
  year: 1973,
  value: 100000,
  owner: {
    first_name: "Paul",
    surname: "Miller",
    city: "London",
  }
};

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
          <SubTitle>06/12/2023</SubTitle>
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
              "No transactions (by default)",
              "Atomic operation on document",
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
              ["Louis", "Armstrong", "4/08/1901"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Alter table</Content>
          <DataTable
            data={[
              ["first_name", "last_name", "title", "birthday"],
              ["Louis", "Armstrong", "", "4/08/1901"],
              ["Paul", "McCartney", "Sir", "18/06/1942"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Holed Table</Content>
          <DataTable
            data={[
              ["first_name", "last_name", "title", "nickname", "birthday"],
              ["Louis", "Armstrong", "", "", "04/08/1901"],
              ["Paul", "McCartney", "Sir", "", "18/06/1942"],
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
          <img src="./images/ben.gif" alt="" />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>BSON</Title>
          <Content>Binary Representation of JSON - 16MB Maximum</Content>
          <JsonBox json={{ hello: "world" }} />
          <Content>Gives in BSON</Content>
          <CodeBox code="\x16\x00\x00\x00\x02hello\x00\x06\x00\x00\x00world\x00\x00" />
        </Slide>
        <Slide>
          <Title>BSON</Title>
          <Content>Enriched Types</Content>
          <img src="./images/bson_types.png" alt="MongoDB Logo" />
          <SubContent>
            <a
              href="http://bsonspec.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              bsonspec.org
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Position</Title>
          <img
            src="./images/mongodb_position.png"
            className="print-with-background"
            alt="MongoDB Logo"
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Relational VS Document</Title>
          <Content>Models Differences</Content>
          <img
            src="./images/comparaison_rvsd.png"
            alt="relational_vs_document"
          />
        </Slide>
        <Slide>
          <Title>Relational VS Document</Title>
          <Content>Relational Model</Content>
          <img
            src="./images/comparaison_relational.png"
            alt="Relational Model"
          />
        </Slide>
        <Slide>
          <Title>Relational VS Document</Title>
          <Content>Document Model</Content>
          <JsonBox json={mongoModel} />
        </Slide>
        <Slide>
          <Title>Relational VS Document</Title>
          <Content>Alternative Document Model</Content>
          <JsonBox json={alternativeMongoModel} />
        </Slide>
        <Slide>
          <Title>Relational VS Document</Title>
          <Content>Terminology</Content>
          <img src="./images/comparaison_terminology.png" alt="Terminology" />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Performances</Title>
          <Horizontal>
            <Cartouche src="./images/perf_locality.png" label="Locality" />
            <Cartouche src="./images/perf_caching.png" label="Caching" />
            <Cartouche src="./images/perf_update.png" label="Update" />
          </Horizontal>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Scalability</Title>
          <Cartouche src="./images/scalability.png" />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Benefits</Title>
          <Content>Efficient</Content>
          <List
            elements={[
              "Super low latency",
              "Scale Easily",
            ]}
          />
          <Content>Agility and flexibility</Content>
          <List
            elements={[
              "Data models can evolve easily",
              "Companies can adapt to changes quickly",
            ]}
          />
          <Content>Intuitive, natural data representation</Content>
          <List
            elements={[
              "Developers are more productive",
              "Many types of applications are a good fit",
            ]}
          />
          <Content>Reduces the need for joins, disk seeks</Content>
          <List
            elements={[
              "Programming is more simple",
              "Performance can be delivered at scale",
            ]}
          />
        </Slide>
      </Section>
    </>
  );
};
