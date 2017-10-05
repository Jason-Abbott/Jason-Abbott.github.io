import "./portfolio.scss";
import * as React from "react";
import Section from "./section";
import { resumeURL } from "./data";

export interface Example {
   name:string;
   repo:string;
   site?:string;
   tech:string[];
   summary:string[];
}

interface State {
   selected:string;
}

interface Props {
   examples:Example[];
}

export default class extends React.PureComponent<Props, State> {
   constructor(props:Props) {
      super(props);
      this.state = { selected: props.examples[0].name };
   }

   select(name:string) {
      this.setState({ selected: name });
   }

   render() {
      const example = this.props.examples.find(e => e.name == this.state.selected);
      let aside:JSX.Element = null;

      if (example !== undefined) {
         aside = <aside>
            <a className="repo" href={example.repo}>View code repository<img src="./img/git.svg"/></a>
            <div className="columns">
               <div className="tech">{example.tech.map(t => <p>{t}</p>)}</div>
               <div>{example.summary.map(s => <p>{s}</p>)}</div>
            </div>
            { (example.site) ? <a className="site" href={example.site}>Visit Site</a> : null }
         </aside>;
      }

      return <Section id="portfolio" className="inverted">
         <h1>Portfolio</h1>
         <p>Most of my work has been proprietary but I can share a few personal projects.
            Check out my <a href={resumeURL}>resume</a> for information about the others.</p>
         <div className="showcase">
            <nav>
            { this.props.examples.map(e =>
               <div
                  onClick={()=>this.select(e.name)}
                  className={e.name == this.state.selected ? "selected" : null}>{e.name}</div>
            )}
            </nav>
            {aside}
         </div>
    </Section>;
   }
}