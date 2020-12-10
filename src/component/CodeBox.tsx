import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  codeBox: {
    minWidth: 700,
  },
  code: {
    padding: "15px !important",
    fontSize: theme.typography.body2.fontSize,
  },
}));

export const CodeBox: FC = ({ children }) => {
  const classes = useStyle();
  return (
    <pre className={classes.codeBox}>
      <code data-trim contentEditable className={classes.code}>
        {children}
      </code>
    </pre>
  );
};
