import "./navbar.scss";
import * as React from "react";
import Section from "./section";

export interface Link {
   name:string;
   url:string;
}

export interface Props {
   platforms:Link[];
   pageLinks:Link[];
}

export const Navbar = (props:Props) => <Section className="navbar">
   <nav className="menu">
   { props.pageLinks.map(l => <a href={l.url}>{l.name}</a>)}
   </nav>
   <nav className="platforms">
   { props.platforms.map(p =>
      <a href={`https://${p.url}`}><img src={`./img/${p.name}.svg`} className={p.name}/></a>
   )}
   </nav>
</Section>;

export default Navbar;