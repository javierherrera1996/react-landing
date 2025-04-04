import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social} from './dataDef';

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
  name: `AI Agent Developer & Data Scientist | Especialista en LangChain y LangGraph`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Como <strong className="text-stone-100">AI Agent Developer y Data Scientist</strong>, ayudo a empresas a
        transformar sus datos en soluciones inteligentes que impulsan el crecimiento y la innovación.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Especializado en <strong className="text-stone-100">LangChain y LangGraph</strong>, desarrollo sistemas que mejoran la experiencia
        del cliente y optimizan procesos empresariales mediante la implementación de agentes inteligentes y soluciones de IA avanzadas.
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
  description: `AI Agent Developer y Data Scientist especializado en el desarrollo de soluciones de Inteligencia Artificial utilizando frameworks de vanguardia como LangChain y LangGraph. Con más de 5 años de experiencia en la implementación de sistemas de IA para finanzas, salud y seguros. Mi enfoque se centra en la creación de agentes inteligentes que automatizan procesos complejos y mejoran la experiencia del cliente. Combino conocimientos técnicos avanzados con una profunda comprensión de las necesidades empresariales para entregar soluciones de IA que generan valor tangible y medible.`,
  aboutItems: [
    {label: 'Location', text: 'Colombia', Icon: MapIcon},
    {label: 'Email', text: 'andreshebe96@gmail.com', Icon: EnvelopeIcon},
    {label: 'Phone', text: '+57 301 610 3759', Icon: PhoneIcon},
    {label: 'LinkedIn', text: 'javierherrerab', Icon: LinkIcon},
    {label: 'GitHub', text: 'javierherrera1996', Icon: CodeBracketIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Python', level: 10},
      {name: 'R', level: 9},
      {name: 'SQL', level: 8},
    ],
  },
  {
    name: 'AI & ML Frameworks',
    skills: [
      {name: 'LangChain', level: 8},
      {name: 'LangGraph', level: 7},
      {name: 'TensorFlow', level: 8},
      {name: 'PyTorch', level: 8},
    ],
  },
  {
    name: 'Cloud & Big Data',
    skills: [
      {name: 'GCP', level: 8},
      {name: 'Azure', level: 7},
      {name: 'AWS', level: 8},
      {name: 'Spark/PySpark', level: 7},
    ],
  },
  {
    name: 'Tools & Methodologies',
    skills: [
      {name: 'Data Visualization', level: 8},
      {name: 'NLP', level: 8},
      {name: 'Web Scraping', level: 7},
      {name: 'Predictive Modeling', level: 8},
      {name: 'Conversational AI', level: 8},
      {name: 'Prompt Engineering', level: 8},
      {name: 'Agile & Design Thinking', level: 7},
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI Call Analysis System',
    description:
      'Developed an AI-driven call analysis system leveraging LangChain and LangGraph that reduced manual review time by 30%.',
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
      text: 'andeshebe96@gmail.com',
      href: 'mailto:andeshebe96@gmail.com',
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
      href: 'https://twitter.com/JaHeBe',
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

export const recommendations = [
  {
    title: 'Artículos de AI Engineering',
    items: [
      {
        title: 'LangChain: Construyendo Agentes Inteligentes',
        description: 'Guía completa sobre cómo utilizar LangChain para desarrollar agentes conversacionales avanzados y sistemas RAG.',
        url: 'https://python.langchain.com/docs/get_started/introduction',
        icon: 'fa-robot',
      },
      {
        title: 'LangGraph: Flujos de Trabajo para Agentes IA',
        description: 'Tutorial sobre la implementación de flujos de trabajo complejos con LangGraph para crear agentes multi-paso.',
        url: 'https://github.com/langchain-ai/langgraph',
        icon: 'fa-project-diagram',
      },
      {
        title: 'RAG: Mejores Prácticas 2024',
        description: 'Estrategias actualizadas para implementar sistemas de Retrieval Augmented Generation con mayor precisión y eficiencia.',
        url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/',
        icon: 'fa-magnifying-glass-chart',
      },
      {
        title: 'Prompt Engineering Avanzado',
        description: 'Técnicas avanzadas para diseñar prompts efectivos que maximizan el rendimiento de los modelos de lenguaje.',
        url: 'https://www.promptingguide.ai/',
        icon: 'fa-pencil-alt',
      },
      {
        title: 'Evaluación de Agentes IA',
        description: 'Metodologías para evaluar el rendimiento y la confiabilidad de agentes de IA en entornos de producción.',
        url: 'https://www.anthropic.com/index/evaluating-ai-systems',
        icon: 'fa-chart-line',
      },
      {
        title: 'Arquitecturas de Agentes Multi-Agente',
        description: 'Diseño de sistemas donde múltiples agentes colaboran para resolver problemas complejos.',
        url: 'https://arxiv.org/abs/2401.05596',
        icon: 'fa-users',
      }
    ]
  }
];
