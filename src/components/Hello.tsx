import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    return (
        <React.Fragment>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            <p>(I'm functional component)</p>
        </React.Fragment>
    )
}
