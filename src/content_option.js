import profileImg from "./assets/images/image.jpeg";

const logotext = "LAKI";
const meta = {
  title: "Laki Kishor Subba",
  description:
    "Undergraduate student pursuing a Bachelor of Engineering in Information Technology at College of Science and Technology.",
};

const introdata = {
  title: "I’m Laki Kishor Subba",
  animated: {
    first: "I love software development",
    second: "I build modern web apps",
    third: "I'm a DevOps enthusiast",
  },
  description:
    "Undergraduate student pursuing a Bachelor of Engineering in Information Technology at College of Science and Technology. Passionate about continuous learning and modern software technologies.",
  your_img_url: profileImg,
  resume_url: "#", // Add your resume link here
  tagline:
    "Building digital experiences that combine technical excellence with artistic design.",
  techstack: [
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "Ruby on Rails", icon: "SiRubyonrails", color: "#CC0000" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  ],
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I am an Undergraduate student pursuing a Bachelor of Engineering in Information Technology at College of Science and Technology. I have a strong foundation in computer science and software development, with a passion for continuous learning and modern software technologies. My journey includes developing the official college website and interned at SELISE Digital Platforms.",
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
    name: "DevOps",
    value: 70,
  },
];

const services = [
  {
    title: "Software Development",
    description:
      "Building robust and scalable software solutions tailored to user needs, with a focus on clean code and maintainability.",
  },
  {
    title: "Web Development",
    description:
      "Creating responsive and interactive web applications using modern frameworks and CMS like WordPress.",
  },
  {
    title: "System Administration",
    description:
      "Basic DevOps and system management, ensuring applications are deployed and running smoothly.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "CST Official Website - Developed using WordPress and hosted successfully.",
    link: "https://cst.edu.bt",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "Fitness Tracking Application - A mini project to track daily workouts and health metrics.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "Simple Chess Game - A strategic game built with core programming logic.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "Job Portal System - A platform for connecting job seekers with opportunities.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "lakikishor7@gmail.com",
  YOUR_FONE: "+975 77741165",
  description:
    "Based in Thimphu, Bhutan. Feel free to reach out for collaborations or any inquiries.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/laki-kishor-subba-0a97b7294",
  twitter: "https://twitter.com",
  email: "mailto:lakikishor7@gmail.com",
};

const leadership = [
  {
    title: "Class Representative",
    where: "College of Science and Technology",
    description:
      "Coordinated between students and faculty; represented student leadership initiatives.",
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
  "AI & Machine Learning",
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
