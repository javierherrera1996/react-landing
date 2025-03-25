import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

export const homepageMeta: HomepageMeta = {
  title: 'Javier Herrera | Data Scientist & AI Specialist',
  description: 'Personal website of Javier Herrera, a Data Scientist and AI Specialist based in Colombia.',
  ogImageUrl: 'https://javierherrera1996.github.io/og-image.jpg',
  twitterCardType: 'summary_large',
  twitterSite: '@javierherrera',
  twitterCreator: '@javierherrera',
  twitterDomain: 'javierherrera1996.github.io',
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Transformando Datos en Soluciones Inteligentes`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Como <strong className="text-stone-100">Data Scientist y Especialista en IA</strong>, ayudo a empresas a 
        transformar sus datos en soluciones inteligentes que impulsan el crecimiento y la innovación.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Especializado en <strong className="text-stone-100">Procesamiento de Lenguaje Natural</strong> y{' '}
        <strong className="text-stone-100">IA Conversacional</strong>, desarrollo sistemas que mejoran la 
        experiencia del cliente y optimizan procesos empresariales.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Descargar CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${ContactType.Email}`,
      text: 'Contactar Ahora',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Data Scientist and AI Specialist with expertise in Natural Language Processing and Conversational AI. 
  I have worked on various projects involving text analysis, voice analysis, and AI-driven solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Colombia', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Colombian', Icon: FlagIcon},
    {label: 'Interests', text: 'Muay Thai, Music, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'University of The Andes', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Banco Davivienda', Icon: BuildingOffice2Icon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 10 },
      { name: 'R', level: 9 },
      { name: 'SQL', level: 8 },
    ],
  },
  {
    name: 'AI & ML Frameworks',
    skills: [
      { name: 'LangChain', level: 8 },
      { name: 'LangGraph', level: 7 },
      { name: 'TensorFlow', level: 8 },
      { name: 'PyTorch', level: 8 },
    ],
  },
  {
    name: 'Cloud & Big Data',
    skills: [
      { name: 'GCP', level: 8 },
      { name: 'Azure', level: 7 },
      { name: 'AWS', level: 8 },
      { name: 'Spark/PySpark', level: 7 },
    ],
  },
  {
    name: 'Tools & Methodologies',
    skills: [
      { name: 'Data Visualization', level: 8 },
      { name: 'NLP', level: 8 },
      { name: 'Web Scraping', level: 7 },
      { name: 'Predictive Modeling', level: 8 },
      { name: 'Conversational AI', level: 8 },
      { name: 'Prompt Engineering', level: 8 },
      { name: 'Agile & Design Thinking', level: 7 },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI Call Analysis System',
    description: 'Developed an AI-driven call analysis system leveraging LangChain and LangGraph that reduced manual review time by 30%.',
    url: 'https://javierherrera1996.github.io',
    image: portfolioImage1,
  },
];

export const education: TimelineItem[] = [
  {
    date: "2023 – Present",
    location: "University of The Andes, Colombia",
    title: "Master's Degree in Economics",
    content: <p>Pursuing advanced studies with a focus on economic theory and its applications in data science.</p>,
  },
  {
    date: "2015 – 2020",
    location: "Pontificia Xavierian University, Colombia",
    title: "Bachelor's Degree in Economics",
    content: <p>Developed a strong foundation in economics complemented by data analysis techniques.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: "Aug 2021 – Present",
    location: "Banco Davivienda",
    title: "Cognitive Analytics Specialist, AI Consultant & AI Agent Developer, Senior Data Scientist",
    content: (
      <p>
        Led consolidation of roles and integrated data pipelines for text, voice, and conversational agent analysis. Developed AI-driven call analysis systems and prototypes using LangChain and LangGraph, reducing manual review time by 30% and increasing first-contact resolution by 20%.
      </p>
    ),
  },
  {
    date: "Apr 2024 – Present",
    location: "Universidad Sergio Arboleda",
    title: "Adjunct Professor & AI Consultant",
    content: (
      <p>
        Teaching undergraduate courses in Predictive Methods, Marketing Analytics, and Data Analytics while consulting on AI projects.
      </p>
    ),
  },
  {
    date: "2019 – 2021",
    location: "Various Institutions",
    title: "Data Scientist & Research Assistant",
    content: (
      <p>
        Designed segmentation and demand forecasting models for the retail and healthcare sectors, conducted research on NLP and text mining, and developed interactive dashboards.
      </p>
    ),
  },
];

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you have any questions or would like to discuss potential collaborations.',
  items: [
    {
      type: ContactType.Email,
      text: 'javier.herrera@example.com',
      href: 'mailto:javier.herrera@example.com',
    },
    {
      type: ContactType.Location,
      text: 'Bogotá, Colombia',
      href: 'https://www.google.com/maps/place/Bogotá',
    },
    {
      type: ContactType.Github,
      text: 'javierherrera1996',
      href: 'https://github.com/javierherrera1996',
    },
    {
      type: ContactType.LinkedIn,
      text: 'javierherrera',
      href: 'https://www.linkedin.com/in/javierherrera',
    },
    {
      type: ContactType.Twitter,
      text: '@javierherrera',
      href: 'https://twitter.com/javierherrera',
    },
  ],
};

export const socialLinks: Social[] = [
  {
    label: 'Github',
    Icon: GithubIcon,
    href: 'https://github.com/javierherrera1996',
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/javierherrera',
  },
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/javierherrera',
  },
  {
    label: 'Twitter',
    Icon: TwitterIcon,
    href: 'https://twitter.com/javierherrera',
  },
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/javierherrera',
  },
]; 