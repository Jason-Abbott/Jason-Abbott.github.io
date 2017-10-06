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
   { title: "Father of four", __html: "It&rsquo;s safe again &mdash; two are now in other countries." },
   { title: "Mediocre travel writer", __html: "I have <a href=\"http://www.trailimage.com\">this blog</a>, you see &hellip;" },
   { title: "Keeper of a pond", __html: "Koi are demanding and blue heron are rude. I&rsquo;m not sure why I do it." },
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
      note: "Most client work I do is now React, such as this page."
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
      icons: ["map-pin.png"],
      name: "GIS",
      years: 3,
      level: 3,
      note: "Imported, transformed, projected, normalized"
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
         "Multiple React apps built with TypeScript communicate through pure websockets to fluently defined Go server endpoints. Data are persisted through a thin (also fluent) wrapper to SQLite files with PRAGMA defined for realtime updates through the persistent websocket in goroutines.",
         "Other evaluated storage solutions include PosgreSQL, RethinkDB, Cayley and BoltDB. Git branches remain for most of those.",
         "(I am using GitLab because it offers private repositories in the free tier. I haven't decided what will remain open-source.)"
      ],
      summary: [
         "This is two projects, the solution and its marketing site, both under development.",
         "It is an initiative targeted at businesses having policies averse to cloud solutions which, in my experience, often relegates them to software that's as decrepit (weirdly difficult to install, maintain and use) as it is expensive.",
         "My goal is a solution that's trivial to install (single binary) with the high-performance, realtime and responsive attributes we expect today."
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
         "The platform design goal is to directly use camera and GPS files to generate an SEO optimized (i.e. JSON-LD), detailed (photo tags, camera info, maps), engaging and responsive photo blog without need of any other data.",
         "This facilitates one-click publishing and means the site and its integrations could all be erased with no loss of content. It can be immediately regenerated directly from .dng and .gpx files."
      ]
   }, {
      name: "Corporate",
      tech: [
         "I have worked in and on a wide range of technologies and platforms for companies small and large, public, non-profit and private.",
         "The list of technical skills below covers most my experience, though a few things didn't seem worth highlighting, like two years spent working on a Flash application."
      ],
      summary: [
         "There are several projects in this category that I'm proud of but those I can take majority credit for have been internal. I can only describe them.",
         "It was interesting and satisfying to work with staff statisticians to implement models for detecting unemployment insurance fraud with complex SQL queries across multiple datasets. The matches fed a case management system I built in ASP.Net, mildly gamified with notifications indicating closure rate relative to co-workers.",
         "I was also proud to propose and lead the front-end redesign and rewrite of the commerce site for a major grocery chain, resulting in hugely positive feedback and media in the affected Washington and California markets.",
         "I can think of many solutions I've developed that were innovative in their time, like figuring out convolution matrices to resize and sharpen images for a real-estate application before there were libraries around to do it."
      ]
   }, {
      name: "Older Stuff",
      repo: "https://github.com/Jason-Abbott?tab=repositories",
      tech: [
         "My first projects in the early 1990s were Perl on Unix followed by a decade on the Microsoft stack — IIS, Classic ASP, COM+, Commerce Server, SQL Server, ASP.Net and C#.",
         "For the last seven years, my projects have all been platform agnostic, Node and Go with React or vanilla Javascript on the client."
      ],
      summary: [
         "I back-filled GitHub with a smattering of old projects going back to the 1990s. (Ignore the commit dates. The real date is in the README or repo description.)",
         "Several of them are simple websites. A couple are widgets I sold for several years, a calendar and tree navigation."
      ]
   }
];