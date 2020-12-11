import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../CodeBox";
import { Content } from "../Content";
import { DataTable } from "../DataTable";
import { JsonBox } from "../JsonBox";
import { List } from "../List";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { SubContent } from "../SubContent";
import { Title } from "../Title";
import {
  createIndex,
  cursorExample,
  cursorOperations,
  inserts,
} from "./commands";
import { Read } from "./crud/Read";

const useStyle = makeStyles(theme => ({
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

export const CRUD = () => {
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
          <Title>CRUD</Title>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Schemaless</Title>
          <Content>Exemple RDBMS - Alter table</Content>
          <DataTable
            data={[
              ["", "SQL", "MongoDB"],
              ["Create", "Insert", "Insert"],
              ["Read", "Select", "Find"],
              ["Update", "Update", "Update"],
              ["Delete", "Delete", "Remove"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Schemaless</Title>
          <Content>
            <s>Query language</s> =&gt; methods of objects
          </Content>
        </Slide>
        <Slide>
          <Title>Identifier</Title>
          <JsonBox json={identifier} />
          <List elements={["Unique", "Can't be changed"]} />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Create</Title>
          <Content centered>Insert</Content>
          <CodeBox code="> db.member.insert({new_document})" />
          <CodeBox code={'WriteResult({ "nInserted" : 1 })'} />
          <Content>Create the collection if necessary</Content>
          <CodeBox code={inserts} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Create</Title>
          <Content centered>Index</Content>
          <Content>
            Syntax (
            <a href="http://docs.mongodb.org/manual/core/index-types/index.html">
              Index types
            </a>
            )
          </Content>
          <CodeBox code="createIndex( { userid: index_type } )" />
          <CodeBox code={createIndex} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Create</Title>
          <Content centered>mongoimport</Content>
          <Content>Test Only</Content>
          <Content>Supported file format</Content>
          <List elements={["Json", "CSV", "TSV"]} />
          <CodeBox code="$ ./mongoimport --db test --collection zips --file ../../../Downloads/zips.json" />
          <SubContent>
            <a href="./data-set/zips.json">Download zips.json</a>
          </SubContent>
        </Slide>
      </Section>
      <Read />
      <Section>
        <Slide alignItems="flex-start">
          <Title>Read</Title>
          <Content centered>Count</Content>
          <CodeBox code="> db.zips.count({find_query})" />
          <Content>Example</Content>
          <CodeBox code='> db.zips.count({state:"NY"})' />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Read</Title>
          <Content>Cursor</Content>
          <CodeBox code='> cursor = db.zips.find({state:"MA"},{city:true, _id:false}); null;' />
          <Content>Iterating over results :</Content>
          <CodeBox code={cursorExample} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Read</Title>
          <Content>Operation on cursor</Content>
          <CodeBox code={cursorOperations} />
          <Content>They can be combined</Content>
          <CodeBox code="> cusror.sort({city : -1}).limit(5).skip(3)" />
        </Slide>
      </Section>
    </>
  );
};
