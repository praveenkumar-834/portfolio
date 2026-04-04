export const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Axios", "React Router"],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "REST APIs", "Role-based Access Control"],
  devops: ["AWS", "Docker", "Terraform", "Jenkins", "Linux", "Nginx", "Apache", "Git/GitHub"],
  tools: ["VS Code", "Postman", "Render", "Vercel", "CloudWatch", "Route 53", "MySQL", "Prometheus/Grafana"]
};

export const skillProgress = [
  { name: "React / Frontend", value: 85 },
  { name: "Node / Express", value: 82 },
  { name: "MongoDB / APIs", value: 80 },
  { name: "Linux / AWS / DevOps", value: 88 }
];

export const projects = [
  {
    title: "Personal Finance Manager",
    stack: "MERN Stack, JWT, Tailwind CSS, MongoDB",
    desc: "A full-stack finance management application with authentication, income and expense tracking, budget planning, goals, admin dashboard, reports, and protected routes.",
    demo: "https://fm-frontend-delta.vercel.app/",
    code: "https://github.com/praveenkumar-834/FM_Frontend",
    image: "https://placehold.co/800x500?text=Finance+Manager",
    imageLabel: "Finance App Screenshot",
    points: [
      "Built secure login, registration, password reset, and role-based authentication",
      "Created modules for income, expense, budgets, goals, reports, and admin monitoring",
      "Worked on deployment and API integration using Vercel and Render"
    ]
  },
  {
    title: "Password Reset Authentication App",
    stack: "React, Node.js, Express, MongoDB, Nodemailer",
    desc: "A complete authentication flow project with email-based password reset and token validation.",
    demo: "https://password-reset-frontend-rust.vercel.app/",
    code: "https://github.com/praveenkumar-834/password_reset_frontend",
    image: "https://placehold.co/800x500?text=Password+Reset+App",
    imageLabel: "Auth Flow Screenshot",
    points: [
      "Implemented forgot-password and reset-password flow with JWT/token handling",
      "Integrated email notifications using Nodemailer and Gmail SMTP",
      "Handled frontend-backend deployment issues and environment configuration"
    ]
  },
  {
    title: "DevOps & Cloud Automation Work",
    stack: "AWS, Terraform, Bash, Linux",
    desc: "Hands-on infrastructure provisioning, server administration, deployment support, SSL automation, and monitoring tasks from real-world DevOps experience.",
    demo: "#",
    code: "https://github.com/praveenkumar-834/banking",
    image: "https://placehold.co/800x500?text=DevOps+%26+Cloud",
    imageLabel: "Cloud / DevOps Screenshot",
    points: [
      "Provisioned EC2 instances and cloud resources using Terraform",
      "Automated SSL/software installation tasks using Bash scripts and cron jobs",
      "Managed Linux servers, web servers, DNS, and monitoring tools"
    ]
  }
];

export const experience = [
  {
    role: "System Administrator",
    company: "Professional Experience",
    period: "~7 years total experience",
    desc: "Experience across Linux administration, AWS infrastructure, DevOps support, backups, monitoring, web servers, office administration tools, and cloud operations."
  },
  {
    role: "DevOps Engineer",
    company: "Kliotect Pvt Ltd",
    period: "Past Role",
    desc: "Provisioned EC2 instances using Terraform and automated operational tasks using Bash scripts. Worked on SSL setup, software installation, and cron-based automation."
  },
  {
    role: "System Administrator",
    company: "3edge Solutions / Huridigital Pvt Ltd",
    period: "Past Roles",
    desc: "Handled Linux and Windows administration, O365 administration, backup operations, SFTP administration, web servers, and infrastructure support."
  }
];

export const contact = {
  github: "https://github.com/praveenkumar-834/praveenkumar-dev/",
  linkedin: "https://www.linkedin.com/in/praveen-ramamoorthy-5a829b3b9/",
  email: "kumar.praveen0834@gmail.com",
  location: "Tamil Nadu, India",
  resume: "/resume.pdf"
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
