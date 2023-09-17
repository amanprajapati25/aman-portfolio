/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import materialUI from "./assets/images/materialui.png";
import typescript from "./assets/images/typescript.png";
import template from "./assets/images/template.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sachin Kumar Gupta",
  title: "Hi, I'm Sachin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 and Competitive Programmer 💻 having an experience of building interactive and intuitive web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1t5epimIlh0F3ExEhq5nNbGWGTr5VcFTZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sachin-KrGupta",
  linkedin: "https://www.linkedin.com/in/sachinkrgupta/",
  gmail: "sachingupta959@gmail.com",
  codeforces: "https://codeforces.com/profile/SachinKumarGupta",
  codechef: "https://www.codechef.com/users/sachinkrgupta",
  leetcode: "https://leetcode.com/SachinKumarGupta",
  hackerrank: "https://www.hackerrank.com/SachinKumarGupta",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I AM A FULL STACK DEVELOPER EXCELLING IN FRONTEND WHO WANTS TO EXPLORE EVERY TECH STACK. I ALSO LOVE TO BRAINSTORM AND SOLVE COMPLEX PROBLEMS.",
  skills: [
    emoji(
      "⚡ Developing highly interactive and optimized Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Creating robust and efficient back-end systems to power your applications."
    ),
    emoji(
      "⚡ Solving complex problems related to data structures and algorithms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Typescript",
      svgSrc: typescript
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Material UI",
      svgSrc: materialUI
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIET Group of Institutions",
      logo: require("./assets/images/kiet.jpeg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "July 2019 - July 2023",
      desc: "Core member of the technical club of the college, Innogeeks. Actively hosted and participated in various events and workshops."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Josh Technology Group",
      companylogo: require("./assets/images/jtg.jpeg"),
      date: "January 2023 – Present",

      desc: "Working on Pod.AI, the organization's flagship product, the fastest growing career development platform that brings together academia, companies, students, and alumni in a single place to collaborate and grow. ",
      descBullets: [
        "Executed a comprehensive project migration from webpack to vite, achieving an 80% reduction in build time—streamlining it from 15 minutes to an impressive 3 minutes.",
        "Led the development and delivery of the three features, ensuring a seamless user experience and efficient data management.",
        "Part of mobile application team, responsible for the responsive design of the application to ensure smooth user experience across all devices.",
        "Worked on the development of organization UI library, which is used across the project.",
        "Effectively orchestrated the migration of the UI library from webpack to tsup, yielding a remarkable 98% decrease in build time."
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I MADE THROUGHOUT MY COLLEGE CAREER",
  projects: [
    {
      image: require("./assets/images/kodebook.png"),
      projectName: "KodeBooK",
      projectDesc:
        "A social media site specially for geeks and like minded people to ask doubts and post techie stuffs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kodebook.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: template,
      projectName: "Startup Microsite Template",
      projectDesc: "A template for startups to showcase their product.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://precious-strudel-910875.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const achievementSection = {
  title: emoji("Achievements and Coding Profiles 🏆"),
  subtitle:
    "Achievements, Milestones cleared and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TCS CodeVita",
      subtitle:
        "Secured 33rd rank in TCS CodeVita Season 10 Round 1 among 100000+ participants",
      image: require("./assets/images/codevita.png"),
      imageAlt: "Codevita Logo",
      footerLink: [
        {
          name: "View LinkedIn Post",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6917803484121612288/"
        }
      ]
    },
    {
      title: "CodeForces",
      subtitle:
        "Specialist (Max Rating – 1466) | Solved over 800 problems | Ranked 1416 on Educational Round | Maintained streak of 600+ days",
      image: require("./assets/images/codeforcesimage.jpeg"),
      imageAlt: "Codeforces Logo",
      footerLink: [
        {
          url: "https://codeforces.com/profile/SachinKumarGupta",
          name: "Visit Profile"
        }
      ]
    },
    {
      title: "Leetcode",
      subtitle:
        "Knight (Max Rating – 1932)| Top 3.6% | Solved 600+ problems | Ranked 682 in Biweekly Contest 75",
      image: require("./assets/images/leetcode.png"),
      imageAlt: "Leetcode Logo",
      footerLink: [
        {
          url: "https://leetcode.com/SachinKumarGupta",
          name: "Visit Profile"
        }
      ]
    },
    {
      title: "Codechef",
      subtitle: "4* (Max Rating – 1840) | Ranked 362 in July Lunchtime 2021",
      image: require("./assets/images/codechefimage.png"),
      imageAlt: "Codechef Logo",
      footerLink: [
        {
          url: "https://www.codechef.com/users/sachinkrgupta",
          name: "Visit Profile"
        }
      ]
    },
    {
      title: "HackerRank",
      subtitle:
        "6* Problem Solving | Silver Medal, Ranked 819/8051 in HackerRank Hackfest 2020",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Hackerrank Logo",
      footerLink: [
        {
          url: "https://leetcode.com/SachinKumarGupta",
          name: "Visit Profile"
        }
      ]
    },
    {
      title: "Google Hashcode",
      subtitle: "Secured 2076th rank in Google Hashcode 2022",
      image: require("./assets/images/hashcode.png"),
      imageAlt: "Google Hashcode",
      footerLink: []
    },
    {
      title: "Github Campus Hackathon",
      subtitle:
        "Runner up in national level GitHub campus hackathon organized by Kestone Global",
      image: require("./assets/images/kestone.webp"),
      imageAlt: "PWA Logo",
      footerLink: []
    },
    {
      title: "Codechef",
      subtitle: "4* (Max Rating – 1840) | Ranked 362 in July Lunchtime 2021",
      image: require("./assets/images/codechefimage.png"),
      imageAlt: "Codechef Logo",
      footerLink: [
        {
          url: "https://www.codechef.com/users/sachinkrgupta",
          name: "Visit Profile"
        }
      ]
    },
    {
      title: "HackWithInfy",
      subtitle:
        "Cleared both rounds of InfyTQ and HackWithInfy organized by Infosys",
      image: require("./assets/images/hwi.jpg"),
      imageAlt: "Infosys Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
