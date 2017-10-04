import "./section.scss";
import * as React from "react";
import Content from "./content";

interface Props {
   className?:string;
   children:any;
}

export default (props:Props) => <section className={props.className}>
   <Content {... props}/>
</section>;
