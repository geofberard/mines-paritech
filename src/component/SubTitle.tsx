import { FC } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    subTitle : {
        paddingBottom: 0,
        fontSize: theme.typography.subtitle1.fontSize
    }
}))

export const SubTitle : FC = ({children}) => {
    const classes = useStyle();
    return <div className={classes.subTitle}>{children}</div>
}