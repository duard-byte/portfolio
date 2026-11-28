export const role = {
  software: {
    targetRole: "Currently Studying BS Information Technology",
    resume: "",
  },
  embedded: {
    targetRole: "Currently Studying BS Information Technology",
    resume: "",
  },
};

export const about: string[] = [
  "I am dependable and willing to learn new tasks. I take responsibility for my work, complete assignments carefully, and use feedback to improve. I work well with others and am ready to support the team wherever needed"
];

type Experience = {
  date: number;
  work: string;
  company: string | null;
};

export const experiences: Experience[] = [
  // {
  //   // date: 2026,
  //   // work: "IoT / AI Developer Intern",
  //   // company: "SATEZO OPC",
  // },
  // {
  //   // date: 2025,
  //   // work: "Freelance Developer",
  //   // company: "Self-employed",
  // },
  // {
  //   // date: 2023,
  //   // work: " Django + React Developer",
  //   // company: "Personal projects",
  // },
  // {
  //   date: 2022,
  //   work: "Started Programming",
  //   company: "Learning fundamentals",
  // },
];

type Education = {
  year: string;
  program: string;
  school: string | null;
};

export const education: Education[] = [
  {
    year: "2023 - 2027",
    program: "Bachelor of Science in Information Technology",
    school: "Pampanga State University",
  },
  {
    year: "2021 - 2023",
    program: "TVL - ICT ",
    school: "Tarik Suliman High School",
  },
];

type TechStackItem = {
  icon: string;
  language: string;
};

type TechStackCategory = {
  category: string;
  items: TechStackItem[];
};

export const technologies: TechStackCategory[] = [
  {
    category: "Backend Development",
    items: [
    
      //{ icon: "/icons/backend/nodejs.png", language: "Node.js" },
     // { icon: "/icons/backend/django.png", language: "Django" },
      //{ icon: "/icons/backend/fastapi.png", language: "FastAPI" },
     // { icon: "/icons/backend/nestjs.png", language: "NestJs" },
      { icon: "/icons/backend/express.png", language: "Express" },
      { icon: "/icons/backend/postgresql.png", language: "PostgreSQL" },
     // { icon: "/icons/backend/sqlite.png", language: "SQLite" },
      //{ icon: "/icons/backend/redis.png", language: "Redis" },
      //{ icon: "/icons/backend/mongodb.png", language: "MongoDB" },
     // { icon: "/icons/backend/typeorm.png", language: "TypeORM" },
      //{ icon: "/icons/backend/drizzle.png", language: "Drizzle" },
      { icon: "/icons/backend/prisma.png", language: "Prisma" },
      { icon: "/icons/backend/zod.png", language: "Zod" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { icon: "/icons/frontend/javascript.png", language: "JavaScript" },
      { icon: "/icons/frontend/nextjs-dev.png", language: "Next.js" },
      { icon: "/icons/frontend/tailwindcss-dev.png", language: "Tailwind CSS" },
    ],
  },
  

  {
    category: "Operating System",
    items: [
      { icon: "/icons/os/linux.png", language: "Linux" },
      // { icon: "/icons/os/ubuntu-dev.png", language: "Ubuntu" },
      // { icon: "/icons/os/rpi.png", language: "Raspberry Pi" },
    ],
  },
];

type Certificates = {
  title: string;
  date: string;
  image: string;
  company: string;
  logo: string;
  link: string;
};
export const certificates: Certificates[] = [
  // Recent Certificates
  {
    title: "Cloud Computing Fundamentals",
    date: "2026",
    company: "IBM SkillsBuild",
    logo: "/company/ibm.png",
    image: "/",
    link: "/",
  },
]
 
type Projects = {
  name: string;
  description: string;
  language: string[];
  link?: string;
  live?: string;
};
export const projects: Projects[] = [
  {
    name: "Web Based Regulation and Permitting System With Optimized Field Vehicle Scheduling and Monitoring",
    description:
      "Digitalization of application process for regulation and permits in DENR PENRO Pampanga and integration of digital vehicle scheduling and monitoring system for field operations.",
    language: [
      "Express",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Zod",
      "Prisma",
    ],

  }
];


type Socials = {
  name: string;
  icon: string;
  link: string;
};

export const socials: Socials[] = [
  {
    name: "facebook",
    icon: "/socials/facebook.png",
    link: "https://www.facebook.com/johneduard.jose.14",
  },
  {
    name: "instagram",
    icon: "/socials/insta.png",
    link: "https://www.instagram.com/ofc.ed",
  },
  {
    name: "github",
    icon: "/icons/dev/github-rounded.png",
    link: "https://github.com/duard-byte",
  }
  // {
  //   name: "linkedin",
  //   icon: "/socials/linkedin.png",
  //   link: "https://www.linkedin.com/in/raven-magbanua-baa77439b/",
  // },
  // {
  //   name: "discord",
  //   icon: "/socials/discord.png",
  //   link: "https://discord.com/users/1030796162988511292",
 // },
];

export const contact =
  "mailto:johneduard348@gmail.com?subject=Let's%20Connect";

export const resume = "";

export const context = {
  profile: {
    name: "John Eduard G. Jose",
  targetRole: "BS Information Technology Student",
  },
  about,
  experiences,
  education,
  technologies,
  projects,
  certificates,
  contact,
};
