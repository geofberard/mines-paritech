import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  cartouches : {
    display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      "& > *": {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
      },
  }
}));

export const Horizontal: FC = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.cartouches}>
        {children}
    </div>
  );
}; 
