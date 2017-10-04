import "./about.scss";
import * as React from "react";
import Content from "./content";

export interface Item {
   title:string;
   __html:string;
}

interface Props {
   className:string;
   list:Item[];
   columns:number;
}

export const About = (props:Props) => {
   if (props.list.length == 0) { return null; }
   if (props.columns < 1) { props.columns = 1; }

   const size = props.list.length / props.columns;

   console.log(size);


   return <section className={props.className}><Content>
      <dl>
      { props.list.map(i => [
         <dt>{i.title}</dt>,
         <dd dangerouslySetInnerHTML={i}></dd>
      ])}
      </dl>
   </Content></section >;
};