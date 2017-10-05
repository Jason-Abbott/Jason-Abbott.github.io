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
      note: "Most client work I do is now React. Like this page."
   }, {
      icons: ["github-octocat.svg"],
      name: "GitHub (and GitLab)",
      years: 4,
      level: 5,
      note: "The whole methodology with issues, PRs, etc."
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
      note: "That was a long time ago, serving web pages with CGI."
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
];

export const examples:Example[] = [
   {
      name: "Toba Technology",
      repo: "https://gitlab.com/toba-tech",
      tech: [
         "Multiple React apps built with TypeScript communicate through pure websockets to fluently defined Go server endpoints. Data are persisted through a thin, fluent wrapper to SQLite files with PRAGMA defined for realtime updates.",
         "Other evaluated storage solutions include PosgreSQL, RethinkDB, Caylay and BoltDB. Git branches remain for most of those."
      ],
      summary: [
         "Years in enterprises of 10,000 to 100,000 employees taught me that much of the line-of-business software on the market is as decrepit as it is expensive.",
         "While cloud solutions were moving rapidly to responsive and realtime, on-premise was still seeing \"requires IE6\" notices."
      ]
   }, {
      name: "Trail Image",
      repo: "https://github.com/Jason-Abbott/trail-image",
      site: "http://www.trailimage.com/",
      tech: [
         "Built with Isomorphic TypeScript on a Node 8.x and Express backend incorporating custom caching and spam-blocking middlware, and integrated with Google Drive, Flickr, Redis and Mapbox APIs.",
         "Configured with thorough unit tests for continuous integration through Travis and Heroku.",
         "This project serves as one of my innovation platforms, routinely rewritten for no other reason than to test new technologies. It was all ES6 classes at one time and all functional programming (with Ramda) at another.",
         "The latest iteration underway is a port to Go. Check out the diagram and branches in the repository."
      ],
      summary: [
         "The platform design goal is to directly use camera and GPS files to generate an SEO optimized, detailed (photo tags, camera info, maps), engaging and responsive photo blog without need of any other data.",
         "This facilitates one-click publishing and means the site and its integrations could all be erased with no loss of content. It can be immediately regenerated directly from .dng and .gpx files."
      ]
   }
];