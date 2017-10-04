import "./about.scss";
import * as React from "react";
import Content from "./content";

export interface Item {
   term:string;
   def:string;
}

interface Props {
   className:string;
   list:Item[];
   columns:number;
}

export const About = (props:Props) => {
   return <section className={props.className}><Content>
    { props.list.map(i => <li>{i.term}</li>)}
   </Content></section >;
};