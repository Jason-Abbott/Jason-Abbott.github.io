import "./portfolio.scss";
import * as React from "react";
import Section from "./section";
import { resumeURL } from "./data";

export interface Example {
   name:string;
   repo?:string;
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
            { (example.repo)
               ? <a className="repo" href={example.repo}>View code repository<img src="./img/git.svg"/></a>
               : null
            }
            <div className="columns">
               <div>{example.summary.map(s => <p>{s}</p>)}</div>
               <ul>{example.tech.map(t => <li>{t}</li>)}</ul>
            </div>
            { (example.site) ? <a className="site" href={example.site}>Visit Site</a> : null }
         </aside>;
      }

      return <Section id="portfolio" className="inverted">
         <a href={resumeURL} className="resume">Resume</a>
         <h1>Portfolio</h1>
         <p>Some of the projects for which I was solely or primarily responsible. For more details, see each project repository's README.</p>
         <div className="showcase">
            <nav>
            { this.props.examples.map(e =>
               <div
                  onClick={()=>this.select(e.name)}
                  className={e.name == this.state.selected ? "selected" : undefined}>{e.name}</div>
            )}
            </nav>
            {aside}
         </div>
    </Section>;
   }
}