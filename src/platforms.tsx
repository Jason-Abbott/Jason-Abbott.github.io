import "./platforms.scss";
import * as React from "react";
import { Link } from "./navbar";

interface Props {
   links:Link[];
}

export default (props:Props) => <nav className="platforms">
   { props.links.map(p =>
      <a href={`https://${p.url}`}><img src={`./img/${p.name}.svg`} className={p.name}/></a>
   )}
</nav>;