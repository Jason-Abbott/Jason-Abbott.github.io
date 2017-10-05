import "./footer.scss";
import * as React from "react";
import Section from "./section";
import { Link } from "./navbar";
import Platforms from "./platforms";

interface Props {
   platforms:Link[];
}

export const Footer = (props:Props) => <Section id="footer" className="inverted">
   <a className="top" href="#navbar">To Top</a>
   <Platforms links={props.platforms}/>
</Section>;

export default Footer;