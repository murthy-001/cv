import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Srinivasa Murthy K",
  initials: "SMK",
  location: "Chico CA, United States",
  locationLink: "https://www.google.com/maps/place/Chico,+CA",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in high-performance
      Django applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in software architecture design and team
      leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/124085326?&v=4",
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FSrinivasa%2FKrishna%2BMurthy&psig=AOvVaw3dKkx3qrlMuoAYXOGLbcEW&ust=1736640641583000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC_7diw7IoDFQAAAAAdAAAAABAE
  personalWebsiteUrl: "https://srinivasa-murthy.com",
  contact: {
    email: "srinivasamurthyk1996@gmail.com",
    tel: "+15305667761",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/murthy01",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/srinivasa-murthy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
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
//       Software Developer, Accenture (Jan 2024 – Present | Remote, USA)
// Designed and developed high-performance applications using Java and Python.
// Built and integrated secure, scalable RESTful APIs, optimizing data transfer by 25%.
// Enhanced data processing algorithms, boosting system efficiency by 22%.
// Led Agile development efforts, improving project delivery speed by 28%.
      company: "Accenture",
      link: "https://www.accenture.com/us-en",
      badges: ["React", "Next.js", "TypeScript", "Python", "RESTful APIs"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "Jan 2024",
      end: null,
      description: (
        <>

          <ul className="list-inside list-disc">
            <li>
              Designed and developed high-performance applications using Java and Python
            </li>
            <li>
              Built and integrated secure, scalable RESTful APIs, optimizing data transfer by 25%
            </li>
            <li>
              Enhanced data processing algorithms, boosting system efficiency by 22%
            </li>
            <li>
              Led Agile development efforts, improving project delivery speed by 28%
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "IBM",
      link: "https://www.ibm.com/us-en",
      badges: [
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
        "Spring Boot",
        "Java",
      ],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "MAR 2018",
      end: "JUL 2022",
      description: (
        <>
          
          <ul className="list-inside list-disc">
            <li>
              Architected backend systems for millions of users, improving system stability by 25%
            </li>
            <li>
              Deployed microservices using Spring Boot, reducing response times by 20%
            </li>
            <li>
              Managed relational and NoSQL databases, ensuring fast and reliable data access
            </li>
            <li>
              Created reusable software libraries, cutting development time by 30%
            </li>
          </ul>
        </>
      ),
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description: (
    //     <>
    //       Successfully transitioned from mobile to full-stack development while
    //       leading distributed teams.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Led frontend team at Evercast, building real-time platform
    //           supporting 30+ users per room with HD streaming and collaboration
    //           tools
    //         </li>
    //         <li>
    //           Developed offline-first Android app for DKMS, improving donor
    //           registration process
    //         </li>
    //         <li>
    //           Led development teams across multiple successful client projects
    //         </li>
    //         <li>
    //           Created reusable software libraries, cutting development time by 30%.
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: ["On Site", "Android", "Java", "Kotlin"],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description: (
    //     <>
    //       First Android developer, grew and led a team of 15+ engineers while
    //       establishing engineering culture.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Developed apps for major Polish companies including LOT, Polskie
    //           Radio, and Agora
    //         </li>
    //         <li>Built and mentored high-performing mobile development team</li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: ["On Site", "C/C++", "LTE", "Agile"],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description:
    //     "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    // },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Docker",
    "Kubernetes",
    "AWS",
    "Python",
    "RESTful APIs",
    "Agile",
    "Scrum",
    "Django",
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Team Leadership",
    "ERP Solutions",
    "CI/CD",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Git",
    "Jira",
    "Flutter",
    "Android",
  ],
  projects: [
//     Job Searching Portal: JAVA Spring Boot, MongoDB, React Aug 2023 - Sep 2023
// Dec 2022 - Jan 2023
// ▪ Developed a web portal for employers to post job openings and candidates to apply, streamlining the hiring process and reducing
// application processing time by 6%.
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
    {
      title: "Megascends",
      techStack: [
        "TypeScript",
        "React.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Webiste of a startup which offers dynamic web, software, and mobile applications for businesses.",
      logo: ConsultlyLogo,
      link: {
        label: "megascends.com/",
        href: "https://www.megascends.com/",
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
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
