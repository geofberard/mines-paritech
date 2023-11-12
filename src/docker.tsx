import * as React from "react";
import * as ReactDom from "react-dom";
import { RootApp } from "./docker/RootApp";

ReactDom.render(<RootApp />, document.getElementById("app"));
