import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    title : {
        margin: "auto",
        paddingBottom: 10,
        fontSize: theme.typography.h3.fontSize
    }
}))

export const Title : FC = ({children}) => {
    const classes = useStyle();
    return <div className={classes.title}>{children}</div>
}