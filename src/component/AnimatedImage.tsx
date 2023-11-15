import {FC} from "react";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  parent: {
    position: "relative",
  },
  appearingItem: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
  },
}));

interface AnimatedImageProps {
  urls: string[],
}

export const AnimatedImage = ({ urls }: AnimatedImageProps) => {
  const classes = useStyle();
  return (
    <div className={classes.parent}>
      {urls.map((url, index) => (
          <img
            src={`./images/${url}`}
            alt="Drivers"
            className={index !== 0 && `fragment ${classes.appearingItem}`}
          />
        )
      )}
    </div>
  )
}
