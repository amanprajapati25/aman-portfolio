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
  username: "Aman Kumar Prajapati",
  title: "Hi, I'm Aman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 and Competitive Programmer 💻 having an experience of building interactive and intuitive web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wJoo97UBlzwaql2H1h0ujKZA-Pl1OPMX/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amanprajapati25/",
  linkedin: "https://www.linkedin.com/in/aman-prajapati-2b0546191",
  gmail: "amanprajapati328@gmail.com",
  leetcode: "https://leetcode.com/amanp2517/",
  hackerrank: "https://www.hackerrank.com/amanprajapati251?hr_r=1",
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
      role: "Software Developer (Frontend)",
      company: "Staqu Technologies",
      companylogo: require("./assets/images/st.png"),
      date: "May 2023 - Present",

      desc: "Contributing to the development and enhancement of JARVIS, STAQU's flagship product, This includes creating a new video management software product, implementing standout features like Recurring Reports, and building the MDM Sales Panel with a wide range of features",
      descBullets: [
        "Actively contributing to the improvements, optimizations, and feature development for JARVIS, a flagship product of STAQU ",
        "Developing a new product from scratch that comprehends video management software encompassing camera onboarding, video playback, custom video wall configuration, and advanced video processing capabilities ",
        "Developed various features for Jarvis, including a standout accomplishment in designing and implementing the Recurring Reports feature, enabling automated report deliveries to clients directly ",
        "Created a comprehensive web interface MDM Sales Panel from scratch, encompassing features like dynamic inventory categorization, efficient sales report management, detailed profit and loss analysis, and a robust employee information system",
        "TECH USED: – HTML, SCSS, JS, REACTJS, REDUX, ELECTRONJS and ANTD "
      ]
    },
    {
      role: "Full Stack Intern",
      company: "Adpushup Software Limited",
      companylogo: require("./assets/images/ad2.png"),
      date: "January 2023 - April 2023",

      desc: "Played the major role in developing the 'Instream Adhoc Dashboard,' cutting ad hosting time by 40% through UI enhancements, and driving revenue growth for 'VideoJsPoc' with header bidding and floor sense features.",
      descBullets: [
        "Pioneered the development of the user-friendly 'Instream Adhoc Dashboard' facilitating the seamless placement of video advertisements across diverse websites ",
        "Streamlined ad hosting time by around 40% through UI optimizations, resulting in improved operational efficiency",
        "Orchestrated the enhancement of the 'VideoJsPoc' product to amplify revenue from video ad streams ",
        "Played an integral role in advancing the product, including the implementation of header bidding and floor sense functionalities, resulting in significant ad revenue augmentation for users ",
        "TECH USED: – HTML, CSS, JS, REACTJS, NODEJS, PREBIDJS and VIDEOJS "
      ]
    }
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
    // {
    //   title: "CodeForces",
    //   subtitle:
    //     "Specialist (Max Rating – 1466) | Solved over 800 problems | Ranked 1416 on Educational Round | Maintained streak of 600+ days",
    //   image: require("./assets/images/codeforcesimage.jpeg"),
    //   imageAlt: "Codeforces Logo",
    //   footerLink: [
    //     {
    //       url: "https://codeforces.com/profile/SachinKumarGupta",
    //       name: "Visit Profile"
    //     }
    //   ]
    // },
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
  email_address: "amanprajapati328@gmail.com"
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
