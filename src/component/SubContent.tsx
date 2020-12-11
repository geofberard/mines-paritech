import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    content : {
        fontSize: theme.typography.body2.fontSize, 
        textAlign: "left",
    }
}))

export const SubContent : FC = ({children}) => {
    const classes = useStyle();
    return <div className={classes.content}>{children}</div>
}