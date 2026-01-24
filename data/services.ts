export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Full-Stack| Development",
    description: "End-to-end application development from frontend to backend, database design, payment integration and deployment.",
    icon: "fa-solid fa-code",
  },
  {
    id: 2,
    title: "AI Integration| & Development",
    description: "Leverage AI to build intelligent applications that automate workflows, enhance decision-making and provide actionable insights.",
    icon: "fa-solid fa-robot",
  },
  {
    id: 3,
    title: "Performance| Optimization",
    description: "Transform slow applications into high-performance systems through strategic code refactoring, asset optimization and API improvements.",
    icon: "fa-solid fa-gauge-high",
  },
  {
    id: 4,
    title: "Cloud & DevOps| Automation",
    description: "Architect robust cloud-native solutions with containerized deployments, automated scaling, monitoring and security best practices.",
    icon: "fa-solid fa-cloud",
  },
];
