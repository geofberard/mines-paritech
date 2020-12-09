import { FC } from "react";
import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyle = makeStyles<Theme, SlideProps>(theme => ({
  slideContainer: {
    maxWidth: 800,
    minWidth: 400,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    alignItems: props => props.alignItems || "center",
  },
}));

interface SlideProps {
  alignItems?: "flex-start" | "flex-end" | "center";
}

export const Slide: FC<SlideProps> = ({ children, alignItems}) => {
  const classes = useStyle({ alignItems } as SlideProps);

  return (
    <section>
      <div className={classes.slideContainer}>{children}</div>
    </section>
  );
};
