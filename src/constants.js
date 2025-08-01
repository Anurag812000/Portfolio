// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import AwsLogo from './assets/tech_logo/aws.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Experience Section Logo's
import devtown from './assets/company_logo/download.png';
import nelumbus from './assets/company_logo/nelumbus.png';
import shapeai from './assets/company_logo/shapeai.jpg';

// Education Section Logo's
import itm from './assets/education_logo/itm.png';
import sri from './assets/education_logo/sri.png';
import kkr from './assets/education_logo/kkr.png';

// Project Section Logo's
import potatodis from './assets/work_logo/potato.png';
import customerchurn from './assets/work_logo/churn.png';
import student from './assets/work_logo/studentsys.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Aws', logo: AwsLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: devtown,
      role: "Machine Learning Intern",
      company: "DevTown",
      date: "June 2022 - September 2022",
      desc: "Developed a CNN-based deep learning model using TensorFlow to classify potato leaf diseases. Enhanced training with data augmentation and the tf.data pipeline. Served the model via FastAPI and optimized it with TensorFlow Lite for edge devices. Deployed full-stack web and mobile apps on GCP.",
      skills: [
        "CNN","data augmentation",
        "quantization", 
        "React JS",
         "Google Cloud Platform (GCP)",
        // "HTML",
        // "CSS",
        // "JavaScript",
        // "React JS",
        // "TypeScript",
        // "Node JS",
        // "Tailwind CSS",
        // "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
    {
      id: 1,
      img: nelumbus,
      role: "Software Development Intern",
      company: "Nelumbus Technology",
      date: "June 2022 - August 2022",
      desc: "Built a comprehensive Student Management System leveraging HTML, CSS, Django, and REST APIs to streamline academic operations. Integrated MySQL and MongoDB for seamless and efficient data handling across relational and non-relational structures. Delivered a responsive and user-friendly web interface tailored for educational institutions.",
      skills: [
        "HTML",
        "CSS",
        "Django",
        // "Tailwind CSS",
        "RESTAPI",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      id: 2,
      img: shapeai,
      role: "Data Analyst Intern",
      company: "ShapeAi",
      date: "September 2022 - December 2022",
      desc: "Implemented supervised machine learning techniques on historical customer data to predict churn. Crafted meaningful features and leveraged models like Logistic Regression and XGBoost for high accuracy. Evaluated performance using precision and recall, delivering insights that guided effective retention strategies.Let me know if you'd like it tuned further for a resume, a project showcase, or a blog write-up!",
      skills: ["Logistic Regression",
        "Decision Trees",
        "Matplotlib",
        "Seaborn",
        "XGBoost",
        // "HTML",
        // "CSS",
        // "Javascript",
        // "Bootstrap",
        // "Figma",
        // "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: itm,
      school: "ITM University Gwalior",
      date: "June 2019 - July 2023",
      grade: "8.02 CGPA",
      desc: "I have completed my B-Tech degree (CSE) in Computer Science Engg. from Itm University, Gwalior. During my time at ITM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Database Management Systems, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Itm University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Computer Science Engineering specialization with data science in machine learning",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    {
      id: 2,
      img: sri,
      school: "Sri Chaitanya Junior College ,Vijayawada",
      date: "Fab 2018 - Apr 2019",
      grade: "9.09 CGPA",
      desc: "I completed my class 12 education from Sri Chaitanya Junior College ,Vijayawada, under the AP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "AP(XII) - PCM",
    },
    {
      id: 3,
      img: kkr,
      school: "KKr's Gowtham International Schoool,Vijayawada",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from KKr's Gowtham International Schoool,Vijayawada, under the CBSE board, where I studied Science.",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Potato Disease Classification",
      description:
        "Developed a CNN-based deep learning model using TensorFlow to classify potato leaf diseases. Enhanced training with data augmentation and the tf.data pipeline. Served the model via FastAPI and optimized it with TensorFlow Lite for edge devices. Deployed full-stack web and mobile apps on GCP.",
      image: potatodis,
      tags: ["CNN","data augmentation",
        "quantization", 
        "React JS",
         "Google Cloud Platform (GCP)"],
      github: "https://github.com/Anurag812000/potato-plant-diseases-using-CNN-",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Customer Churn Prediction Using Machine Learning",
      description:
        "Implemented supervised machine learning techniques on historical customer data to predict churn. Crafted meaningful features and leveraged models like Logistic Regression and XGBoost for high accuracy. Evaluated performance using precision and recall, delivering insights that guided effective retention strategies.Let me know if you'd like it tuned further for a resume, a project showcase, or a blog write-up!",
      image: customerchurn,
      tags: ["Logistic Regression",
        "Decision Trees",
        "Matplotlib",
        "Seaborn",
        "XGBoost",],
      github: "https://github.com/Anurag812000/Customer-Churn-Prediction-Using-Machine-Learning",
      webapp: "https://csprep.netlify.app/",
    },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    {
      id: 3,
      title: "Student Management System",
      description:
        "Built a comprehensive Student Management System leveraging HTML, CSS, Django, and REST APIs to streamline academic operations. Integrated MySQL and MongoDB for seamless and efficient data handling across relational and non-relational structures. Delivered a responsive and user-friendly web interface tailored for educational institutions.",
      image: student,
      tags: ["HTML",
        "CSS",
        "Django",
        // "Tailwind CSS",
        "RESTAPI",
        "MongoDB",
        "MySQL",],
      github: "https://github.com/Anurag812000/Student-management-system",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  