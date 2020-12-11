import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../../CodeBox";
import { Content } from "../../Content";
import { JsonBox } from "../../JsonBox";
import { Section } from "../../Section";
import { Slide } from "../../Slide";
import { SubContent } from "../../SubContent";
import { Title } from "../../Title";
import {
  addElements,
  popElements,
  pullElements,
  pushElements,
  updateMulti,
  upsert,
  victorHugoAddress,
  victorHugoFail,
} from "../commands";

const useStyle = makeStyles(theme => ({
  focused: {
    color: "#5ca831",
  },
}));

export const Update = () => {
  const classes = useStyle();
  return (
    <Section>
      <Slide alignItems="flex-start">
        <Title>Update</Title>
        <Content>Syntax</Content>
        <CodeBox code="<collection>.update( {find_query} , {update_query}, {update_params} )" />
        <Content>Example</Content>
        <CodeBox code='update({surname : "Hugo"}, {surname : "Hugo", groups : [ "Writer", "Painter"]})' />
      </Slide>
      <Slide alignItems="flex-start">
        <Content>On document</Content>
        <JsonBox json={victorHugoAddress} />
        <Content>Will give</Content>
        <JsonBox json={victorHugoFail} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Update</Title>
        <Content>Ajouter/Modifier des champs ($set)</Content>
        <CodeBox code='{$set : {groups : [ "Writer", "Painter"]}}' />
        <Content>Supprimer des champs ($unset)</Content>
        <CodeBox code="{$unset : {groups : 1}}" />
        <Content>Modify Key ($unset)</Content>
        <CodeBox code='{$rename : {"oldName" : "newName"}}' />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Update</Title>
        <Content>Modify (number)</Content>
        <CodeBox code="{$inc : {count : 1}}" />
        <CodeBox code='{$mul : {price : NumberDecimal("0.5")}}' />
        <Content>Compare to current value (number, date)</Content>
        <CodeBox code="{$min : {bestPrice : 150}}" />
        <CodeBox code="{$max : {highScore : 1275000}}" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Update</Title>
        <Content centered>Array manipulation</Content>
        <Content>Change Value</Content>
        <CodeBox code='{"groups.2" : "Poet"}' />
        <Content>Add element ($push)</Content>
        <CodeBox code={pushElements} />
        <Content>Remove element ($pop)</Content>
        <CodeBox code={popElements} />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>Update</Title>
        <Content centered>Array manipulation</Content>
        <Content>Remove specific element ($pull)</Content>
        <CodeBox code={pullElements} />
        <Content>Take array as a set ($addToSet)</Content>
        <CodeBox code={addElements} />
      </Slide>
      <Slide>
        <Title>Update</Title>
        <Content>Multiple update</Content>
        <SubContent>=&gt;Upsert</SubContent>
        <CodeBox code="{ upsert : true }     // As update third parameter" />
        <CodeBox code={upsert} />
      </Slide>
      <Slide>
        <Title>Update</Title>
        <Content>Update or insert</Content>
        <CodeBox code="{ multi : true }     // As update third parameter" />
        <CodeBox code={updateMulti} />
        <CodeBox code='WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 5 })' />
      </Slide>
    </Section>
  );
};
