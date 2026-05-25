import profileImg from "./assets/images/image.jpeg";
import resumePDF from "./assets/images/LakiKishorSubba_Resume.pdf";

const logotext = "LAKI";
const meta = {
  title: "Laki Kishor Subba",
  description:
    "Undergraduate student pursuing a Bachelor of Engineering in Information Technology at College of Science and Technology.",
};

const introdata = {
  title: "I’m Laki Kishor Subba",
  description:
    "Undergraduate student pursuing a Bachelor of Engineering in Information Technology (BE IT) with a strong foundation in computer science and software development. Passionate about software development and dedicated to continuous learning in fast-paced technical landscapes.",
  your_img_url: profileImg,
  resume_url: resumePDF,
  tagline:
    "Building digital experiences that combine technical excellence with artistic design.",
  techstack: [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Ruby", icon: "SiRuby", color: "#CC342D" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "Ruby on Rails", icon: "SiRubyonrails", color: "#CC0000" },
    { name: "DevOps", icon: "SiDocker", color: "#2496ED" },
    { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
  ],
};

const dataabout = {
  title: "About Me",
  aboutme:
    "Undergraduate student pursuing a Bachelor of Engineering in Information Technology (BE IT) with a strong foundation in computer science and software development. Passionate about software development and dedicated to continuous learning in fast-paced technical landscapes.",
};
const worktimeline = [
  {
    jobtitle: "Software Development Intern",
    where: "SELISE Digital Platforms",
    date: "12/2025 – Present",
  },
  {
    jobtitle: "CST Website Developer",
    where: "College of Science and Technology",
    date: "07/2024 – 07/2025",
  },
  {
    jobtitle: "Bachelor of Engineering in IT",
    where: "College of Science and Technology",
    date: "2022 – Present",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Ruby",
    value: 85,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "Ruby on Rails",
    value: 80,
  },
  {
    name: "Git & GitHub",
    value: 95,
  },
  {
    name: "REST API",
    value: 80,
  },
  {
    name: "GraphQL",
    value: 75,
  },
  {
    name: "DevOps Basics",
    value: 70,
  },
];

const services = [
  {
    title: "Software Development",
    description:
      "Developing SELISE Club and gaining practical software development experience during internship at SELISE Bhutan.",
  },
  {
    title: "Web Development",
    description:
      "Developed College of Science and Technology’s website using WordPress, gaining practical web development skills.",
  },
  {
    title: "System Administration",
    description:
      "Relevant coursework and hands-on experience in DevOps basics and system administration.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "CST Website - Developed a College of Science and Technology’s website using WordPress and successfully hosted.",
    link: "https://cst.edu.bt",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "Software development mini projects, including a fitness tracking application, a simple chess game, and a job portal.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "SELISE Blocks - Contributing to digital platforms and gaining practical experience.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "lakikishor7@gmail.com",
  YOUR_FONE: "+975 77741165",
  description:
    "Thimphu, Bhutan. Feel free to reach out for collaborations or any inquiries.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/laki-kishorsubba-0a97b7294",
  linkedin: "https://linkedin.com/in/laki-kishor-subba0a97b7294",
  email: "mailto:lakikishor7@gmail.com",
};

const leadership = [
  {
    title: "Class Representative",
    where: "College of Science and Technology",
    description:
      "Represented as a student leader of the class and coordinated between students and the college faculty (2022 - present).",
  },
];

const coursework = [
  "Object-Oriented Programming",
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Software Engineering",
  "Operating Systems",
  "Computer Networks",
  "Internet of Things (IoT)",
  "AI and Machine learning",
  "DevOps Basics",
  "System Administration",
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  leadership,
  coursework,
};

