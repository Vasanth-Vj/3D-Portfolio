import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    
  ];
  
  const experiences = [
    {
      title: "SSLC",
      company_name: "NSMVPS Higher Secondary School- Devakottai",
      icon: meta,
      iconBg: "#383E56",
      date: "2016 - 2017",
      points: [
        "I am proud to have completed my 10th standard with an outstanding score of 91%.",
        "Throughout my academic journey, I have consistently demonstrated dedication and passion for learning, reflected in my excellent performance across various subjects",
        "My exceptional academic performance is a testament to my hard work, determination, and intellectual curiosity.",
        "Beyond securing high grades, I actively engage in extracurricular activities, further enhancing my holistic development.",
      ],
    },
    {
      title: "HSC",
      company_name: "NSMVPS Higher Secondary School - Devakottai",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2018 - 2019",
      points: [
        "I am delighted to have completed my 12th standard with a commendable score of 67.8%.",
        " This achievement underscores my dedication and perseverance in the face of academic challenges, highlighting my commitment to continuous improvement and growth.",
        "My academic journey  has equipped me with a versatile skill set and a thirst for knowledge.",
        "While my overall percentage is a testament to my hard work and dedication, it also underscores my resilience in the face of academic rigors. ",
      ],
    },
    {
      title: "B.E Mechatronics",
      company_name: "Suguna College Of Engineering - Coimbatore",
      icon: meta,
      iconBg: "#383E56",
      date: "2019 - 2023",
      points: [
        "I am  successfully completed my Bachelor's degree in the Mechatronics department with an exceptional score of 80%.",
        "This accomplishment reflects my dedication, hard work, and passion for the field of mechatronics, as well as my commitment to academic excellence.",
        "Throughout my undergraduate studies, I have gained a comprehensive understanding of mechatronics, which integrates mechanical, electrical, and computer engineering principles.",
        "I have acquired practical skills in designing, building, and analyzing complex electromechanical systems.",
      ],
    },
    {
      title: "Full stack Developer (MERN)",
      company_name: "GT Software College - Coimbatore",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Jan 2024",
      points: [
        "Successfully completed an internship focused on mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack, a modern and widely used technology stack for building dynamic web applications.",
        "Developed a fully functional e-commerce website from scratch using the MERN stack. ",
        "Created a Todo application using MERN stack, allowing users to efficiently manage their tasks.",
        "Designed and developed a professional portfolio website to showcase skills, projects, and experience.",
        "Developed a calculator application using MERN stack, providing users with a simple yet powerful tool for performing basic arithmetic operations.",
        "Through these projects, I have gained valuable hands-on experience in building full-stack web applications using cutting-edge technologies, honing my skills in frontend and backend development, database management, and project deployment. ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E Commerce Website",
      description:
        "My E-Commerce Website project based on React  with basic layout using html & CSS for good and attractive designs and also I'm using bootstrap framework to avoid more CSS property &  responsive for mobile.In backend, MongoDB used for data handling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.longines.com/en-in/zulu/",
    },
    {
      name: "To-DO App",
      description:
        "Create a modern and responsive to-do application that allows users to manage tasks efficiently. The application will be build using HTML, CSS, React for the frontend, javaScript for functionality, and MongoDB for database storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDb",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Calculator",
      description:
        "Basic Calculator using React and Javascript,Implemented core calculator functionalities such as addition, subtraction, multiplication, and division using JavaScript, ensuring accurate calculations and error handling. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };