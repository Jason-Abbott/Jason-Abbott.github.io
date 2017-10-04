import { Link } from "./navbar";
import { Item } from "./about";
import { decode } from "./util";

// weak secret
const email = "znvygb:wbo@genvyvzntr.pbz";

export const platforms:Link[] = [
   { name: "facebook", url: "www.facebook.com/jason.e.abbott" },
   { name: "linkedin", url: "www.linkedin.com/in/jasonabbott/" },
   { name: "github", url: "github.com/Jason-Abbott" },
   { name: "gitlab", url: "gitlab.com/toba-tech" },
   { name: "fivehundredpx", url: "500px.com/trailimage" }
];

export const pageLinks:Link[] = [
   { name: "About", url: "#about" },
   { name: "Contact", url: decode(email) },
   { name: "Skills", url: "#skills" }
];

export const about:Item[] = [
   { title: "Dirtbike rider", __html: "I&rsquo;m still working on my wheelie but I&rsquo;ve mastered the wipe-out." },
   { title: "Father of four", __html: "It&rsquo;s safe &mdash; two are in other countries." },
   { title: "Mediocre travel writer", __html: "I have <a href=\"http://www.trailimage.com\">this blog</a>, you see &hellip;" },
   { title: "Keeper of a pond", __html: "Koi are demanding and blue heron are rude." },
   { title: "Photo enthusiast", __html: "I still have prints in the garage left over from what I sold at the farmers market. Five years ago. Want one?" }
];