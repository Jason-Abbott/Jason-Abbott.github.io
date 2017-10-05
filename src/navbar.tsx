import "./navbar.scss";
import * as React from "react";
import Section from "./section";
import Platforms from "./platforms";

export interface Link {
   name:string;
   url:string;
}

export interface Props {
   platforms:Link[];
   pageLinks:Link[];
}

export const Navbar = (props:Props) => <Section id="navbar">
   <nav className="menu">
   { props.pageLinks.map(l => <a href={l.url}>{l.name}</a>)}
   </nav>
   <Platforms links={props.platforms}/>
</Section>;

export default Navbar;