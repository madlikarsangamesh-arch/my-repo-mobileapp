export const PORTFOLIO_DATA = {
  personal: {
    name: "SANGAMESH MADLIKAR ",
    role: "INFORMATION SCIENCE AND ENGINNERING",
    bio: "Passionate about building highly performant and scalable mobile applications. I specialize in React Native, Node.js, and crafting exceptional user experiences.",
    location: "BANGALORE ,KARNATAKA ,INDIA",
    availability: "Currently looking for summer internship",
    email: "madlikarsangamesh@gmail.com",
    github: "https://github.com/madlikarsangamesh-arch",
    linkedin: "https://www.linkedin.com/in/sangamesh-madlikar-2a9085333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  stats: [
    { label: "Projects", value: "12+" },
    { label: "Technologies", value: "8" },
    { label: "Certifications", value: "3" },
    { label: "Experience", value: "1 yr" },
  ],
  projects: [
    {
      id: "1",
      title: "FinTech Dashboard",
      description: "A comprehensive financial dashboard allowing users to track expenses and manage investments.",
      techStack: ["React Native", "TypeScript", "Zustand", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1616077168079-7e09a6a266a2?auto=format&fit=crop&w=800&q=80",
      type: "Personal", // Latest, Featured, Academic, Personal
      problem: "Users needed a way to consolidate their financial data across multiple bank accounts.",
      solution: "Built a secure mobile app integrating with Plaid API and visualized data using D3-like charts in React Native.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "2",
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce app with cart management, Stripe payments, and real-time inventory.",
      techStack: ["Expo", "React Query", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1472851294502-8a8bef1ec50e?auto=format&fit=crop&w=800&q=80",
      type: "Featured",
      problem: "Local businesses lacked a mobile-first platform to sell products easily.",
      solution: "Developed a white-label mobile application that can be quickly customized for different merchants.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "3",
      title: "Task Management System",
      description: "Academic project focusing on real-time collaboration and project management.",
      techStack: ["React", "Express", "Socket.io", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      type: "Academic",
      problem: "University group projects were difficult to coordinate remotely.",
      solution: "Created a centralized task board with real-time updates and integrated chat.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],
  experience: [
    {
      id: "1",
      role: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      duration: "May 2025 - Aug 2025",
      type: "Internship",
      achievements: [
        "Developed 5 new features for the core mobile application using React Native.",
        "Optimized list rendering, reducing load times by 30%.",
        "Collaborated with the design team to implement a new dark mode theme."
      ]
    },
    {
      id: "2",
      role: "Open Source Contributor",
      company: "React Native Community",
      duration: "Jan 2025 - Present",
      type: "Open Source",
      achievements: [
        "Resolved 10+ issues related to accessibility in core UI components.",
        "Improved documentation for the animation library."
      ]
    }
  ],
  education: [
    {
      id: "1",
      degree: "B.S. in Computer Science",
      institution: "State University",
      duration: "2022 - 2026",
      cgpa: "3.8/4.0",
      coursework: ["Data Structures", "Algorithms", "Mobile App Development", "Database Systems"]
    }
  ],
  skills: {
    frontend: ["React", "React Native", "TypeScript", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Python", "Java", "SQL", "Express"],
    tools: ["Git", "Docker", "Figma", "Expo", "Firebase"]
  }
};
