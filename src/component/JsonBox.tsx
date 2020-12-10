import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { CodeBox } from "./CodeBox";

const useStyle = makeStyles(theme => ({
  content: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

interface JsonProps {
  json: Object;
}

export const JsonBox = ({ json }: JsonProps) => {
  const classes = useStyle();
  return <CodeBox>{JSON.stringify(json, null, 2)}</CodeBox>;
};
