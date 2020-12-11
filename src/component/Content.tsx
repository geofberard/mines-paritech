import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  content: {
    fontSize: theme.typography.body1.fontSize,
  },
  centered: {
    margin: "auto",
  },
}));

interface ContentProps {
  centered?: boolean;
}

export const Content: FC<ContentProps> = ({ children, centered }) => {
  const classes = useStyle();
  return (
    <div className={`${classes.content} ${centered ? classes.centered : null}`}>
      {children}
    </div>
  );
};
