export interface WorkItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  url: string;
  demoLink: string;
  width: number;
  height: number;
  marginClass: string;
}

export const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Mazingira AI",
    subTitle: "Empowering Climate Literacy Through AI",
    description:
      "An interactive chatbot dedicated to environmental awareness, helping users understand climate change facts and debunk common myths with real-time insights relevant to Kenya.",
    url: "https://i.postimg.cc/8zRVsPNn/MazingiraAI.png",
    demoLink: "https://mazingira-ai.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "",
  },
  {
    id: "2",
    title: "Argus AI Secure",
    subTitle: "Next-Gen Enterprise Security Management",
    description:
      "A comprehensive security platform designed for modern enterprises, featuring passwordless access, real-time threat monitoring, and automated safety protocols to protect sensitive data.",
    url: "https://i.postimg.cc/DwNYCHn1/Argus-AI.png",
    demoLink: "https://argus-ai-secure-poc.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "mt--30",
  },
  {
    id: "3",
    title: "Sonic AI",
    subTitle: "Advanced Voice Cloning Technology",
    description:
      "A voice cloning tool that lets you create a digital version of any voice, enabling natural-sounding speech generation from text for content creators and professionals.",
    url: "https://i.postimg.cc/sXrmqR8r/Sonic-AI.png",
    demoLink: "https://sonicai.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "",
  },
  {
    id: "4",
    title: "Property Manager",
    subTitle: "Simplify Your Real Estate Operations",
    description:
      "A streamlined solution for managing multiple properties from a single dashboard, making it easy to track tenants, leases, and maintenance requests efficiently.",
    url: "https://i.postimg.cc/DzdncBLy/ThreeP.png",
    demoLink: "https://threepmanager.web.app/",
    width: 600,
    height: 400,
    marginClass: "mt--30",
  },
  {
    id: "5",
    title: "Smart Payroll System",
    subTitle: "Hassle-Free Payroll Management",
    description:
      "An automated payroll tool that simplifies salary management and tax calculations, eliminating manual errors and providing a hassle-free processing experience.",
    url: "https://i.postimg.cc/05Vh3NDw/Rhokit.png",
    demoLink: "https://rhokit-seal.web.app/",
    width: 600,
    height: 400,
    marginClass: "",
  },
];
