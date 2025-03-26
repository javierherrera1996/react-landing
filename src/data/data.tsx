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

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Resume = 'resume',
  Portfolio = 'portfolio',
  Contact = 'contact',
}

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

export const experience = [
  {
    date: '2023 - Presente',
    title: 'Data Scientist Senior',
    location: 'Empresa Actual',
    content: (
      <ul>
        <li>Desarrollo de modelos de machine learning para predicción de demanda</li>
        <li>Implementación de sistemas de recomendación personalizados</li>
        <li>Liderazgo técnico en proyectos de IA</li>
      </ul>
    ),
  },
  {
    date: '2021 - 2023',
    title: 'Data Scientist',
    location: 'Empresa Anterior',
    content: (
      <ul>
        <li>Análisis de datos y visualización para toma de decisiones</li>
        <li>Desarrollo de modelos de clasificación y regresión</li>
        <li>Optimización de procesos de negocio mediante análisis de datos</li>
      </ul>
    ),
  },
];

export const education = [
  {
    date: '2019 - 2021',
    title: 'Máster en Ciencia de Datos',
    location: 'Universidad',
    content: (
      <ul>
        <li>Especialización en Machine Learning y Deep Learning</li>
        <li>Proyectos de investigación en NLP</li>
        <li>Tesis sobre modelos de lenguaje</li>
      </ul>
    ),
  },
  {
    date: '2015 - 2019',
    title: 'Grado en Ingeniería Informática',
    location: 'Universidad',
    content: (
      <ul>
        <li>Especialización en Inteligencia Artificial</li>
        <li>Proyectos de desarrollo de software</li>
        <li>Prácticas en empresas tecnológicas</li>
      </ul>
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