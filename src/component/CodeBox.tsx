import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  codeBox: {
    minWidth: 750,
  },
  code: {
    padding: "15px !important",
    fontSize: 15,
  },
}));

interface CodeBoxProps {
  code?: string,
}

export const CodeBox : FC<CodeBoxProps> = ({ code, children }) => {
  const classes = useStyle();
  return (
    <pre className={classes.codeBox}>
      <code data-trim contentEditable className={classes.code}>
        {code}{children}
      </code>
    </pre>
  );
}; 
