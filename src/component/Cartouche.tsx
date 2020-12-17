import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  label: {
    color: "#4b321f",
    fontSize: theme.typography.body2.fontSize,
  },
  cartoucheImg: {
    maxHeight: "350px!important",
  },
}));

interface CartoucheProps {
  src: string;
  label?: string;
}

export const Cartouche = ({ src, label }: CartoucheProps) => {
  const classes = useStyle();
  return (
    <Paper>
      <img src={src} alt={label} className={classes.cartoucheImg} />
      {label && <br />}
      {label && <div className={label}>{label}</div>}
    </Paper>
  );
};
