import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../../CodeBox";
import { Content } from "../../Content";
import { JsonBox } from "../../JsonBox";
import { Section } from "../../Section";
import { Slide } from "../../Slide";
import { Title } from "../../Title";
import {
  foundCities,
  fullNested,
  jonDoe,
  queryCombination1,
  queryCombination2,
  victorHugo,
  wrongQuery,
} from "../commands";
import { SubContent } from "../../SubContent";

const useStyle = makeStyles(theme => ({
  focused: {
    color: "#5ca831",
  },
}));

export const Read = () => {
  const classes = useStyle();
  return (
    <Section>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Find</Content>
        <Content>Returning all elements of a collection:</Content>
        <CodeBox code="> db.member.find()" />
        <CodeBox code={JSON.stringify(jonDoe)} />
        <Content>Returning only the first element:</Content>
        <CodeBox code="> db.member.findOne()" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Find</Content>
        <Content>Formating the result :</Content>
        <CodeBox code="> db.member.find().pretty()" />
        <JsonBox json={jonDoe} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Find</Content>
        <Content>Syntax</Content>
        <CodeBox code="<collection>.find({query},{keys_filter})" />
        <Content>Example</Content>
        <CodeBox code='> db.zips.find({state:"NY"},{city:true, _id:false})' />
        <CodeBox code={foundCities} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Querying</Content>
        <Content>Greater than ($gt, $gte)</Content>
        <CodeBox code="{ pop : {$gt : 100000} }" />
        <Content>Lower than ($lt, $lte)</Content>
        <CodeBox code="{ pop : {$lte : 100} }" />
        <Content>Regular Expression ($regex)</Content>
        <CodeBox code='{ city : {$regex : "^A"} }' />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Querying</Content>
        <Content>Value Exists ($exists)</Content>
        <CodeBox code="{ city : {$exists : true} }" />
        <Content>
          Value Type ($type) (
          <a href="http://docs.mongodb.org/manual/reference/bson-types/index.html">
            Type codes
          </a>
          )
        </Content>
        <CodeBox code="{ city : {$type : type_code} }" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Wrong Query</Content>
        <Content>Overriding query property</Content>
        <CodeBox code="{ pop: {$gt: 10000}, pop: {$lt: 50000}}" />
        <Content>is equivalent to</Content>
        <CodeBox code="{ pop: {$lt: 50000}}" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Array Query</Content>
        <Content>Natural</Content>
        <CodeBox code='{ groups : "Painter" }' />
        <Content>In ($in)</Content>
        <CodeBox code='{ groups : { $in : ["Writer", "Sculptor", "Dancer"]}}' />
        <Content>All ($all)</Content>
        <CodeBox code='{ groups : { $all : ["Painter", "Writer"]}}' />
      </Slide>
      <Slide>
        <Content>Can return</Content>
        <JsonBox json={victorHugo} />
      </Slide>
      <Slide>
        <Title>Read</Title>
        <Content>Nested Document Query</Content>
        <JsonBox json={fullNested} />
        <Content>or</Content>
        <CodeBox code='{ "address.city" : "Paris" }' />
      </Slide>
      <Slide>
        <Content>Can return</Content>
        <JsonBox json={victorHugo} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Wrong Queries</Content>
        <Content>Incomplete object description</Content>
        <CodeBox code='{ address : { city : "Paris" }})' />
        <Content>Document key in the wrong order</Content>
        <JsonBox json={wrongQuery} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content centered>Combined Query</Content>
        <Content>Natural</Content>
        <CodeBox code="{ pop : {$gt : 100000, $lt : 2000000} }" />
        <Content>Or ($or)</Content>
        <CodeBox code='{ $or : [{state : "NY"} , {state : "NJ"}]}' />
        <Content>And ($and)</Content>
        <CodeBox code='{ $and : [ {state : "NY"} , {pop : {$gt : 50000} } ] }' />
      </Slide>
      <Slide alignItems="flex-start">
        <Content>Query combinaison combinaison ???</Content>
        <CodeBox code={queryCombination1} /> 
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Read</Title>
        <Content>Query combinaison combinaison ???</Content>
        <CodeBox code={queryCombination1} />
        <JsonBox json={queryCombination2} />
      </Slide>
      <Slide alignItems="flex-start">
        <Content>Query combinaison combinaison ???</Content>
        <CodeBox code={queryCombination1} />
        <CodeBox code={queryCombination2} />
        <SubContent>
          Cities{" "}
          <span className={classes.focused}>starting with &quot;N&quot;</span>{" "}
          in <span className={classes.focused}>New York or New Jersey</span>{" "}
          with a{" "}
          <span className={classes.focused}>
            population between 100k and 150k inhabitants
          </span>
        </SubContent>
      </Slide>
    </Section>
  );
};
