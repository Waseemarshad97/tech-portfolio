import emoji from "react-easy-emoji";

export const greetings = {
  name: "Waseem Arshad",
  title: "Hi all, I'm Waseem",
  description:
    "Dedicated and results-driven Software Engineer with three years of hands-on experience in full-stack web development.Proven track record of delivering high-quality software solutions while adapting to evolving technologies and industry best practices. Passionate about creating innovative, scalable, and user-centric applications to solvereal-world problems. Seeking challenging tech developer opportunities in vision driven environments to contribute my expertise and drive technological advancements",
  resumeLink:
    "https://drive.google.com/file/d/18tDR6wrBrCa24GRh4XFgEcQAbR2I6oJk/view?usp=sharing",
};

export const openSource = {
  githubUserName: "waseemarshad97",
};

export const contact = {};

export const socialLinks = {
  url: "https://google.co.uk",
  linkedin: "https://www.linkedin.com/in/waseem-arshad-601115161/",
  github: "https://github.com/Waseemarshad97",
  instagram: "https://www.instagram.com/waseem_arshad_97",
  facebook: "/",
  twitter: "/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive dynamic websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node + Express js"),
        emoji(
          "⚡ Bulding database schema both in SQL & noSQL DB's (postgreSQL + MongoDB)"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Node js",
          fontAwesomeClassname: "vscode-icons:file-type-node",
        },
        {
          skillName: "Express js",
          fontAwesomeClassname: "logos:express",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working AWS cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Middlesex University, London",
    subHeader: "Master of Arts in International Business Managment",
    duration: "January 2023 - January 2024",
    desc: "Participated in the research and study of different management constraints and issues in MNE's across the globe.carefully analzed management in MNC's from a global perspective and derived strategies for the overall improvement of the organisations.",
    // grade: "First Class",
  },
  {
    schoolName: "PRIST University, India",
    subHeader: "Bachelor of Technology in Computer Science Engineering",
    duration: "September 2017 - April 2021",
    desc: "Participated in the research and development of Full stack projects.Learned and executed computer science fundementals and its application through building live projects with latest frameworks and advanced software design principles.",
    grade: "First Class",
  },
  {
    schoolName: "St.Joseph's engish school, India",
    subHeader: "A level in Science & Maths",
    duration: "September 2014 - june 2016",
    desc: "Partpicipated in leadership roles and public speaking events",
    grade: "67%",
  },
  {
    schoolName: "Preston Manor High School, London",
    subHeader:
      "Science, Maths, English -  language + literature, Business, ICT ,History",
    duration: "September 2012 - june 2014",
    desc: "",
    grade: "10 A*-C",
  },
];

export const experience = [
  {
    role: "Python Developer Intern",
    company: "TcsIon",
    companylogo:
      "https://cdn.tcsion.com/LX/assets/login_images/IDL_colored-e65a159732c7bd812a0e5cfd8fe809ed.svg",
    date: "Feb 2020 – April 2020",
    desc: "I worked as Python Intern creating backend arichitecture and API endpoints for the project using Django framework.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Xeoscript Technologies",
    companylogo:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ppcdiftfjbg7gmrwbe9g",
    date: "November 2020 – Mar 2020",
    desc: "I worked as Frontend developer. Created fluent and resposnsive frontend designs and integrated API for many Eccomerce and Banking websites.",
  },
  {
    role: "Frontend Developer",
    company: "MYKARE HEALTH",
    companylogo:
      "https://static.startuptalky.com/2022/02/mykare-startup-story-StartupTalky.jpg",
    date: "April 2021 - Oct 2021",
    desc: "I had worked closely with the CPO,CTO & CEO of the company to understand the business and project requirements. Carried out edgecase analysis and calibrated the the development to maximum efficiency.I developed projects from scratch and worked on both App and web frontends including quality assurance.I had took ownership of projects & trained interns.",
    project: "MyPraktice App",
    url: "https://play.google.com/store/apps/details?id=com.mykare.praktice",
  },
  {
    role: "Full stack Developer",
    company: "Byjus - Think & Learn Pvt.Ltd",
    companylogo:
      "https://pbs.twimg.com/media/Es_vWIhUUAMrY3n?format=jpg&name=large",
    date: "October 2021 - January 2023",
    desc: "Worked as a Full stack developer.Implemented projects following agile methodology.Working in a team environment collaborating with security, UI/UX, devops, QA to optimize and scale the product.Responsible for end to end development Including data modelling, schema design and DB management, creating API endpoints & Frontend integration.",
    project:
      "Byjus – Customer Management System, Byjus- wallet (Included receiving and sending transactions, logging all transactions, handling failure cases, cron jobs etc.). Byjus Gift Cards, Byjus onboarding form for ngos (uploading documents, integrating digital signature etc). Byjus Parent Dashboard",
    url: "https://one-view.byjus.com",
  },
];

export const projects = [
  {
    name: "MyPraktice App",
    desc: "ReactNative App for clinics to manage appointmenmts.",
    github: "https://github.com/1waseem100/developer-portfolio",
    link: "https://play.google.com/store/apps/details?id=com.mykare.praktice",
  },
  {
    name: "BYJUS Parent Dashboard",
    desc: "Dashboard for parents to acess details of the students.",
    link: "https://one-view.byjus.com",
  },
  {
    name: "R3 Factory - Eco-warrior Portal",
    desc: "Eccomerce + employee dashboard for buying, selling and servicing pre-owned electrical gadgets (React js)",
    link: "https://ecowarrior.r3factory.com",
  },
  {
    name: "Amazon Clone",
    desc: "Amazon clone which have basic ecommerce flow + firebase authentication services",
    github: "https://github.com/Waseemarshad97/amazonclone",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Waseem Arshad",
  description: "A passionate Full Stack Web Developer and Project Manager.",
  author: "Waseem Arshad",
  image:
    "https://avatars.githubusercontent.com/u/53007599?s=400&u=cb4dc8745a72e8b8f646c7fa051f93a304529e5e&v=4",
  url: "https://developer-portfolio-1waseem100.vercel.app",
  keywords: [
    "waseem",
    "Waseem Arshad",
    "@1waseem100",
    "1waseem100",
    "Portfolio",
    "waseem Portfolio ",
    "Waseem Arshad Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Node js",
    "React js",
  ],
};
