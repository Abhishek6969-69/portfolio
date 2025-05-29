import img1 from '../public2/b1.svg'
import reIcon from '../public2/re.svg';
import tailIcon from '../public2/tail.svg';
import tsIcon from '../public2/ts.svg';
import threeIcon from '../public2/three.svg';
import fmIcon from '../public2/fm.svg';
import nextIcon from '../public2/next.svg';
import streamIcon from '../public2/stream.svg';
import cIcon from '../public2/c.svg';
// import gsapIcon from '../public2/gsap.svg';
import git from '../public2/git.svg'
import X from"../public2/twit.svg"
import Linkedin from "../public2/link.svg"
import p1 from '../public2/p1.png'
import p2 from "../public2/p2.png"
import p3 from "../public2/p3.png"
// import p4 from "../public2/p4.svg"
export const navItems = [
  { name: "Home", link: "#Home" },
  { name: "Skills", link: "#Skills" },
  { name: "Projects", link: "#Projects" },
  { name: "Contacts", link: "#Contacts" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: {img1},
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2  ",
    imgClassName: "object-cover object-center ",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "object-cover object-center   ",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: {img2},
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const Projects = [
  {
    id: 1,
    title: 'Coinpay:Payment Wallet',
    des: 'Developed a scalable full-stack wallet using Turborepo for efficient monorepo management, enabling secure peer to peer transactions and real-time tracking.Designed',
    img: {p1}, // Fixed: Use p1 directly
    iconLists: [nextIcon, tailIcon, tsIcon, threeIcon, fmIcon], // Use imported modules
    link: 'https://github.com/adrianhajdin?tab=repositories',
    animation: '/animations/project1.json', // Lottie animation
  },
  {
    id: 2,
    title: 'Blogify-Blogging Platform:',
    des: 'Developed a user-friendly blogging website with features to create, delete, and manage blogs, using React.js and React Quill for a seamless writing experience.',
    img: {p2},
    iconLists: [nextIcon, tailIcon, tsIcon, streamIcon, cIcon],
    link: 'https://github.com/adrianhajdin/zoom-clone',
    animation: '/animations/project2.json',
  },
  {
    id: 3,
    title: 'Personal Finance Visualizer',
    des: 'Visual Finance Manager is a modern, responsive web application that helps users track, visualize, and manage their personal finances efficiently.',
    img: {p3},
    iconLists: [reIcon, tailIcon, tsIcon, threeIcon, cIcon],
    link: 'https://github.com/adrianhajdin/ai_saas_app',
    animation: '/animations/project3.json',
  },
  // {
  //   id: 4,
  //   title: 'Animated Apple iPhone 3D Website',
  //   des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
  //   img: {p4},
  //   iconLists: [nextIcon, tailIcon, tsIcon, threeIcon, gsapIcon],
  //   link: 'https://github.com/adrianhajdin/iphone',
  //   animation: '/animations/project4.json',
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: {git},
    link:"https://github.com/Abhishek6969-69"
  },
  {
    id: 2,
    img: {X},
    link:"https://x.com/Abhishekya6996?t=JQOne57qxljq8a9l5w8aSg&s=09"

  },
  {
    id: 3,
    img: {Linkedin},
    link:"https://linkedin.com/in/abhishek-yadav-2a307a25b"
  },
];

// Add this outside the component (top of the file or in a separate file)
 export const techStacks = [
  {
    category: [
      { name: "HTML", icon: "https://icongr.am/devicon/html5-original.svg?size=148&color=currentColor" },
      { name: "CSS", icon: "https://icongr.am/devicon/css3-original.svg?size=111&color=currentColorhttps://icongr.am/devicon/css3-original.svg?size=148&color=currentColor" },
      { name: "Javascript", icon: "https://icongr.am/devicon/javascript-original.svg?size=148&color=currentColor" },
     
    ],
  },
  {
    category: [
      { name: "React.js", icon: "https://icongr.am/devicon/react-original.svg?size=111&color=currentColor" },
      { name: "Next.js", icon: "https://icongr.am/devicon/devicon-plain.svg?size=111&color=currentColor" },
      { name: "TypeScript", icon: "https://icongr.am/devicon/typescript-plain.svg?size=111&color=currentColor" }, // e.g. icon: typescriptimg
     
    ],
  },
  {
    category: [
      { name: "Redux", icon: "https://icongr.am/devicon/devicon-plain.svg?size=111&color=currentColor" },
      { name: "Node.js", icon: "https://icongr.am/devicon/devicon-plain.svg?size=111&color=currentColor" },
      { name: "Express.js", icon: "https://icongr.am/devicon/ie10-original.svg?size=148&color=ba781c" },
     
    
    ],
  },
  {
    category: [
      { name: "MongoDB", icon: "https://icongr.am/devicon/mongodb-original-wordmark.svg?size=111&color=currentColor" },
      { name: "Hono", icon: "https://icongr.am/devicon/devicon-plain.svg?size=111&color=currentColor" },
      { name: "Prisma", icon: "https://icongr.am/devicon/devicon-plain.svg?size=111&color=currentColor" },
    
     
    ],
  },

  {
    category: [
      { name: "Git", icon: "https://icongr.am/devicon/git-original.svg?size=148&color=currentColor" },
      { name: "GitHub", icon: "https://icongr.am/devicon/github-original.svg?size=148&color=ba781c" },
      { name: "PostgreSQL", icon: "https://icongr.am/devicon/postgresql-original.svg?size=111&color=currentColor" },
    
    ],
  },
  {
    category: [
      { name: "Docker", icon: "https://icongr.am/devicon/docker-original.svg?size=148&color=ba781c" },
      { name: "Monorepo", icon: "https://icongr.am/devicon/devicon-plain.svg?size=148&color=ba781c" },
      { name: "Postman", icon: "https://icongr.am/devicon/devicon-plain.svg?size=148&color=ba781c" },
     
    ],
  
 
  },
];
