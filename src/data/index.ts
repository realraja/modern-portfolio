export const navItems = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Skills", link: "/#skills" },
  { name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a react native project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
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

export const projects = [
  {
    id: 1,
    title: "VOOC",
    isFeatured: true,
    des: "Simplify your video conferencing experience with CALLUP. Seamlessly connect with colleagues and friends.",
    img: "/vooc.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://vooc.netlify.app/",
    github: 'https://github.com/realraja/zoom-clone'
  },
  {
    id: 2,
    title: "Advance TODO App",
    isFeatured: true,
    des: "NextTask: The smart, feature-packed to-do app that helps you organize, prioritize, and conquer your tasks with ease.",
    img: "/todo.jpg",
    iconLists: ["/re.svg", "/tail.svg","/mongo-svgrepo-com.svg",'/redux-logo-svgrepo-com.svg','/cloud.svg'],
    link: "https://life-trackor.netlify.app/",
    github: 'https://github.com/realraja/advance-todo',
  },
  {
    id: 3,
    title: "Raithan Classes",
    isFeatured: true,
    des: "Master your goals with Raithan Classes – the ultimate coaching classes app for structured learning, progress tracking, and expert-led success.",
    img: "/raithan.jpg",
    iconLists: ["/re.svg", "/tail.svg","/mongo-svgrepo-com.svg",'/redux-logo-svgrepo-com.svg','/cloud.svg'],
    link: "https://raithan.netlify.app/",
    github: 'https://github.com/realraja/raithan',
  },
  {
    id: 4,
    title: "Chat App",
    isFeatured: true,
    des: "Chat smarter, connect faster – seamless messaging with privacy and power in one app.",
    img: "/chat.jpg",
    iconLists:  ["/re.svg", "/tail.svg","/socket-io.svg"],
    link: "https://chat-front-hai.vercel.app/",
    github: 'https://github.com/realraja/chat-frontend',
  },
  {
    id: 5,
    title: "Get Notes",
    isFeatured: false,
    des: "InstaNotes – Capture, organize, and share your thoughts effortlessly with smart, clutter-free note-taking.",
    img: "/notes.jpg",
    iconLists: ["/next.svg", "/tail.svg","/razorpay.png"],
    link: "https://chai-notes.netlify.app/",
    github: 'https://github.com/realraja/cwh-get-chai',
  },
  {
    id: 6,
    title: "Video Hub",
    isFeatured: false,
    des: "VideoHub – Capture, organize, and share your thoughts effortlessly with smart, clutter-free note-taking.",
    img: "/video-hub.jpg",
    iconLists: ["/re.svg", "/chakra-ui.svg"],
    link: "https://mr-video-hub.vercel.app/",
    github: 'https://github.com/realraja/video-hub',
  },
  {
    id: 7,
    title: "Portfolio",
    isFeatured: false,
    des: "Portfolio – Capture, organize, and share your thoughts effortlessly with smart, clutter-free note-taking.",
    img: "/portfolio.jpg",
    iconLists: ["/next.svg", "/tail.svg","/three.svg"],
    link: "https://modern-portfolioo.netlify.app",
    github: 'https://github.com/realraja/modern-portfolio',
  },
];


export const skills = [
  {
    name: 'HTML',
    logo: '/icons8-html.svg',
    percent: 100,
    color: '#e34c26'
  },
  {
    name: 'CSS',
    logo: '/icons8-css.svg',
    percent: 100,
    color: '#2965f1'
  },
  {
    name: 'JavaScript',
    logo: '/js.svg',
    percent: 100,
    color: '#FAC42F'
  },
  {
    name: 'React',
    logo: '/re.svg',
    percent: 100,
    color: '#61DBFB'
  },
  {
    name: 'Redux Toolkit',
    logo: '/redux-logo-svgrepo-com.svg',
    percent: 100,
    color: '#764abc'
  },
  {
    name: 'Next.js',
    logo: '/next.svg',
    percent: 100,
    color: '#FFFFFF'
  },
  {
    name: 'React Native',
    logo: '/re.svg',
    percent: 100,
    color: '#61DBFB'
  },
  {
    name: 'MongoDB',
    logo: '/mongo-svgrepo-com.svg',
    percent: 100,
    color: '#4DB33D'
  },
  {
    name: 'Node.js',
    logo: '/node-svgrepo-com.svg',
    percent: 100,
    color: '#3C873A'
  },
  {
    name: "Express",
    logo: "/Express.png",
    percent: 100,
    color: '#FFFFFF'
  },
  {
    name: 'Tailwind CSS',
    logo: '/tail.svg',
    percent: 100,
    color: '#01CBC6'
  },
  {
    name: 'TypeScript',
    logo: '/ts.svg',
    percent: 100,
    color: '#3178C6'
  },
  {
    name: 'Appwrite',
    logo: '/app.svg',
    percent: 100,
    color: '#fe019a'
  },
  {
    name: 'Cloudinary',
    logo: '/cloud.svg',
    percent: 100,
    color: '#FFFFFF'
  },
  {
    name: 'Socket.io',
    logo: '/socket-io.svg',
    percent: 100,
    color: '#FFFFFF'
  },
  {
    name: 'RazorPay',
    logo: '/razorpay.png',
    percent: 100,
    color: '#FFFFFF'
  },
  {
    name: 'Python',
    logo: '/python.svg',
    percent: 100,
    color: '#FFFFFF'
  },
  // {
  //   name:'Docker',
  //   logo:'/dock.svg',
  //   percent:7100
  //   color:'#4F46E5'
  // },
  // {
  //   name: 'Azure',
  //   logo: '/azure-svgrepo-com.svg',
  //   percent: 100,
  //   color:'#4F46E5'
  // }
]

export const testimonials = [
  {
    quote:
      "Collaborating with raja was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. raja's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend raja for any web development project.",
    name: "Chandan Brar",
    title: "Music Lyrics/Composer",
    photo: 'chandan.jpg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. raja is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, raja always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend raja.",
    name: "Ranjeet Bind",
    title: "Video Editor",
    photo: 'ranjeet.jpg',
  },
  {
    quote:
      "Collaborating with raja was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. raja's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend raja for any web development project.",
    name: "Chandan Brar",
    title: "Music Lyrics/Composer",
    photo: 'chandan.jpg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. raja is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, raja always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend raja.",
    name: "Ranjeet Bind",
    title: "Video Editor",
    photo: 'ranjeet.jpg',
  },
  {
    quote:
      "Collaborating with raja was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. raja's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend raja for any web development project.",
    name: "Chandan Brar",
    title: "Music Lyrics/Composer",
    photo: 'chandan.jpg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. raja is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, raja always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend raja.",
    name: "Ranjeet Bind",
    title: "Video Editor",
    photo: 'ranjeet.jpg',
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
    title: "Full Stack Developer",
    desc: "Build and deploy many web applications using modern frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a E-commerce web app for a client, from initial concept to deployment on vercle",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    desc: "Develop mobile apps for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
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
    img: "/git.svg",
    link: 'https://github.com/realraja'
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: "https://www.instagram.com/code.raja/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rajesh-kumar-06908730b/"
  },
];