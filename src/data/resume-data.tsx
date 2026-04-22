import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

// /Users/srinivasamurthykrishnamurthy/Documents/Srinivas (MS)/Portfolio/cv/.gitignore

export const RESUME_DATA = {
  name: "Srinivasa Murthy K",
  initials: "SMK",
  location: "San Francisco, CA, United States",
  locationLink: "https://maps.app.goo.gl/L4LYsanf9WWVXKet5",
  about:
    "Performance-oriented Software Developer dedicated to building high-quality backend systems.",
  summary: (
    <>
      Software Developer with 4+ years of experience building and optimizing high-performance, cloud-native backend systems for
enterprise applications. Strong expertise in Java, Spring Boot, Python, microservices architecture, REST and GraphQL APIs, and
distributed systems. Hands-on experience with Docker, Kubernetes, Azure Functions, CI/CD pipelines, and automated testing using
JUnit, Mockito, and Selenium. Skilled in asynchronous processing, performance tuning, security (JWT, RBAC), and cross-functional
collaboration to deliver secure, production-ready solutions in Agile environments.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/124085326?s=400&u=326b91d275d548cc7d206a6a960c0f1faaf0e23e&v=4",
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FSrinivasa%2FKrishna%2BMurthy&psig=AOvVaw3dKkx3qrlMuoAYXOGLbcEW&ust=1736640641583000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC_7diw7IoDFQAAAAAdAAAAABAE
  personalWebsiteUrl: "https://www.srinivasa-murthy.com",
  contact: {
    email: "srinivasamurthyk1996@gmail.com",
    tel: "+15305667761",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/murthy-001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/srinivasa-murthy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/murthy0001",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "California State University, Chico",
      degree: "Master's Degree in Computer Science",
      start: "AUG 2022",
      end: "DEC 2024",
    },
    {
      school: "Visvesvaraya Technological University, Belagavi",
      degree: "Bachelor's Degree in Computer Science",
      start: "MAY 2013",
      end: "JUN 2018",
    }
  ],
  work: [
    {
      company: "Walmart, USA",
      link: "https://www.csuchico.edu/",
      badges: [
        "Java",
        "Spring boot",
        "RESTful APIs",
        "Docker",
        "PostgreSQL",
        "Git",
        "Agile",
        "Scrum",
        "AWS"
      ],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "Oct 2024",
      end: null,
      description: (
        <>

          <ul className="list-inside list-disc">
            <li>
Develop and enhance high-performance backend services using Java, Spring Boot, and Python, applying multithreading and
asynchronous processing to reduce system load and improve service efficiency by 28% across cloud-native enterprise applications.            </li>
            <li>
Design, implement, and optimize REST and GraphQL APIs supporting cross-service communication in distributed microservice
architectures, accelerating data transfer by 32% and improving reliability under high-traffic workloads.            </li>
            <li>
Refactor application workflows and optimize data structures, memory usage, and JVM performance, reducing memory consumption
by 27% and improving processing stability during peak traffic conditions.            </li>
            <li>
Deploy and manage cloud-native microservices using Docker, Kubernetes, and Azure Functions, enabling auto-scaling, improving
fault tolerance, and reducing infrastructure costs by 20% through efficient resource utilization.            </li>
            <li>
Strengthen software quality and delivery by implementing automated unit, integration, and UI testing with JUnit, Mockito, and
Selenium, achieving 92% test coverage, while integrating services into CI/CD pipelines in collaboration with DevOps teams to
support reliable, secure releases.            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tally Solutions Pvt. Ltd.",
      link: "https://tallysolutions.com/",
      badges: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
        "ReactJS",
        "RESTful APIs",
        "JWT",
        "RBAC",
        "Agile",
        "Git"
      ],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "MAR 2018",
      end: "JUL 2022",
      description: (
        <>
          
          <ul className="list-inside list-disc">
            <li>
              Engineered inventory microservices (Java, Spring Boot, MySQL), enhancing procurement accuracy by 30% and cutting delivery mismatches across 15+ regional warehouses.
            </li>
            <li>
              Integrated Redis caching to reduce redundant DB queries, slashing API latency by 22% during peak reconciliation loads.
            </li>
            <li>
              Modularized back-end logic for finance and billing, speeding up feature delivery by 23% and cutting QA rework by 14%.
            </li>
            <li>
              Delivered interactive billing dashboards (React and REST APIs), accelerating dispute resolution by 1.66 hours per ticket.
            </li>
            <li>
              Secured APIs via JWT-based RBAC, reducing unauthorized access by 13% and simplifying role control for regional admins.
            </li>
            <li>
              Partnered with product managers to align the back-end invoice logic with compliance policies, improving audit accuracy by 15% over two fiscal cycles.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Spring Boot",
    "Django",
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "AWS (EC2, RDS, S3)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "JUnit",
    "Jest",
    "Mocha",
    "Git",
    "GitHub",
    "GitLab",
    "JIRA",
    "Trello",
    "RESTful APIs",
    "JWT",
    "OAuth 2.0",
    "RBAC",
    "Agile/Scrum",
    "Prometheus",
    "SonarQube"
  ],
  projects: [
    {
      title: "QuickBooks-style ERP System",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Spring Security"],
      description:
        "A secure and scalable backend ERP system for inventory and accounts management with multi-tenant support, JWT-based RBAC, and CI/CD using Docker and GitHub Actions.",
      logo: MonitoLogo,
      link: {
        label: "GitHub Repository",
        href: "https://github.com/murthy-001/quickbooks-backend",
      },
    },
    {
      title: "Swastik Solutions Web Platform",
      techStack: ["ReactJS", "Django", "PostgreSQL", "Razorpay API"],
      description:
        "A client-facing platform handling 10K+ daily API requests with secure Stripe-integrated payments, automated ERP syncing, and low-latency performance.",
      logo: MonitoLogo,
      link: {
        label: "swastiksolution.in",
        href: "https://swastiksolution.in/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design.",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/murthy-001/cv",
      },
    },
    {
      title: "PantryNode",
      techStack: ["Node.js", "Express", "EJS", "MongoDB"],
      description:
        "A Node.js and EJS-based campus food pantry management system developed during the Software Engineering & Maintenance course, designed to streamline inventory tracking and student resource access.",
      logo: MonitoLogo,
      link: {
        label: "GitHub Repository",
        href: "https://github.com/murthy-001/PantryNode",
      },
    },
    {
      title: "HireSphere",
      techStack: ["Java", "Spring Boot", "MongoDB", "React.js"],
      description:
        "A modern web portal connecting employers and job seekers, simplifying the hiring process with intuitive design and seamless functionality.",
      logo: MonitoLogo,
      link: {
        label: "hiresphere.dev",
        href: "https://github.com/murthy01",
      },
    },
  ],
} as const;
