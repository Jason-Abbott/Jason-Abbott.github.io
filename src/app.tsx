import "./app.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar, Link } from "./navbar";
import { About, Item } from "./about";
import * as platforms from "./platforms.json";
// weak secret
const email = "znvygb:wbo@genvyvzntr.pbz";

const decode = (text:string):string => text.replace(/[a-zA-Z]/g, (t:string) => {
   const c1 = t <= "Z" ? 90 : 122;
   const c2 = t.charCodeAt(0) + 13;
   return String.fromCharCode(c1 >= c2 ? c2 : c2 - 26);
});

const platforms:Link[] = [
   { name: "facebook", url: "www.facebook.com/jason.e.abbott" },
   { name: "linkedin", url: "www.linkedin.com/in/jasonabbott/" },
   { name: "github", url: "github.com/Jason-Abbott" },
   { name: "gitlab", url: "gitlab.com/toba-tech" },
   { name: "fivehundredpx", url: "500px.com/trailimage" }
];

const pageLinks:Link[] = [
   { name: "About", url: "#about" },
   { name: "Contact", url: decode(email) },
   { name: "Skills", url: "#skills" }
];

const about:Item[] = [
   { term: "", def: "" }
];

const App = () => <div>
   <Navbar platforms={platforms} pageLinks={pageLinks} />
   <img id="face" src="./img/face.jpg"/>
   <About className="about" columns={2} list={about}/>
</div>;

ReactDOM.render(<App/>, document.getElementById("react-root"));