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
   { title: "Father of four", __html: "Three girls and a boy. It&rsquo;s safe again &mdash; two are now in other countries." },
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
      note: "Imported, transformed, projected, normalized. Oh my."
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
      repo: "https://github.com/toba",
      tech: [
         "Protobuf client-server communication and storage for best throughput, type safety and developer ergonomics.",
         "Line of business applications implemented as lightweight, modular React apps.",
         "Compiled as single, native binary (any platform) with embedded web assets for super easy integration and management."
      ],
      summary: [
         "An initiative to bring high performance, modern, responsive software solutions to businesses having policies averse to public cloud solutions.",
         "Cloud platforms have left on-premise software little mindshare, often leaving it as decrepit (weirdly difficult to install, maintain and use) as it is overpriced.",
         "Delivered as a single, proprietary binary from open source building blocks, the Toba solution will require little to no integration or operating expense."
      ]
   }, {
      name: "Trail Image",
      repo: "https://github.com/Jason-Abbott/trail-image",
      site: "http://www.trailimage.com/",
      tech: [
         "Isomorphic TypeScript on a Node 8.x and Express backend incorporate custom caching and spam-blocking middleware.",
         "Integrated with Google Drive, Flickr, Redis and Mapbox APIs.",
         "Thorough unit tests enable continuous integration through Travis and Heroku."
      ],
      summary: [
         "Facilitates one-click publishing by directly using camera and GPS files to generate an SEO optimized (i.e. JSON-LD), detailed (photo tags, camera info, maps) and responsive photo blog without need of any other data.",
         "This design makes the site resilient to data loss. It can be immediately and completely regenerated directly from .dng and .gpx files.",
         "This project serves as one of my innovation platforms, routinely rewritten for no other reason than to test new technologies. It was all ES6 classes at one time and all functional programming (with Ramda) at another.",
         "The latest iteration underway is a port to Go. Check out the diagram and branches in the repository."
      ]
   }, {
      name: "Portfolio",
      repo: "https://github.com/Jason-Abbott/Jason-Abbott.github.io",
      summary: [
         "You are looking at it! A bit over-engineered, yes, but still able to stand it up in a day using toolchains I'd already refined.",
         "Worth a mention only because it illustrates React and UX work I've done elsewhere but can't easily share."
      ],
      tech: [
         "React application written in TypeScript and bundled with Webpack.",
         "Componentized SASS styling that's concatenated and minified.",
         "Tiny content management system allows updates without editing any components."
      ]
   }, {
      name: "Enterprise Kiosk",
      repo: "https://github.com/Jason-Abbott/enterprise-kiosk",
      tech: [
         "Automated role-based authorization with SSPI integration to Active Directory groups",
         "\"Touchless\" design and theme updates with drawing primitives that scale, sharpen and generate graphic assets on-the-fly",
         "Custom field attributes automate MVC field bindings",
         "Multi-threaded scheduler polls for changes in external systems",
         "Custom HTTP handlers for AJAX and generated image caching"
      ],
      summary: [
         "Kiosk is an ASP.Net MVC intranet site created as the final project for the three-year Certified Public Manager program I went through (see Leadership Skills below).",
         "Its purpose is to surface diverse business metrics in the simple, consumable manner of a kiosk by integrating (but not duplicating) data from disparate systems and platforms."
      ]
   },
   {
      name: "V.A.A.S.T",
      repo: "https://github.com/Jason-Abbott/vasst",
      tech: [
         "Custom product promotion system leveraging interfaces, reflection and binary serialization to support arbtrary criteria and combinations.",
         "Suite of custom HTML controls (with IntelliSense configured) use reflection to read the criteria and other classes to generate friendly, easily managed forms.",
         "Low-level graphics code to generate and enhance image assets on-the-fly, cached in custom HTTP handlers."
      ],
      summary: [
         "Public ASP.Net site created to manage contests, file uploads, reviews, comments and rankings among video editors. The site is no longer active since the company's business has changed."
      ]
   }, {
      name: "Albertsons",
      repo: "https://github.com/Jason-Abbott/albertsons",
      summary: [
         "I was team lead for front-end e-commerce development in 2002 when we took the initiative to rewrite and redesign everything on the Albertsons shopping site from the stored procedures up.",
         "I pitched the idea to our VP who agreed only if we would commit to being done in a month. A month! But we were motivated so I agreed. It took some long hours but our team pulled it off.",
         "The result was hugely positive. The press and customers raved about the improvements. (Some of their quotes are in the respository README.)"
      ],
      tech: [
         "Innovative use (at the time) of Javascript and a hidden frame to display an always up-to-date, interactive cart.",
         "Greatly simplified (perhaps even made fun) delivery reservation screens.",
         "Optimized data access layer and payment authorization flow to substantially speed up shopping."
      ]
   }, {
      name: "Benefit Payment Control",
      tech: [
         "Gamified agent home screens by always displaying current closure rate relative to team average."
      ],
      summary: [
         ""
      ]
   }, {
      name: "webCal",
      repo: "https://github.com/Jason-Abbott/webCal",
      tech: [
         "Elegant day, week and month views supported across version 3 and 4 browsers (not easy at the time!) with clever <table> usage.",
         "Themeable with a set of coordinated palettes, including instructions for creating custom themes.",
         "Data model allowing various kinds of event repetition and events that span days (requiring some tricky HTML)."
      ],
      summary: [
         "One of a handful of widgets I sold for about five years before their functionality became ubiquitous. This was a calendar. I also had a tree navigation and photo album widget.",
         "The products led to various contract jobs with a fire department, college, church and county, to exend the functionality to reserve resources and handle scheduling conflicts."
      ]
   }, {
      name: "Nacscorp",
      repo: "https://github.com/Jason-Abbott/nacscorp",
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