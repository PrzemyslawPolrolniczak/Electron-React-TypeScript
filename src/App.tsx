import * as React from "react";

import { Hello } from "./components/Hello";


export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <p>(I'm class component)</p>
                <Hello compiler="TypeScript" framework="React" />
            </React.Fragment>
        );
    }
}