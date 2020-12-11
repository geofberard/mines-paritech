import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    separator : {
        height:15
    },
}))
  

export const Separator = () => {
    const classes = useStyle();
    return <div className={classes.separator}/>
}