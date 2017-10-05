import { Link } from "./navbar";
import { Item } from "./about";
import { Skill } from "./skills";
import { Example } from "./portfolio";
import { decode } from "./util";

// weak secret
const email = "znvygb:wbo@genvyvzntr.pbz";

export const resumeURL = "https://docs.google.com/document/d/1uHO3CWC9mTSYAkh87I5BPbuCEu3ux4BONR3EeS6hahs/edit?usp=sharing";

export const platforms:Link[] = [
   { name: "facebook", url: "www.facebook.com/jason.e.abbott" },
   { name: "linkedin", url: "www.linkedin.com/in/jasonabbott/" },
   { name: "github", url: "github.com/Jason-Abbott" },
   { name: "gitlab", url: "gitlab.com/toba-tech" },
   { name: "fivehundredpx", url: "500px.com/trailimage" }
];

export const pageLinks:Link[] = [
   { name: "Portfolio", url: "#portfolio" },
   { name: "Skills", url: "#skills" },
   { name: "Contact", url: decode(email) }
];

export const about:Item[] = [
   { title: "Dirtbike rider", __html: "I&rsquo;m still working on my wheelie but I&rsquo;ve mastered the wipe-out." },
   { title: "Father of four", __html: "It&rsquo;s safe &mdash; two are in other countries." },
   { title: "Mediocre travel writer", __html: "I have <a href=\"http://www.trailimage.com\">this blog</a>, you see &hellip;" },
   { title: "Keeper of a pond", __html: "Koi are demanding and blue heron are rude." },
   { title: "Photo enthusiast", __html: "I have prints in the garage left over from selling at the farmers market &hellip; five years ago." }
];

export const skills:Skill[] = [
   {
      icons: ["gopher.svg"],
      name: "Go",
      years: 2,
      level: 4,
      note: "My favortite so far."
   }, {
      icons: ["js.png", "node.png"],
      name: "Javascript",
      years: 23,
      level: 5,
      note: "Node and browser. Lots."
   }, {
      icons: ["typescript.svg"],
      name: "TypeScript",
      years: 2,
      level: 4
   }, {
      icons: ["react.svg"],
      name: "React",
      years: 3,
      level: 5,
      note: "Most client work is now React. Like this page."
   }, {
      icons: ["dotnet.png"],
      name: "C# and ASP.Net",
      years: 12,
      level: 5,
      note: "Classic and MVC."
   }, {
      icons: ["java.svg", "android.svg"],
      name: "Java",
      years: 2,
      level: 3,
      note: "Android."
   }, {
      icons: ["sql-server.svg", "postgres.svg", "MySQL.svg"],
      name: "SQL",
      years: 20,
      level: 5,
      note: "Mostly T-SQL but a couple years each for MySQL, PostgreSQL and SQLite."
   }, {
      icons: ["python.png", "django.svg"],
      name: "Python",
      years: 2,
      level: 3,
      note: "With Django."
   }, {
      icons: ["php.svg", "yii.png", "laravel.png"],
      name: "PHP",
      years: 3,
      level: 3,
      note: "With Laravel and Yii."
   }, {
      icons: ["angular.svg"],
      name: "Angular",
      years: 4,
      level: 3
      //note: "Perhaps my expertise is better than suggested. I only know it too often makes me want to pull my hair out."
   }, {
      icons: ["css3.png"],
      name: "CSS, SASS, LESS",
      years: 21,
      level: 5
   }, {
      icons: ["perl.svg"],
      name: "Perl",
      years: 4,
      level: 3,
      note: "That was a long time ago. Served web pages with CGI."
   }, {
      icons: ["aws.svg"],
      name: "AWS",
      years: 3,
      level: 3,
      note: "Created and managed RDS and EC2 instances."
   }, {
      icons: ["azure.png"],
      name: "Azure",
      years: 2,
      level: 3,
      note: "Managed IAAS and PASS instances through RDP."
   }
   // , {
   //    icons: ["google.jpg"],
   //    name: "Google",
   //    years: 17,
   //    level: 5,
   //    note: "Super-fast at finding answers on Stack Overflow, or whatever."
   // }
];

export const examples:Example[] = [
   {
      name: "Toba Technology",
      repo: "https://gitlab.com/toba-tech",
      summary: [
         "This project is"
      ]
   }, {
      name: "Trail Image",
      repo: "https://github.com/Jason-Abbott/trail-image",
      site: "http://www.trailimage.com/",
      summary: [
         "The software for my long time photo blog has been repeatedly re-written for no reason other than to test new approaches. There was a functional programming phase (using the Ramda library) then all ES6 classes when those were new. Currently there's a Go branch in the works.",
         "It integrates with Flickr, Redis and Google Drive APIs in order to publish articles without the addition of any data beyond what's contained in the camera and GPS files. As long the .gpx and .dng files exist, the whole site can be republished at any time."
      ]
   }
];