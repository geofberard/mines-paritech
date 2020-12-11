import { FC } from "react";
import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  regular: {
    fontSize: "1.5rem",
    textAlign: "left",
  },
  centered: {
    margin: "auto",
    fontSize: theme.typography.body1.fontSize,
  },
}));

interface ContentProps {
  centered?: boolean;
}

export const Content: FC<ContentProps> = ({ children, centered }) => {
  const classes = useStyle();
  return (
    <div className={`${centered ? classes.centered : classes.regular}`}>
      {children}
    </div>
  );
};
