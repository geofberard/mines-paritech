import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "./Content";

const useStyle = makeStyles(theme => ({
  list: {
      paddingLeft: 10
  },
  listElement: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export interface ListProps {
  elements: React.ReactNode[];
}

export const List = ({ elements }: ListProps) => {
  const classes = useStyle();
  return (
    <ul className={classes.list}>
      {elements.map(element => (
        <li className={classes.listElement}>
          <Content>{element}</Content>
        </li>
      ))}
    </ul>
  );
};
