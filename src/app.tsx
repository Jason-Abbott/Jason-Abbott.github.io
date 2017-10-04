import "./app.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navbar";
import { About } from "./about";
import { about, platforms, pageLinks } from "./data";

const App = () => <div>
   <Navbar platforms={platforms} pageLinks={pageLinks} />
   <img id="face" src="./img/face.jpg"/>
   <About className="about" columns={2} list={about}/>
</div>;

ReactDOM.render(<App/>, document.getElementById("react-root"));