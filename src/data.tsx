import { Link } from "./navbar";
import { Item } from "./about";
import { Skill } from "./skills";
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
      note: "T-SQL with two years of MySQL, PostgreSQL and SQLite."
   }, {
      icons: ["react.svg"],
      name: "React",
      years: 3,
      level: 5
   }, {
      icons: ["php.svg", "yii.png", "laravel.png"],
      name: "PHP",
      years: 3,
      level: 3,
      note: "Laravel and Yii."
   }, {
      icons: ["angular.svg"],
      name: "Angular",
      years: 4,
      level: 3,
      note: "Perhaps my expertise is better than suggested. I only know it too often makes me want to pull my hair out."
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
      note: "That was a long time ago. Times were simple then."
   }, {
      icons: ["aws.svg"],
      name: "AWS",
      years: 3,
      level: 3,
      note: "Created and manage RDS and EC2 instances and their security groups."
   }, {
      icons: ["azure.png"],
      name: "Azure",
      years: 2,
      level: 3,
      note: "Managed IAAS and PASS instances through RDP."
   }, {
      icons: ["google.jpg"],
      name: "Google",
      years: 17,
      level: 5,
      note: "Super-fast at finding answers on Stack Overflow, or whatever."
   }
];