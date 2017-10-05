import "./portfolio.scss";
import * as React from "react";
import Section from "./section";

export interface Example {
   name:string;
}

interface Props {
   examples:Example[];
}

export default (props:Props)=> <Section className="inverted portfolio">
   <h1>Portfolio</h1>
   <p>Most of my work has been proprietary but I can share a few things.</p>
   { props.examples.map(e =>
      <div>{e.name}</div>
   )}
</Section>;