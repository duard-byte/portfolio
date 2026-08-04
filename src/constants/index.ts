export const role = {
  software: {
    targetRole: "Associate Software Engineer",
    resume: "/resume/Raven_Magbanua_Resume2026.pdf",
  },
  embedded: {
    targetRole: "Associate Embedded Systems Engineer",
    resume: "/resume/Raven_Magbanua_Embedded_Resume2026.pdf",
  },
};

export const about: string[] = [
  "I am a Full Stack Developer specializing in REST API development. I graduated with a Bachelor of Science in Computer Engineering from Pampanga State University. My goal is to create applications that solve real world problems while maintaining clean and scalable code.",
  " During my internship as an IoT/AI Developer at SATEZO OPC, I gained hands on experience developing IoT and AI solutions while working with both software and embedded systems.",
  "My experience includes developing responsive web applications, designing REST APIs, and working with relational and NoSQL databases. I am currently seeking opportunities as an Associate Software Engineer where I can continue learning from experienced developers and contribute to building secure, scalable, and maintainable software.",
];

type Experience = {
  date: number;
  work: string;
  company: string | null;
};

export const experiences: Experience[] = [
  {
    date: 2026,
    work: "IoT / AI Developer Intern",
    company: "SATEZO OPC",
  },
  {
    date: 2025,
    work: "Freelance Developer",
    company: "Self-employed",
  },
  {
    date: 2023,
    work: " Django + React Developer",
    company: "Personal projects",
  },
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
    year: "2022 - 2026",
    program: "Bachelor of Science in Computer Engineering",
    school: "Pampanga State University",
  },
  {
    year: "2018 - 2020",
    program: "Humanities and Social Sciences",
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
      { icon: "/icons/backend/python-dev.png", language: "Python" },
      { icon: "/icons/backend/nodejs-dev.png", language: "Node.js" },
      { icon: "/icons/backend/django.png", language: "Django" },
      { icon: "/icons/backend/expressjs-dark.png", language: "Express" },
      { icon: "/icons/backend/postgresql-dev.png", language: "PostgreSQL" },
      { icon: "/icons/backend/sqlite.png", language: "SQLite" },
      { icon: "/icons/backend/redis-dev.png", language: "Redis" },
      { icon: "/icons/backend/mongodb.png", language: "MongoDB" },
      { icon: "/icons/backend/prisma.png", language: "Prisma" },
      { icon: "/icons/backend/drizzle.png", language: "Drizzle" },
      { icon: "/icons/backend/zod.png", language: "Zod" },
      { icon: "/icons/backend/aws.png", language: "AWS" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { icon: "/icons/frontend/javascript.png", language: "JavaScript" },
      { icon: "/icons/frontend/typescript.png", language: "TypeScript" },
      { icon: "/icons/frontend/react-dev.png", language: "React" },
      { icon: "/icons/frontend/nextjs-dev.png", language: "Next.js" },
      { icon: "/icons/frontend/tailwindcss-dev.png", language: "Tailwind CSS" },
      { icon: "/icons/frontend/bootstrap.png", language: "Bootstrap" },
      { icon: "/icons/frontend/vitejs.png", language: "Vite" },
      { icon: "/icons/frontend/zustand-dev.png", language: "Zustand" },
      { icon: "/icons/frontend/redux-dev.png", language: "Redux" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { icon: "/icons/ml/tensorflow-dev.png", language: "Tensorflow" },
      { icon: "/icons/ml/ultralytics.png", language: "Ultralytics" },
      { icon: "/icons/ml/pytorch-dev.png", language: "PyTorch" },
      { icon: "/icons/ml/scikitlearn-dev.png", language: "Scikit-learn" },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { icon: "/icons/mobile/androidstudio.png", language: "Android Studio" },
      { icon: "/icons/mobile/flutter.png", language: "Flutter" },
      { icon: "/icons/mobile/dart.png", language: "Dart" },
      { icon: "/icons/mobile/kivy-dev.png", language: "Kivy" },
    ],
  },
  {
    category: "Embedded System",
    items: [
      { icon: "/icons/embedded/uno.png", language: "Arduino" },
      { icon: "/icons/embedded/cpp.png", language: "C++" },
      { icon: "/icons/embedded/embeddedc.png", language: "Embedded C" },
      { icon: "/icons/embedded/micropython.png", language: "Micropython" },
    ],
  },
  {
    category: "Operating System",
    items: [
      { icon: "/icons/os/linux.png", language: "Linux" },
      { icon: "/icons/os/ubuntu-dev.png", language: "Ubuntu" },
      { icon: "/icons/os/rpi.png", language: "Raspberry Pi" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { icon: "/icons/dev/git.png", language: "Git" },
      { icon: "/icons/dev/github-rounded.png", language: "Github" },
      { icon: "/icons/dev/vscode.png", language: "VSCode" },
      { icon: "/icons/dev/anaconda.png", language: "Anaconda" },
      { icon: "/icons/dev/jupyter.png", language: "Jupiter Notebook" },
      { icon: "/icons/dev/bruno.png", language: "Bruno" },
      { icon: "/icons/dev/postman.png", language: "Postman" },
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
    title: "MRSP Robotics Competition 2nd Runner-up",
    date: "2025",
    company: "MRSP Pampanga Student Chapter",
    logo: "/company/mrsp.jpg",
    image: "/",
    link: "/",
  },
  {
    title: "Exploring Natural Language Processing (NLP) using Deep Learning",
    date: "2026",
    company: "Analytics Vidhya",
    logo: "/company/analytics-vidhya.png",
    image: "/certificates/vidhya/vidhya1.png",
    link: "https://www.analyticsvidhya.com",
  },
  {
    title: "Javascript Essentials 1",
    date: "2026",
    company: "Cisco Networking Academy",
    logo: "/company/cisco.png",
    image: "/certificates/cisco/cisco2.png",
    link: "https://www.netacad.com/",
  },
  // Analytics Vidhya
  {
    title: "Getting Started with Large Language Models",
    date: "2026",
    company: "Analytics Vidhya",
    logo: "/company/analytics-vidhya.png",
    image: "/certificates/vidhya/vidhya2.png",
    link: "https://www.analyticsvidhya.com",
  },
  {
    title: "Model Deployment using FastApi",
    date: "2026",
    company: "Analytics Vidhya",
    logo: "/company/analytics-vidhya.png",
    image: "/certificates/vidhya/vidhya3.png",
    link: "https://www.analyticsvidhya.com",
  },
  {
    title: "Foundation of Data Science",
    date: "2026",
    company: "Analytics Vidhya",
    logo: "/company/analytics-vidhya.png",
    image: "/certificates/vidhya/vidhya4.png",
    link: "https://www.analyticsvidhya.com",
  },

  // Cisco
  {
    title: "Python Essentials 1",
    date: "2026",
    company: "Cisco Networking Academy",
    logo: "/company/cisco.png",
    link: "https://www.netacad.com/",
    image: "/certificates/cisco/cisco1.png",
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    date: "2025",
    company: "Cisco Networking Academy",
    logo: "/company/cisco.png",
    link: "https://www.netacad.com/",
    image: "/certificates/cisco/cisco3.png",
  },
  {
    title: "Networking Basics",
    date: "2025",
    company: "Cisco Networking Academy",
    logo: "/company/cisco.png",
    link: "https://www.netacad.com/",
    image: "/certificates/cisco/cisco4.png",
  },

  // DICT
  {
    title: "Internet of Things (IoT) in Smart Cities",
    date: "2025",
    company: "Departement of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict1.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Data Privacy Awareness",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict2.png",
    link: "https://dict.gov.ph",
  },
  {
    title:
      "Serverless Architecture for enhance Public Service Delivery: Use Cases for Government Agency",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict3.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Protecting Intellectual Property in the Digital Age",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict4.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Introduction to Cybersecurity",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict5.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Introduction to Modern AI",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict6.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Information Session on Digital Citizenship",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict7.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "AI-Powered Future: Mastering Prompt Engineering in Generative AI",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict8.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Guardians of the NET: Youth Cyber Defender",
    date: "2022",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict9.png",
    link: "https://dict.gov.ph",
  },
  {
    title:
      "What's Behind the Cloud? A Webinar on Big Data and Use Cases The Industry",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict10-a.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Internet of Things(IoT) in Smart Cities",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict11.png",
    link: "https://dict.gov.ph",
  },
  {
    title: "Learning ChatGPT for Government Employeees",
    date: "2025",
    company: "Department of Information and Communication Technology",
    logo: "/",
    image: "/certificates/dict/dict12.png",
    link: "https://dict.gov.ph",
  },

  // ICpEP
  {
    title: "AI and Prompt Engineering in Educational Settings",
    date: "2025",
    company: "Institute of Computer Engineers of the Philippines",
    logo: "/",
    image: "/certificates/icpep/icpep1.png",
    link: "https://icpepprofessionalgroup.wordpress.com",
  },
  {
    title: "Next-Gen Tech Talks: IoT Applications and Data-Driven Governance",
    date: "2025",
    company: "Institute of Computer Engineers of the Philippines",
    logo: "/",
    image: "/certificates/icpep/icpep2.png",
    link: "https://icpepprofessionalgroup.wordpress.com",
  },
  {
    title: "Formulating Competitive Marketing Strategies in the Digital Age",
    date: "2025",
    company: "Institute of Computer Engineers of the Philippines",
    logo: "/",
    image: "/certificates/icpep/icpep3.png",
    link: "https://icpepprofessionalgroup.wordpress.com",
  },

  // PSU
  {
    title:
      "Navigating Career Path in Computer Engineering: From Graduation to Professional Success",
    date: "2024",
    company: "Pampanga State University",
    logo: "/",
    image: "/certificates/psu/psu1.png",
    link: "https://pampangastateu.edu.ph",
  },
  {
    title:
      "ROBOLUTION: Transforming Lives and Practices through the Application of Robotics",
    date: "2022",
    company: "Pampanga State University",
    logo: "/",
    image: "/certificates/psu/psu3.png",
    link: "https://pampangastateu.edu.ph",
  },
  {
    title:
      "CRACK THE CODE: Diving Deep Into Enterprise-Level of Computer Networking",
    date: "2022",
    company: "Pampanga State University",
    logo: "/",
    image: "/certificates/psu/psu2.png",
    link: "https://pampangastateu.edu.ph",
  },

  // PSITE
  {
    title:
      "Elevate Your UI/UX Expertise: A Comprehensive, Hands-On Learning Webinar Featuring Figma",
    date: "2024",
    company: "Philippine Society of Information Technology Educators",
    logo: "/",
    image: "/certificates/psite/psite1.png",
    link: "https://psite.org",
  },
  // UST
  {
    title:
      "Networking It Out: Unleashing the Power of Network and Cloud Security",
    date: "2023",
    company: "University of Santo Tomas",
    logo: "/",
    image: "/certificates/ust/ust1.png",
    link: "https://www.ust.edu.ph",
  },
];

type Projects = {
  name: string;
  description: string;
  language: string[];
  link: string;
  live: string | null;
};
export const projects: Projects[] = [
  {
    name: "Resume.io",
    description:
      "An ATS-friendly online resume builder that allows users to create professional resumes and generate them as PDF files.",
    language: ["Next.js", "ReactPDF"],
    link: "https://github.com/pravennn08/Resume.io",
    live: "",
  },
  {
    name: "A.S.A.P Lagundi",
    description:
      "Real-time incident reporting system designed for Barangay Lagundi to record, manage, and monitor reported incidents.",
    language: [
      "Express",
      "React",
      "Prisma",
      "Node.js",
      "PostreSQL",
      "Neon",
      "Socket.io",
    ],
    link: "https://github.com/pravennn08/ASAP-Lagundii",
    live: "",
  },
  {
    name: "Academe.io",
    description:
      "School management API for managing students, attendance, exams, classes, lessons, subjects, teachers, parents, and school events.",
    language: ["Django", "PostgreSQL", "Redis", "Neon", "Docker"],
    link: "https://github.com/pravennn08/Academe.io-API",
    live: "",
  },
  {
    name: "Emil Glass and Aluminum Works",
    description:
      "A service appointment booking website that allows customers to schedule consultations and request glass and aluminum services online.",
    language: ["Next.js", "Zod", "Shadcn", "EmailJS"],
    link: "https://github.com/pravennn08/Emil_glass_and_aluminum_works",
    live: "https://emil-glass-and-aluminum-works.vercel.app/",
  },
];

type Gallery = {
  caption: string;
  image: string;
};
export const gallery: Gallery[] = [
  { caption: "Braille", image: "/gallery/freelance/freel1.jpg" },
  {
    caption: "Hirap mo i-calibrate load cell.",
    image: "/gallery/freelance/freel2.jpg",
  },
  {
    caption: "OJT Days",
    image: "/gallery/freelance/freel3.jpg",
  },
  { caption: "Talong Detection", image: "/gallery/ml/ml1.jpeg" },
  { caption: "Thesis YOLO training", image: "/gallery/ml/ml2.png" },
  {
    caption: "Binary Search...",
    image: "/gallery/programming/prog1.jpg",
  },
  {
    caption: "Quick Sort(favorite ⅚)",
    image: "/gallery/programming/prog2.jpeg",
  },
  {
    caption: "Let's go OOP in Arduino",
    image: "/gallery/programming/prog3.jpeg",
  },
  { caption: "PSU na di gumana.", image: "/gallery/projects/proj1.jpg" },
  { caption: "Routings yan?", image: "/gallery/projects/proj2.jpg" },
  {
    caption: "1, 2, 3, go! Kanya kanya na...",
    image: "/gallery/projects/proj3.jpg",
  },
  {
    caption: "DIY Arduino Uno",
    image: "/gallery/projects/proj4.jpg",
  },
  {
    caption: "Wag tignan ang naka print sa taas HAHAHHAHA",
    image: "/gallery/projects/proj5.jpg",
  },
  {
    caption: "Arduino with wifi?",
    image: "/gallery/projects/proj6.jpg",
  },
  {
    caption: "FEU!",
    image: "/gallery/robotics/robotics1.jpg",
  },
  {
    caption: "Malinis ba yang controller?",
    image: "/gallery/robotics/robotics2.jpg",
  },
  {
    caption: "Testing?",
    image: "/gallery/robotics/robotics3.png",
  },
  {
    caption: "Yung claw nagdala",
    image: "/gallery/robotics/robotics4.png",
  },
  {
    caption: "Customtkinter only",
    image: "/gallery/thesis/thesis1.jpg",
  },

  {
    caption: "Bikas",
    image: "/gallery/thesis/thesis2.jpg",
  },
  {
    caption: "Rate my cable management hehe",
    image: "/gallery/thesis/thesis3.jpg",
  },
  {
    caption: "Accuracy ba kamo?",
    image: "/gallery/thesis/thesis4.jpg",
  },
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
    link: "https://www.facebook.com/ravewn.08",
  },
  {
    name: "instagram",
    icon: "/socials/insta.png",
    link: "https://www.instagram.com/__pravennn/?hl=en",
  },
  {
    name: "github",
    icon: "/icons/dev/github-rounded.png",
    link: "https://github.com/pravennn08",
  },
  {
    name: "linkedin",
    icon: "/socials/linkedin.png",
    link: "https://www.linkedin.com/in/raven-magbanua-baa77439b/",
  },
  {
    name: "discord",
    icon: "/socials/discord.png",
    link: "https://discord.com/users/1030796162988511292",
  },
];

export const contact =
  "mailto:magbanuaraven08@gmail.com?subject=Let's%20Connect";

export const resume = "resume/Raven_Magbanua_Resume_Ase_2026.pdf";

export const context = {
  profile: {
    name: "Raven Magbanua",
    targetRole: "Associate Software Engineer",
  },
  about,
  experiences,
  education,
  technologies,
  projects,
  certificates,
  contact,
};
