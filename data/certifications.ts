export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image: string; // URL or path to logo
  description?: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "InfoSec",
    date: "2024",
    image: "https://i.postimg.cc/25gPH4gR/AWS-Certified-Cloud-Practitioner.png",
    url: "#",
  },
  {
    id: "2",
    title: "CCNA Cisco Certified Essentials",
    issuer: "InfoSec",
    date: "2024",
    image: "https://i.postimg.cc/HW0bkTYC/CCNA-Cisco-Certified-Essentials.png",
    url: "#",
  },
  {
    id: "3",
    title: "CompTIA Cloud Essentials",
    issuer: "LinkedIn Learning",
    date: "2024",
    image: "https://i.postimg.cc/0QDXNhj9/Comp-TIA-Cloud-Essentials.jpg",
    url: "#",
  },
  // Add more certifications here
];
