import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Nabaraj Magar",
  title: "Hi all, I'm Nabaraj",
  description:
    "A React.js developer with a strong focus on building interactive and high-performance web applications. I specialize in creating dynamic user interfaces using React, and I’m experienced with state management tools like Redux, Context API, and React Hooks. I’m passionate about optimizing performance, integrating APIs, and ensuring seamless, responsive designs. With a keen eye for detail and a commitment to clean, maintainable code, I strive to deliver exceptional user experiences across web platforms.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "nabaraj82",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // email: "mailto:hanzla.tauqeer123@gmail.com",
  linkedin: "https://www.linkedin.com/in/nabaraj-magar-03491a272/",
  github: "https://github.com/nabaraj82",
  // instagram: "https://www.instagram.com/@_nabaraj1",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Frontend/Nodejs Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Nodejs & Express Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Nodejs",
          iconifyTag: "devicon:nodejs-wordmark",
        },
        {
          skillName: "Express",
          iconifyTag: "skill-icons:expressjs-dark",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Material UI",
          iconifyTag: "skill-icons:materialui-light",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Tailwind",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "Redux",
          iconifyTag: "devicon:redux",
        },
        {
          skillName: "Axios",
          iconifyTag: "logos:axios",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "devicon:mongodb-wordmark",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Pokhara University",
    subHeader: "Bachelor of Computer Information System (BCIS)",
    duration: "September 2017 - October 2022",
    desc: "",
    // grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Reactjs Developer",
    company: "Cellcom Pvt. Ltd.",
    companyLogo: "/img/icons/common/cellpay_logo.svg",
    date: "April 2024 - Present",
    desc: "I developed and maintained responsive web applications using React.js, Redux, and React Hooks. I focused on building scalable UI components, integrating RESTful APIs, and optimizing performance. Collaborating with cross-functional teams, I implemented complex features and ensured smooth, seamless experiences across devices.",
  },
  {
    role: "Frontend Developer",
    company: "LalNepal Pvt. Ltd.",
    companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQFJQTfo9lCzPA/company-logo_100_100/company-logo_100_100/0/1681031529529?e=1743638400&v=beta&t=hC7a2GBX0gYRsAVQVGJ0EgTDCSNYXhwlYbfvuuFVTgs",
    date: "October 2021 - March 2024",
    desc: "I developed responsive and interactive web applications using React.js, HTML, CSS, and JavaScript. I collaborated with designers and backend teams to integrate APIs . My focus was on optimizing performance, maintaining cross-browser compatibility, and writing clean, efficient code to deliver high-quality web applications.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Senior IT Officer",
    company: "LalNepal Pvt. Ltd.",
    companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQFJQTfo9lCzPA/company-logo_100_100/company-logo_100_100/0/1681031529529?e=1743638400&v=beta&t=hC7a2GBX0gYRsAVQVGJ0EgTDCSNYXhwlYbfvuuFVTgs",
    date: "October 2021 - March 2024",
    desc: "Align IT strategies with organizational goals to ensure that web and mobile applications meet business objectives. I was responsible for creating comprehensive technical documentation to support the development process and facilitate future updates.I oversee testing to ensure the quality of applications, aslo provide technical support and training to staff.",
  },
  {
    role: "Nodejs Developer",
    company: "Cellcom Pvt. Ltd.",
    companyLogo: "/img/icons/common/cellpay_logo.svg",
    date: "April 2024 - Present",
    desc: "As a Node.js/Express Developer at Cellcom Pvt. Ltd. , I built and maintained a ticketing system using Node.js, Express, and MongoDB. I developed RESTful APIs for ticket management, optimized database queries, and ensured seamless integration with the front-end. My focus was on performance, scalability, and user authentication.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Ticketing System",
    desc: "The Ticketing System is a web application developed with Node.js, Express, and MongoDB for the back-end, and React for the front-end. It uses JWT for secure user authentication, enabling users to create, manage, and track support tickets. Administrators can efficiently resolve issues through a user-friendly interface.",
    github: "https://github.com/nabaraj82/ticketing-nodejs",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Nabaraj Magar",
  description: greetings.description,
  author: "Nabaraj Magar",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  keywords: [
    "Nabaraj",
    "Nabaraj magar",
    "@_nabaraj1",
    "_nabaraj1",
    "Portfolio",
    "Nabaraj Portfolio ",
    "Nabaraj Magar Portfolio",
  ],
};
