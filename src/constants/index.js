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
    
    tailwind,
    mysql,
    nodejs,
    mongodb,
    git,
    
    cpp,
    docker,
    cu,
    python,
    tripguide,
    pizza,
    xam,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
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
    {
      name: "Python",
      icon: python,
    },
    {
      name:"C++",
      icon: cpp
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "My Sql",
      icon:mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Team Leader (Software Engineering Project)",
      company_name: "University of Calcutta",
      icon: cu, // Replace with actual icon variable
      iconBg: "#383E56",
      date: "November 2024 - December 2024",
      points: [
        "Led a 4-member team to deliver high-quality software engineering projects.",
        "Iteratively improved designs based on stakeholder feedback.",
        "Conducted architectural impact analysis for system changes.",
      ],
    }
    
  ];
  

  
  const projects = [
   
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Xam360",
      description:
        "A full-stack MERN application designed for seamless examination management, enabling students and teachers to manage exams efficiently.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: xam, // Replace with actual image variable
      source_code_link: "https://github.com/", // Replace with actual repo link
    },
    
    {
      name: "YourPizza",
      description:
        "A feature-rich pizza delivery web app built with the MERN stack. Includes an admin panel for pizza management, order tracking, and real-time status updates. Integrated with Stripe for secure payment processing.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        
       
      ],
      image: pizza, // Replace with actual image variable
      source_code_link: "https://github.com/", // Replace with actual repo link
    },
    
  ];
  
  export { services, technologies, experiences,  projects };