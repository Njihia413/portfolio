export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export const resumeItems: ExperienceItem[] = [
  {
    company: "Fresh Networks: Smart Milk Distribution Solutions",
    role: "Full Stack Software Developer",
    period: "Jan 2025 - Jan 2026",
    description: [
      "Designed and implemented core features of an agent-facing application, resulting in streamlined milk sales operations and improved distribution tracking efficiency.",
      "Contributed to the implementation of the dispenser app, providing a user-friendly interface that significantly elevated the customer experience in milk purchase, leading to increased customer satisfaction and repeat business."
    ],
    skills: ["Odoo", "Next.js", "Nest.js", "Flutter", "Docker"]
  },
  {
    company: "Athens AI",
    role: "Frontend Engineer",
    period: "Sep 2024 - Present",
    description: [
      "Led UI/UX design and prototyping for the Athens AI platform, resulting in a 25% improvement in user adoption and reduced training time by 15% through intuitive design.",
      "Built responsive, high-performance frontend components using React and Tailwind/Bootstrap, cutting page load times by 30% and significantly enhancing user satisfaction scores.",
      "Integrated RESTful APIs and worked closely with backend engineers, streamlining the data pipeline and increasing overall application stability by 99.9% uptime."
    ],
    skills: ["Next.js", "React.js", "Tailwind CSS", "Flask", "REST APIs", "PostgreSQL", "Docker"]
  },
  {
    company: "RhoKIT",
    role: "Frontend Engineer",
    period: "Oct 2023 - Apr 2024",
    description: [
      "Led the transformation of the Rhokit HR System's frontend interface, using ReactJS, Firebase, and Bootstrap 5, resulting in an enriched user experience and a 30% increase in system adoption and daily active users.",
      "Oversaw the complete UI redesign process from ideation to execution, improving system navigation and reducing the average time to complete key HR tasks by 15%.",
      "Facilitated collaboration among team members in requirement gathering sessions and aligning objectives with Rhokit's strategic goals, ensuring the new design directly supported talent management initiatives and reduced data entry errors by 10%."
    ],
    skills: ["React.js", "Firebase", "Bootstrap 5", "Cloud Firestore", "Node.js"]
  },
  {
    company: "Three Modern Systems K Ltd",
    role: "Software Engineer Intern",
    period: "Jun 2023 - Sep 2023",
    description: [
      "Contributed to the successful redesign and rewriting of the frontend interface for the ThreeP Property Management System, resulting in a 25% improvement in user experience and 15% increase in system efficiency.",
      "Assisted in the implementation of Rest APIs, reducing data processing latency by 30% and improving component communication speed by 20%.",
      "Applied AngularJS for robust frontend development, integrating seamlessly with SpringBoot and Java backend technologies, increasing application scalability by 40% and reducing long-term maintenance costs by 10%."
    ],
    skills: ["AngularJS", "Java", "SpringBoot", "REST APIs"]
  }
];
