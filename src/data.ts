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
   { name: "gitlab", url: "gitlab.com/Jason-Abbott" },
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
         "An initiative to bring high performance, responsive software solutions comprised of our own open-sourced building blocks to businesses having policies preventing public cloud solutions.",
         "Cloud platforms have left little mindshare for on-premise solutions, allowing them to become as decrepit (weirdly difficult to install, maintain and use) as they are overpriced. We can do better."
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
         "You are looking at it! Somewhat over-engineered, yes, but simple enough to stand up in a day using toolchains I'd already refined.",
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
         "Kiosk is an ASP.Net MVC intranet site created as the final project for the three-year Certified Public Manager program I completed (see Leadership Skills below).",
         "Its purpose is to surface diverse business metrics in the simple, consumable manner of a kiosk by integrating (but not duplicating) data from disparate systems and platforms."
      ]
   },
   {
      name: "V.A.A.S.T",
      repo: "https://github.com/Jason-Abbott/vasst",
      tech: [
         "Robust product promotion system leveraging interfaces, reflection and binary serialization to support arbitrary combinations of extensible criteria.",
         "Suite of custom HTML controls (with IntelliSense configured) use reflection to read the criteria and other classes to generate friendly, easily managed forms.",
         "Low-level graphics code generates and enhances image assets on-the-fly, cached in custom HTTP handlers."
      ],
      summary: [
         "All custom, public ASP.Net site created to manage contests, file uploads, reviews, comments and rankings among video editors. (The site is no longer active since the company's business has changed.)"
      ]
   }, {
      name: "Albertsons",
      repo: "https://github.com/Jason-Abbott/albertsons",
      summary: [
         "I was team lead for front-end e-commerce development in 2002 when we took the initiative to rewrite and redesign everything on the Albertsons shopping site from the stored procedures up.",
         "I pitched the idea to our VP who agreed only if we would commit to being done in a month. A month! But we were motivated so I agreed. It took some long hours and follow-up releases but our team pulled it off.",
         "The result was hugely positive. The press and customers raved about the improvements. Read many of their quotes are in the respository README."
      ],
      tech: [
         "Innovative use (at the time) of Javascript and hidden frames to display an always up-to-date, interactive cart.",
         "Greatly simplified (perhaps even made fun) delivery reservation screens.",
         "Javascript powered (novel at the time) navigation and search avoided slow, repeated page reloads.",
         "Optimized data access layer and payment authorization flow to substantially speed up shopping.",
         "Dedicated screens for vision impaired customers enabled them to shop on their own, and read nutrition facts, for the first time.",
         "Purchase history and pharmaceutical analysis in the commerce pipeline flagged likely methamphetamine manufacterers (before laws put the constituent drugs behind the counter)."
      ]
   }, {
      name: "Benefit Payment Control",
      tech: [
         "Gamified agent home screens display current case closure rate relative to team average.",
         "Statistician-developed models implemented as complex T-SQL stored procedures to generate leads from large state and federal datasets.",
         "Widespread support for keyboard navigation accelerates agent work."
      ],
      summary: [
         "An internal case management system with potential unemployment fraud leads generated by continually updated statistical analyses. A trivial example would be a model flagging claims from a zip code in numbers nearing or exceeding the known population.",
         "(The code was proprietary and confidential and the site internal so can only be described.)"
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
         "Perl processed mainframe flat files to display product catalog on a sign-in secured public site.",
         "There were no commerce sites to compare or forums to consult at the time so all work was original and innovative."
      ],
      summary: [
         "This is an oldie. Working as the service manager in the computer department of a campus retailer afforded early access to high speed Internet. I used the opportunity to learn HTML, Perl and CGI (the tools of the time) to build a retail website.",
         "That website caught the attention of our supplier who considered it the best they'd seen, so they brought me to their headquarters in Cleveland to build an online, searchable catalog of their entire product offering."
      ]
   }
];