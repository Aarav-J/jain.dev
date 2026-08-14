/**
 * SITE CONTENT — edit this file to update the website.
 * No component knowledge required. Run `npm run build` after saving.
 */

export const person = {
  name: "Aarav Jain",
  displayName: "AARAV\nJAIN",
  email: "jain925@purdue.edu",
  phone: "848-313-5500",
  github: "https://github.com/Aarav-J",
  linkedin: "https://linkedin.com/in/aaravjain10",
  website: "aaravj.xyz",
  spotify: "https://open.spotify.com/user/paei6pn8u6ac9w2d42wkaohup?si=0bca6f6a59c24e52",
  resume: "/Aarav_Jain_Resume.pdf",
}

export const hero = {
  eyebrow: "ce @ purdue · firmware · full-stack",
  // pitch: "I build things for the web and close to the metal.",
}

export const about = {
  bio: "I'm Aarav, a Computer Engineering student at Purdue University (Class of 2028). I work across the stack — from bare-metal firmware and RTOS kernels to full-stack web apps and AI systems. Currently building drone firmware with Zephyr RTOS and researching autonomous UAV-UGV collaboration at Purdue IDEAS Lab.",
  meta: [
    { label: "Education",   value: "Purdue University",     sub: "Computer Engineering" },
    { label: "Graduating",  value: "May 2028",              sub: "West Lafayette, IN" },
    { label: "Focus",       value: "Firmware + Full-Stack", sub: "Close to the metal, close to the product" },
    { label: "Currently",   value: "Embedded Systems Club", sub: "Purdue IDEAS Research Lab" },
  ],
}

export const experience = [
  {
    company: "Assured Guaranty",
    role: "Software Engineering Intern",
    location: "New York, NY",
    period: "Feb 2026 — Aug 2026",
    type: "internship" as const,
    tech: ["AWS Textract", "AWS Bedrock", "Snowflake", "Python", "LightGBM"],
    bullets: [
      "Built an automated credit memo generation pipeline using AWS Textract, Bedrock, and Snowflake — reducing analyst time per credit by 70%.",
      "Developed a CUSIP similarity engine using weighted K-Nearest Neighbors and LightGBM leaf embeddings.",
    ],
  },
  {
    company: "Purdue Embedded Systems Club",
    role: "Member",
    location: "West Lafayette, IN",
    period: "Sep 2025 — Present",
    type: "club" as const,
    tech: ["Zephyr RTOS", "C", "FreeRTOS", "I²C"],
    bullets: [
      "Developing a Hardware-in-the-Loop (HiL) system with multi-threaded architecture managing flight control, hover, and landing threads to validate drone firmware safely.",
      "Engineering device drivers in Zephyr RTOS for IMU and LiDAR sensors over I2C.",
    ],
  },
  {
    company: "Purdue IDEAS Research Lab",
    role: "Undergraduate Researcher",
    location: "West Lafayette, IN",
    period: "Oct 2025 — Present",
    type: "research" as const,
    tech: ["PyTorch", "Python", "Unity", "ROS 2", "LLMs", "VLMs"],
    bullets: [
      "Developing an autonomous UAV-UGV collaboration system using LLMs, VLMs, and computer vision for navigation in unstructured environments.",
      "Building a Unity simulation perception pipeline feeding a PyTorch VLM to generate a structured 3D object map.",
    ],
  },
  {
    company: "Algoverse",
    role: "Machine Learning Researcher",
    location: "Remote",
    period: "Aug 2024 — May 2025",
    type: "research" as const,
    tech: ["Python", "GPT-4", "LaTeX"],
    bullets: [
      "Developed a novel evaluation framework quantifying sycophantic behavior in multi-turn LLM conversations — finding a 47% accuracy decline over extended interactions.",
      "Co-authored the Truth Decay paper, published at NAACL 2025 Student Research Workshop.",
    ],
  },
]

export const skills = {
  languages: ["Python", "C/C++", "TypeScript", "JavaScript", "Java", "SQL", "Matlab", "HTML/CSS", "ARM Assembly"],
  frameworks: ["React", "React Native", "Next.js", "FastAPI", "Flask", "Node.js", "PyTorch", "NumPy", "Langchain"],
  tools: ["Zephyr RTOS", "Docker", "AWS", "Git", "ROS", "IsaacSim", "Pinecone", "Figma"],
}
