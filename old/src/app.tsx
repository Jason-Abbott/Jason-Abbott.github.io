import "./app.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Section from "./section";
import Navbar from "./navbar";
import About from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Footer from "./footer";
import { about, platforms, pageLinks, skills, examples } from "./data";

const App = ()=> <div>
   <Navbar platforms={platforms} pageLinks={pageLinks} />
   <img id="face" src="./img/face.jpg"/>
   <div id="hero">
      <Section>
         <h2>Full Stack Developer<br/>Solution Architect</h2>
         <h1>Jason Abbott</h1>
      </Section>
   </div>
   <About columns={2} list={about}/>
   <Portfolio examples={examples}/>
   <Skills skills={skills}/>
   <Footer platforms={platforms}/>
</div>;

ReactDOM.render(<App/>, document.getElementById("react-root"));