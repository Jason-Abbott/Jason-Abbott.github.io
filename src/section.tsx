import "./section.scss";
import * as React from "react";

interface Props {
   id?:string;
   className?:string;
   anchor?:string;
   children:any;
}

export default (props:Props) => <section id={props.id} className={props.className}>
   <div className="content">{props.children}</div>
</section>;
