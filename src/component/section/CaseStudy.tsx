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
  explainCursor,
  debuggingResult,
  debuggingExemple,
  explainDetails,
  explainResult,
  distinctCmd,
  distinctExample,
  geospacialCmd,
  geospacialResult,
  aggregateCmd,
  aggregateResult,
  postsDocument,
  authorDocument,
  design1User,
design2User,
design2Follower,
design3User,
design3Follower,
design3Following,
} from "./commands";
import { Read } from "./crud/Read";
import { Update } from "./crud/Update";
import { Cartouche } from "../Cartouche";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height:450,
  },
}));

const identifier = {
  _id: 1,
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const CaseStudy = () => {
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
          <Title>Case Study</Title>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Blog</Title>
          <Content>Relational</Content>
          <img src="./images/cs_relational.png" alt="Relational Model" className="print-with-background"/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Blog</Title>
          <Content centered>Document</Content>
          <Content>Post</Content>
          <CodeBox code={postsDocument}/>
          <Content>Author</Content>
          <CodeBox code={authorDocument}/>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Socialite</Title>
          <Content>Architecture</Content>
          <Cartouche src="./images/cs_architecture.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 1</Content>
          <CodeBox code={design1User}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 1</Content>
          <img src="./images/cs_twitter.png" alt="Twitter" className={classes.limitHeight}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 2</Content>
          <Content>User collection</Content>
          <CodeBox code={design2User}/>
          <Content>Follower collection</Content>
          <CodeBox code={design2Follower}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Socialite</Title>
          <Content centered>Design 3</Content>
          <Content>User collection</Content>
          <CodeBox code={design3User}/>
          <Content>Follower collection</Content>
          <CodeBox code={design3Follower}/>
          <Content>Following collection</Content>
          <CodeBox code={design3Following}/>
        </Slide>
      </Section>

      <Section>
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
      <Update />
      <Section>
        <Slide alignItems="flex-start">
          <Title>Delete</Title>
          <Content>Syntax</Content>
          <CodeBox code="remove({find_query})" />
          <Content>Drop a collection</Content>
          <CodeBox code="drop()" />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Debugging</Title>
          <CodeBox code="> db.zips.explain().find({query});" />
          <Content>or</Content>
          <CodeBox code={explainCursor} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Debugging</Title>
          <Content>Example</Content>
          <CodeBox code={debuggingExemple} />
          <JsonBox json={debuggingResult} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Debugging</Title>
          <Content>Execution detail</Content>
          <CodeBox code={explainDetails} />
          <JsonBox json={explainResult} />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Advanced</Title>
          <Content>
            Distinct (
            <a
              href="https://docs.mongodb.com/v3.2/reference/method/db.collection.distinct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              details
            </a>
            )
          </Content>
          <CodeBox code={distinctCmd} />
          <CodeBox code={distinctExample} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Advanced</Title>
          <Content>
            Geospacial (
            <a
              href="http://docs.mongodb.org/manual/reference/operator/query-geospatial/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              details
            </a>
            )
          </Content>
          <CodeBox code={geospacialCmd} />
          <CodeBox code={geospacialResult} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Advanced</Title>
          <Content>
            Aggregate (
            <a
              href="https://docs.mongodb.com/v3.2/aggregation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              details
            </a>
            )
          </Content>
          <CodeBox code={aggregateCmd} />
          <CodeBox code={aggregateResult} />
        </Slide>
      </Section>
    </>
  );
};
