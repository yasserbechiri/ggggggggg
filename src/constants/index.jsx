import { BotMessageSquare } from "lucide-react";

import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";




import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [

  { label: "Workflow", href: "#" },
  { label: "feature implementation", href: "#" },
  { label: "benefits", href: "#" },
];

export const testimonials = [
  
  {
    user: "Hmaida",
    company: "autoecole",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "yasser",
    company: "autoecole2",
    image: user3,
    text: "The new website design is fresh and modern, making navigation a delight. It's so easy to find the information I need about driving courses, and the interactive features make the whole experience engaging!"
  }
    
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Facilitating user interaction",
    description:
      "Using technology to simplify and enhance the user experience..",
  },
  {
    icon: <Fingerprint />,
    text: "Ease of search and control",
    description:
      "Providing tools and methods to easily find nad control the  information.",
  },
  {
    icon: <ShieldHalf />,
    text: "Good organization of information:",
    description:
      "Structuring and categorizing information in a way that is easy to navigate and manage.",
  },
  
   
   
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  }
];

export const pricingOptions = [
  {
    title: "location",
  
    features: [
    ]
  },
  {
    title: "notification",
   
    features: [
      
    ],
  },
  {
    title: "mode payement",
   
    features: [
      
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
