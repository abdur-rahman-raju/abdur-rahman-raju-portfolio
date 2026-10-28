/* =====================================================================
   এই একটা ফাইলেই আপনার পোর্টফোলিওর সব তথ্য আছে।
   কিছু বদলাতে চাইলে শুধু এখানে বদলান, আর কোথাও হাত দিতে হবে না।
   বদলে Ctrl + S দিয়ে সেভ করুন, তারপর ব্রাউজার রিফ্রেশ দিন।

   নিয়ম: লেখাগুলো "..." (ডাবল কোটেশন) এর ভেতরে থাকে, কোটেশন মুছবেন না।
   প্রতিটা লাইনের শেষে কমা (,) থাকবে।
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- ১. নাম, পদবি, ছবি ---------- */
  name: "Abdur Rahman Raju",
  role: "Frontend & Full-Stack Web Developer",
  intro: "I build modern, fast and responsive web applications with a focus on clean code and great user experience. Turning ideas into real products is what I love to do.",

  heroPhoto: "assets/hero.jpg",     // উপরে (প্রথম) ছবি
  aboutPhoto: "assets/about.jpg",   // About Me সেকশনের ছবি
  resume: "resume/Abdur_Rahman_Raju_Resume.pdf",   // রিজিউমে PDF এর পথ

  /* ---------- ২. সোশ্যাল লিংক ----------
     url ফাঁকা ("") রাখলে ওই আইকন দেখাবে না। icon এর অপশন: github, linkedin, facebook, x, youtube */
  socials: [
    { name: "GitHub",   icon: "github",   url: "https://github.com/abdur-rahman-raju" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/abdur-rahman-raju-dev/" },
    { name: "Facebook", icon: "facebook", url: "" },
    { name: "X",        icon: "x",        url: "" }
  ],

  /* ---------- ৩. About Me ---------- */
  about: {
    paragraphs: [
      "Hi, I'm Abdur Rahman Raju, a passionate web developer from Bangladesh. I learn by building real projects with HTML, CSS, JavaScript, React, Next.js and Node.js, and I'm always eager to improve my skills.",
      "I enjoy creating clean, responsive and user-friendly interfaces. I love solving problems and turning ideas into working web applications, from a daily market price app to a fitness tracker.",
      "Outside of coding, I enjoy playing cricket, watching movies, listening to music and spending time in nature. I'm a simple person, always eager to learn, grow and make a positive impact. I speak Bangla (native), English, Hindi and Urdu."
    ],
    traits: [
      { icon: "🧩", title: "Problem Solver",    text: "I love finding better solutions." },
      { icon: "⚡", title: "Quick Learner",     text: "I adapt fast to new things." },
      { icon: "🤝", title: "Team Player",       text: "I work well with others." },
      { icon: "🏏", title: "Cricket Lover",     text: "It keeps me refreshed." },
      { icon: "🎬", title: "Movie & Music Fan", text: "It helps me relax and get new ideas." }
    ]
  },

  /* ---------- ৪. Skills ----------
     নতুন স্কিল যোগ করতে একটা লাইন কপি করে নিচে পেস্ট করুন।
     icon: সাধারণ নাম দিলে devicon থেকে আইকন আসবে (react, nodejs, python, java, php, mysql, firebase ...)
           কালো আইকন (যেমন GitHub) এর জন্য লিখুন "si:github:ffffff" (si:নাম:রঙ) */
  skills: [
    { category: "Frontend", items: [
      { name: "HTML",         icon: "html5" },
      { name: "CSS",          icon: "css3" },
      { name: "JavaScript",   icon: "javascript" },
      { name: "TypeScript",   icon: "typescript" },
      { name: "React.js",     icon: "react" },
      { name: "Next.js",      icon: "si:nextdotjs:ffffff" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "DaisyUI",      icon: "si:daisyui:5A0EF8" }
    ]},
    { category: "Backend", items: [
      { name: "Node.js",    icon: "nodejs" },
      { name: "Express.js", icon: "si:express:ffffff" },
      { name: "MongoDB",    icon: "mongodb" }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git",     icon: "git" },
      { name: "GitHub",  icon: "si:github:ffffff" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma",   icon: "figma" },
      { name: "Vercel",  icon: "si:vercel:ffffff" },
      { name: "Netlify", icon: "netlify" }
    ]}
  ],

  /* ---------- ৫. Education ----------
     নিচের [ ] দেওয়া লেখাগুলো আপনার আসল তথ্য দিয়ে বদলান।
     একটা ব্লক মুছে দিলে সেটা সাইট থেকেও চলে যাবে। */
  education: [
    { title: "HSC", place: "[Darul Aman Trust]", period: "[2024] - [2026]" },
    { title: "SSC", place: "[Bera Fazil Madrasha]", period: "[2022] - [2024]" }
  ],

  /* ---------- ৬. Experience ----------
     চাকরি বা ইন্টার্নশিপ থাকলে এখানে যোগ করুন। পুরোটা ফাঁকা [] রাখলে সেকশনটা লুকিয়ে যাবে। */
  experience: [
    {
      title: "Web Developer (Personal & Course Projects)",
      place: "Self-driven",
      period: "Present",
      points: [
        "Built and deployed responsive web apps with React and Next.js.",
        "Implemented authentication and protected routes in a Next.js app with MongoDB.",
        "Used Git and GitHub for version control; deployed on Vercel and Netlify."
      ]
    }
  ],

  /* ---------- ৭. Projects ----------
     নতুন প্রজেক্ট যোগ করতে একটা পুরো { ... } ব্লক কপি করে নিচে পেস্ট করুন (আগের ব্লকের পরে কমা দিয়ে)।
     id: ছোট হাতের ইংরেজি নাম, স্পেস ছাড়া (একদম আলাদা হতে হবে)
     image: assets/projects/ ফোল্ডারে স্ক্রিনশট রেখে তার নাম লিখুন */
  projects: [
    {
      id: "bazardor",
      name: "BazarDor (বাজার দর)",
      image: "assets/projects/bazardor.png",
      short: "A web app for daily market prices and product information with categories, product details and sign in.",
      stack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "MongoDB Atlas", "BetterAuth"],
      overview: "BazarDor helps people check daily market prices and product details in one place. Visitors can browse products by category, open a product details page and sign in to access protected pages such as their profile. The UI follows a Figma design and works on all screen sizes.",
      features: [
        "Category-wise product browsing",
        "Product details page (sign in required)",
        "Sign up and sign in with authentication",
        "User profile page and user menu",
        "Data loaded from product and category APIs",
        "Fully responsive layout"
      ],
      live: "https://online-bazardor-website.vercel.app/",
      github: "https://github.com/abdur-rahman-raju/online-bazardor-website",
      challenges: [
        "Matching the Figma design closely on every screen size.",
        "Protecting product details and profile pages so only signed-in users can open them.",
        "Connecting authentication with MongoDB Atlas and keeping the session working.",
        "Handling and displaying data from the product and category APIs."
      ],
      future: [
        "Add price history charts for each product.",
        "Add search, filters and sorting by price.",
        "Add favorites and price drop alerts.",
        "Add a Bangla / English language switch."
      ]
    },
    {
      id: "fitlog",
      name: "FitLog",
      image: "assets/projects/fitlog.png",
      short: "A fitness tracking web app to log workouts and monitor progress with a clean, responsive interface.",
      stack: ["React", "Tailwind CSS", "LocalStorage", "Netlify"],
      overview: "FitLog is a simple fitness tracker where users can record their workouts and see their progress. The goal was a clean, distraction-free interface that is quick to use on a phone.",
      features: [
        "Add and view workout logs",
        "Progress overview",
        "Data saved in the browser with LocalStorage",
        "Clean, mobile-first responsive UI"
      ],
      live: "https://inspiring-twilight-9ae5ef.netlify.app/",
      github: "https://github.com/abdur-rahman-raju/my-fit-got",
      challenges: [
        "Saving and reading workout data reliably with LocalStorage.",
        "Designing a layout that is fast and easy to use on small screens.",
        "Keeping component state organized as features grew."
      ],
      future: [
        "Add a real database and user accounts so data syncs across devices.",
        "Add charts for weekly and monthly progress.",
        "Add workout plans and rest timers."
      ]
    },
    {
      id: "devstack",
      name: "Dev Stack",
      image: "assets/projects/devstack.png",
      short: "A React application for developers with a component-based structure and a modern, responsive UI.",
      stack: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      overview: "Dev Stack is a React project built to practice component-based architecture and modern UI design. It presents developer-focused content in a clean layout that adapts to desktop, tablet and mobile.",
      features: [
        "Component-based structure",
        "Modern, clean UI",
        "Fully responsive on all devices",
        "Deployed live on Netlify"
      ],
      live: "https://cute-praline-6de017.netlify.app/",
      github: "https://github.com/abdur-rahman-raju/react-devStack-app",
      challenges: [
        "Breaking the interface into small reusable React components.",
        "Managing state and props cleanly across components.",
        "Making the layout look good from mobile to large screens."
      ],
      future: [
        "Add search and category filters.",
        "Connect to a backend API for dynamic content.",
        "Add more reusable components and improve accessibility."
      ]
    }
  ],

  /* ---------- ৮. Contact ----------
     নিচের তিনটা আপনার আসল তথ্য দিয়ে বদলান। whatsapp না থাকলে "" রাখুন। */
  contact: {
    email: "abdurrahmanraju13b@gmail.com",
    phone: "+8801728614413",
    whatsapp: "8801728614413"      // শুধু সংখ্যা, + ছাড়া (দেশের কোডসহ)
  }
};
