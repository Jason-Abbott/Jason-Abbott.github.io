import "./navbar.scss";
import * as React from "react";
import Content from "./content";

export interface Link {
   name:string;
   url:string;
}

export interface Props {
   platforms:Link[];
   pageLinks:Link[];
}

export const Navbar = (props:Props) => <nav className="top"><Content>
   <ul>
   { props.pageLinks.map(l =>
      <li><a href={l.url}>{l.name}</a></li>
   )}
   </ul>
   <div id="platforms">
   { props.platforms.map(p =>
      <a href={`https://${p.url}`}><img src={`./img/${p.name}.svg`} className={p.name}/></a>
   )}
   </div>
</Content></nav>;