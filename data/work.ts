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
  // Case Study Fields
  techStack?: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  screenshots?: string[];
}

export const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Mazingira AI",
    subTitle: "Empowering Climate Literacy Through AI",
    description:
      "An interactive chatbot dedicated to environmental awareness, helping users understand climate change.",
    problem: "The growing threat of climate change is inhibited by a significant gap in public understanding and awareness, further fueled by misinformation and the complexity of the subject. Traditional educational approaches—like scientific reports and formal classrooms—fall short in addressing the diverse learning needs of the Kenyan population, widening the climate literacy divide.",
    solution: "Mazingira AI is an NLP-powered conversational system designed to bridge this gap. Unlike static educational methods, it fosters meaningful engagement by providing accessible, interactive climate education. The system directly addresses misinformation and adapts to different linguistic and cultural contexts to enhance climate literacy across Kenya.",
    features: [
        "Real-time conversational AI powered by NLP",
        "Localized knowledge base for Kenyan climate issues",
        "Context-aware responses adapting to user's local region",
        "Mobile-responsive design for broad accessibility"
    ],
    url: "https://i.postimg.cc/8zRVsPNn/MazingiraAI.png",
    demoLink: "https://mazingira-ai.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "",
    techStack: ["ReactJS", "Python", "PostgreSQL", "Jupyter Notebook", "Chroma DB"],
  },
  {
    id: "2",
    title: "Argus AI Secure",
    subTitle: "Next-Gen Enterprise Security Management",
    description:
      "A comprehensive security platform designed for modern enterprises, featuring enhanced hardware-based authentication.",
    problem: "Standard passwords are no longer enough to stop modern cyber attacks. Companies need a stronger way to verify that a user is who they say they are, adding a physical layer of security that cannot be hacked remotely calling for a need verify identity beyond just 'what you know' to 'what you have'.",
    solution: "Argus AI Secure protects your system by requiring physical security keys (like YubiKeys) alongside standard logins. Uniquely, the smart assistant only unlocks advanced features when a key is plugged in, ensuring powerful tools are restricted to authorized users who are physically present.",
    features: [
        "Login verification using physical security keys",
        "Instant detection of connected USB hardware",
        "AI assistant with elevated capability via hardware keys",
        "Secure file encryption locked by the hardware key"
    ],
    url: "https://i.postimg.cc/6pw37cg7/Argus-AI-Light.png",
    demoLink: "https://argus-ai-secure-poc.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "mt--30",
    techStack: ["Next.js", "Tailwind CSS", "Flask", "PostgreSQL", "Vercel AI SDK with Groq"],
  },
  {
    id: "3",
    title: "Sonic AI",
    subTitle: "Advanced Voice Cloning Technology",
    description:
      "A powerful web application that provides instant voice cloning and synthesis through a simple, accessible interface.",
    problem: "Voice cloning technology has often been inaccessible, complex, or expensive for the average user. Creating natural-sounding digital voices typically required professional equipment and deep technical knowledge, leaving content creators and developers with robotic text-to-speech alternatives.",
    solution: "Sonic AI leverages advanced machine learning to capture the 'vocal DNA' of any speaker—analyzing tone, pitch, and emotional cadence. By using the Coqui TTS engine, it allows anyone to clone a voice from a simple 15-30 second sample and generate authentic, human-like speech relative to the original identity.",
    features: [
        "Instant voice cloning from short samples (15-30s)",
        "Vocal DNA extraction (tone, pitch, emotion)",
        "Real-time synthesis with Coqui TTS",
        "High-quality audio export in multiple formats"
    ],
    url: "https://i.postimg.cc/8csb8WL3/Sonic-AI-Light.png",
    demoLink: "https://sonicai.vercel.app/",
    width: 600,
    height: 400,
    marginClass: "",
    techStack: ["Next.js", "FastAPI", "Coqui TTS", "FFmpeg", "Docker"],
  },
  {
    id: "4",
    title: "ThreeP Property Manager",
    subTitle: "Simplify Your Real Estate Operations",
    description:
      "A streamlined solution for managing multiple properties from a single dashboard.",
    problem: "Property managers were drowning in paperwork, using disparate spreadsheets for tenant tracking, maintenance requests, and payments. This led to errors and missed rent collections.",
    solution: "ThreeP Property Manager centralizes all operations. It provides a tenant portal for easy payments and requests, and an admin dashboard for financial tracking. The system automates lease renewals and payment reminders.",
    features: [
        "Automated rent invoicing and collection",
        "Maintenance request ticketing system",
        "Tenant screening and lease generation",
        "Financial reporting and analytics"
    ],
    url: "https://i.postimg.cc/DzdncBLy/ThreeP.png",
    demoLink: "https://threepmanager.web.app/",
    width: 600,
    height: 400,
    marginClass: "mt--30",
    techStack: ["Angular", "Java", "SpringBoot", "MySQL"],
  },
  {
    id: "5",
    title: "RhoPAY",
    subTitle: "Hassle-Free Payroll Management",
    description:
      "An automated payroll tool that simplifies salary management and tax calculations.",
    problem: "For many businesses, managing payroll is a complex administrative burden. Navigating ever-changing tax regulations while relying on manual spreadsheet calculations often leads to costly errors, compliance risks, and significant time wastage.",
    solution: "RhoPAY automates the complete payroll processing lifecycle. It ensures real-time compliance with Kenyan tax laws by automatically calculating all statutory deductions. The system streamlines payments through bank integration and generates instant reports for tax authorities.",
    features: [
        "Automatic PAYE, NSSF, NHIF calculations",
        "Direct bank disbursement integration",
        "Statutory report generation for KRA",
        "Employee self-service portal for payslips"
    ],
    url: "https://i.postimg.cc/05Vh3NDw/Rhokit.png",
    demoLink: "https://rhokit-seal.web.app/",
    width: 600,
    height: 400,
    marginClass: "",
    techStack: ["React JS", "Bootstrap 5", "Firebase"],
  },
];
