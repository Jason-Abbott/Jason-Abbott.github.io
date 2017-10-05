import "./section.scss";
import * as React from "react";

interface Props {
   className?:string;
   children:any;
}

export default (props:Props) => <section className={props.className}>
   <div className="content">{props.children}</div>
</section>;
