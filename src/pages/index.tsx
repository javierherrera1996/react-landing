import React from 'react';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { recommendations } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

// Importación dinámica de componentes con animaciones
const HeroSectionDynamic = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[80vh] flex items-center justify-center bg-primary">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl text-white-safe font-medium">Cargando...</h2>
      </div>
    </div>
  )
});

const SkillsSectionDynamic = dynamic(() => import('../components/SkillsSection'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] bg-primary-dark"></div>
});

const ExperienceSectionDynamic = dynamic(() => import('../components/ExperienceSection'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] bg-primary"></div>
});

const ProfileSection = dynamic(() => import('../components/ProfileSection'), {
  ssr: false
});

const UseCasesSection = dynamic(() => import('../components/UseCasesSection'), {
  ssr: false
});

const EducationSection = dynamic(() => import('../components/EducationSection'), {
  ssr: false
});

const ContactSection = dynamic(() => import('../components/ContactSection'), {
  ssr: false
});

// Importar el componente de recomendaciones
const RecommendationsSection = dynamic(() => import('../components/RecommendationsSection'), {
  ssr: false
});

// 1. Definir tipos estrictos para los datos principales

type Skill = { name: string; level: number; icon: string };
type SkillCategory = { name: string; skills: Skill[] };
type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string;
};
type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
};
type ResumeData = {
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  experience: {
    title: string;
    subtitle: string;
    experiences: Experience[];
  };
  education: {
    title: string;
    subtitle: string;
    items: EducationItem[];
  };
};
type ProfileData = {
  title: string;
  content: string;
  portfolioLink?: string;
};
type UseCase = {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
};
type UseCasesData = {
  title: string;
  subtitle: string;
  useCases: UseCase[];
};

// 2. Duplicar los datos en inglés
const resumeDataEn: ResumeData = {
  hero: {
    headline: "AI Agent Developer & Data Scientist | LangChain & LangGraph Specialist",
    subheadline: "Expert consultant in Artificial Intelligence and Machine Learning for finance, healthcare, and insurance. I develop intelligent agents with cutting-edge frameworks like LangChain and LangGraph to automate processes and enhance customer experience.",
    ctaText: "Contact Me",
    ctaLink: "/contact",
    backgroundImage: "/images/pattern-bg.jpg"
  },
  skills: {
    title: "Technical Skills",
    subtitle: "Competencies and technologies I use to deliver effective AI solutions",
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Python", level: 95, icon: "fab fa-python" },
          { name: "R", level: 90, icon: "fas fa-code" },
          { name: "SQL", level: 85, icon: "fas fa-database" }
        ]
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "LangChain", level: 90, icon: "fas fa-link" },
          { name: "LangGraph", level: 85, icon: "fas fa-project-diagram" },
          { name: "TensorFlow", level: 80, icon: "fas fa-brain" },
          { name: "PyTorch", level: 75, icon: "fas fa-fire" }
        ]
      },
      {
        name: "Cloud & Big Data",
        skills: [
          { name: "GCP", level: 85, icon: "fab fa-google" },
          { name: "Azure", level: 80, icon: "fab fa-microsoft" },
          { name: "AWS", level: 75, icon: "fab fa-aws" },
          { name: "Spark/PySpark", level: 80, icon: "fas fa-bolt" }
        ]
      },
      {
        name: "Tools & Methodologies",
        skills: [
          { name: "Data Visualization", level: 90, icon: "fas fa-chart-bar" },
          { name: "NLP", level: 95, icon: "fas fa-comment-dots" },
          { name: "Web Scraping", level: 85, icon: "fas fa-spider" },
          { name: "Prompt Engineering", level: 90, icon: "fas fa-pencil-alt" },
          { name: "Agile Methodologies", level: 85, icon: "fas fa-tasks" },
          { name: "Version Control (Git)", level: 90, icon: "fab fa-git-alt" }
        ]
      }
    ]
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey in developing AI solutions and data analysis",
    experiences: [
      {
        title: "Cognitive Analytics Specialist, AI Consultant & AI Agent Developer, Senior Data Scientist",
        company: "Banco Davivienda",
        period: "Aug 2021 - Present",
        description: "Lead the consolidation of roles, integrating data pipelines for text, voice, and conversational agents analysis. Developed AI-based call analysis systems and conversational agent prototypes using LangChain (RAG implementation) and LangGraph, reducing manual review time by 30%. Provided AI consulting services and implemented prompt engineering strategies to optimize customer service interactions.",
        technologies: ["LangChain", "LangGraph", "Python", "NLP", "Prompt Engineering", "RAG", "ML"],
        logo: "/images/company-davivienda.png"
      },
      {
        title: "Adjunct Professor & AI Consultant",
        company: "Universidad Sergio Arboleda",
        period: "Apr 2024 - Present",
        description: "Teach undergraduate courses in: Predictive Methods, Marketing Analytics, and Data Analytics.",
        technologies: ["Python", "R", "Data Analytics", "Predictive Models", "Teaching"],
        logo: "/images/company-usa.png"
      },
      {
        title: "Data Scientist & Research Assistant",
        company: "Various Institutions",
        period: "2019 - 2021",
        description: "At iData-Advance Analytics: Designed segmentation and demand forecasting models for retail and healthcare sectors, improving forecast accuracy by 15%. At UC Berkeley: Conducted research on Text Mining and NLP, optimizing literature classification by 40%. At Caritas Colombianas: Managed large datasets and developed interactive dashboards using R and Python. As a Teaching and Research Assistant at Pontificia Universidad Javeriana: Assisted in data analysis and economics courses.",
        technologies: ["Python", "R", "Text Mining", "NLP", "Data Visualization", "Statistical Models"],
        logo: "/images/company-various.png"
      }
    ]
  },
  education: {
    title: "Education & Certifications",
    subtitle: "Academic background and professional certifications",
    items: [
      {
        title: "Master's Degree in Economics",
        institution: "University of The Andes, Colombia",
        period: "2023 - Present",
        description: "Graduate studies in economics with a focus on data analysis and economic policy."
      },
      {
        title: "Bachelor's Degree in Economics",
        institution: "Pontificia Xavierian University, Colombia",
        period: "2015 - 2020",
        description: "Training in economics with an emphasis on quantitative analysis and public policy."
      },
      {
        title: "Summer School in Chicago (Business Program)",
        institution: "U. Loyola Chicago, USA",
        period: "2023",
        description: "Intensive program in business and international economics."
      },
      {
        title: "EF Course Abroad",
        institution: "Manchester, UK",
        period: "2023",
        description: "C1 English certification."
      },
      {
        title: "MBA Fundamentals",
        institution: "LSE",
        period: "2023",
        description: "Business administration fundamentals."
      },
      {
        title: "IBM Data Science Professional Certificate",
        institution: "IBM",
        period: "2023",
        description: "Professional certification in data science."
      },
      {
        title: "IBM AI Engineering Professional Certificate",
        institution: "IBM",
        period: "2023",
        description: "Professional certification in AI engineering."
      },
      {
        title: "DS4A",
        institution: "Correlation One",
        period: "2023",
        description: "Data science program for Latin America."
      }
    ]
  }
};

const profileDataEn: ProfileData = {
  title: "Professional Profile",
  content: "As an AI Agent Developer and Data Scientist with over 5 years of experience, I specialize in developing advanced Artificial Intelligence solutions using cutting-edge frameworks like LangChain and LangGraph. My focus is on creating intelligent agents that automate complex processes and enhance customer experience in sectors such as finance, healthcare, and insurance. I combine deep technical knowledge in machine learning, natural language processing, and AI architectures with a strong understanding of business needs. My experience ranges from designing and implementing RAG (Retrieval Augmented Generation) systems to developing advanced conversational agents and predictive analytics solutions. Additionally, as an adjunct professor, I share my knowledge with the next generation of AI professionals, teaching courses on predictive methods and data analytics. My goal is to continue driving innovation in the AI field, creating solutions that generate tangible and measurable value for organizations.",
  portfolioLink: undefined
};

const useCasesDataEn: UseCasesData = {
  title: "AI Solutions to Transform Your Business",
  subtitle: "Practical use cases where our AI Engineering solutions generate real value",
  useCases: [
    {
      icon: "fa-robot",
      title: "Intelligent Conversational Agents",
      description: "Advanced virtual assistants powered by LangChain and LangGraph that can interact with your systems, answer complex questions, and execute tasks.",
      benefits: [
        "24/7 customer support with advanced capabilities",
        "Up to 40% reduction in support costs",
        "Access to contextual and personalized information"
      ]
    },
    {
      icon: "fa-magnifying-glass-chart",
      title: "Intelligent Document Analysis",
      description: "RAG (Retrieval Augmented Generation) systems that extract valuable information from corporate documents, contracts, reports, and knowledge bases.",
      benefits: [
        "Advanced semantic search in internal documents",
        "Automated summary and insight generation",
        "Accurate answers based on your documentation"
      ]
    },
    {
      icon: "fa-brain",
      title: "Process Automation with AI",
      description: "Intelligent workflows that combine LLMs, data analysis, and existing systems to automate complex processes requiring reasoning.",
      benefits: [
        "Reduction of repetitive manual tasks by 70%",
        "Greater accuracy in processes requiring judgment",
        "Scalability to handle variable volumes"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Advanced Predictive Analytics",
      description: "Machine learning models to forecast trends, customer behaviors, and business outcomes based on historical and current data.",
      benefits: [
        "Anticipate market and demand changes",
        "Proactive optimization of inventories and resources",
        "Early identification of opportunities and risks"
      ]
    },
    {
      icon: "fa-comments",
      title: "Natural Language Processing",
      description: "Sentiment analysis, entity extraction, text classification, and content generation to extract value from unstructured data.",
      benefits: [
        "Understanding customer feedback at scale",
        "Automatic classification of communications",
        "Generation of personalized and coherent content"
      ]
    },
    {
      icon: "fa-code",
      title: "Prompt Engineering Consulting",
      description: "Optimize LLM interactions through expert prompt design that improves the quality, relevance, and safety of responses.",
      benefits: [
        "Significant improvement in response accuracy",
        "Reduction of bias and problematic content",
        "Customization for specific use cases"
      ]
    }
  ]
};

// Datos personalizados basados en tu CV
const resumeData: ResumeData = {
  hero: {
    headline: "AI Agent Developer & Data Scientist | Especialista en LangChain y LangGraph",
    subheadline: "Consultor experto en Inteligencia Artificial y Machine Learning para finanzas, salud y seguros. Desarrollo de agentes inteligentes con frameworks de vanguardia como LangChain y LangGraph para automatizar procesos y mejorar la experiencia del cliente.",
    ctaText: "Contactarme",
    ctaLink: "/contacto",
    backgroundImage: "/images/pattern-bg.jpg"
  },
  skills: {
    title: "Habilidades Técnicas",
    subtitle: "Competencias y tecnologías que utilizo para entregar soluciones de IA efectivas",
    categories: [
      {
        name: "Lenguajes de Programación",
        skills: [
          { name: "Python", level: 95, icon: "fab fa-python" },
          { name: "R", level: 90, icon: "fas fa-code" },
          { name: "SQL", level: 85, icon: "fas fa-database" }
        ]
      },
      {
        name: "Frameworks & Librerías",
        skills: [
          { name: "LangChain", level: 90, icon: "fas fa-link" },
          { name: "LangGraph", level: 85, icon: "fas fa-project-diagram" },
          { name: "TensorFlow", level: 80, icon: "fas fa-brain" },
          { name: "PyTorch", level: 75, icon: "fas fa-fire" }
        ]
      },
      {
        name: "Cloud & Big Data",
        skills: [
          { name: "GCP", level: 85, icon: "fab fa-google" },
          { name: "Azure", level: 80, icon: "fab fa-microsoft" },
          { name: "AWS", level: 75, icon: "fab fa-aws" },
          { name: "Spark/PySpark", level: 80, icon: "fas fa-bolt" }
        ]
      },
      {
        name: "Herramientas & Metodologías",
        skills: [
          { name: "Visualización de Datos", level: 90, icon: "fas fa-chart-bar" },
          { name: "NLP", level: 95, icon: "fas fa-comment-dots" },
          { name: "Web Scraping", level: 85, icon: "fas fa-spider" },
          { name: "Prompt Engineering", level: 90, icon: "fas fa-pencil-alt" },
          { name: "Metodologías Ágiles", level: 85, icon: "fas fa-tasks" },
          { name: "Control de Versiones (Git)", level: 90, icon: "fab fa-git-alt" }
        ]
      }
    ]
  },
  experience: {
    title: "Experiencia Profesional",
    subtitle: "Mi trayectoria en el desarrollo de soluciones de IA y análisis de datos",
    experiences: [
      {
        title: "Especialista en Analítica Cognitiva, Consultor de IA & Desarrollador de Agentes IA, Senior Data Scientist",
        company: "Banco Davivienda",
        period: "Ago 2021 - Presente",
        description: "Lidero la consolidación de roles, integrando pipelines de datos para análisis de texto, voz y agentes conversacionales. Desarrollo sistemas de análisis de llamadas basados en IA y prototipos de agentes conversacionales utilizando LangChain (implementación RAG) y LangGraph, reduciendo el tiempo de revisión manual en un 30%. Proporciono servicios de consultoría en IA e implemento estrategias de prompt engineering para optimizar las interacciones de servicio al cliente.",
        technologies: ["LangChain", "LangGraph", "Python", "NLP", "Prompt Engineering", "RAG", "ML"],
        logo: "/images/company-davivienda.png"
      },
      {
        title: "Profesor Adjunto & Consultor de IA",
        company: "Universidad Sergio Arboleda",
        period: "Abr 2024 - Presente",
        description: "Imparto cursos a estudiantes de pregrado en: Métodos Predictivos, Marketing Analytics y Data Analytics.",
        technologies: ["Python", "R", "Data Analytics", "Predictive Models", "Teaching"],
        logo: "/images/company-usa.png"
      },
      {
        title: "Data Scientist & Asistente de Investigación",
        company: "Varias Instituciones",
        period: "2019 - 2021",
        description: "En iData-Advance Analytics: Diseñé modelos de segmentación y previsión de demanda para los sectores minorista y de salud, mejorando la precisión de las previsiones en un 15%. En UC Berkeley: Realicé investigaciones sobre Text Mining y NLP, optimizando la clasificación de literatura en un 40%. En Caritas Colombianas: Gestioné grandes conjuntos de datos y desarrollé dashboards interactivos usando R y Python. Como Asistente de Enseñanza e Investigación en la Pontificia Universidad Javeriana: Asistí en cursos de análisis de datos y economía.",
        technologies: ["Python", "R", "Text Mining", "NLP", "Data Visualization", "Statistical Models"],
        logo: "/images/company-various.png"
      }
    ]
  },
  education: {
    title: "Educación y Certificaciones",
    subtitle: "Formación académica y certificaciones profesionales",
    items: [
      {
        title: "Master's Degree in Economics",
        institution: "University of The Andes, Colombia",
        period: "2023 - Presente",
        description: "Estudios de posgrado en economía con enfoque en análisis de datos y políticas económicas."
      },
      {
        title: "Bachelor's Degree in Economics",
        institution: "Pontificia Xavierian University, Colombia",
        period: "2015 - 2020",
        description: "Formación en economía con énfasis en análisis cuantitativo y políticas públicas."
      },
      {
        title: "Summer School in Chicago (Business Program)",
        institution: "U. Loyola Chicago, USA",
        period: "2023",
        description: "Programa intensivo de negocios y economía internacional."
      },
      {
        title: "EF Course Abroad",
        institution: "Manchester, UK",
        period: "2023",
        description: "Certificación C1 en inglés."
      },
      {
        title: "MBA Fundamentals",
        institution: "LSE",
        period: "2023",
        description: "Fundamentos de administración de negocios."
      },
      {
        title: "IBM Data Science Professional Certificate",
        institution: "IBM",
        period: "2023",
        description: "Certificación profesional en ciencia de datos."
      },
      {
        title: "IBM AI Engineering Professional Certificate",
        institution: "IBM",
        period: "2023",
        description: "Certificación profesional en ingeniería de IA."
      },
      {
        title: "DS4A",
        institution: "Correlation One",
        period: "2023",
        description: "Programa de ciencia de datos para América Latina."
      }
    ]
  }
};

const profileData: ProfileData = {
  title: "Perfil Profesional",
  content: "Como AI Agent Developer y Data Scientist con más de 5 años de experiencia, me especializo en el desarrollo de soluciones de Inteligencia Artificial avanzadas utilizando frameworks de vanguardia como LangChain y LangGraph. Mi enfoque se centra en la creación de agentes inteligentes que automatizan procesos complejos y mejoran la experiencia del cliente en sectores como finanzas, salud y seguros. Combino conocimientos técnicos profundos en machine learning, procesamiento de lenguaje natural y arquitecturas de IA con una sólida comprensión de las necesidades empresariales. Mi experiencia abarca desde el diseño e implementación de sistemas RAG (Retrieval Augmented Generation) hasta el desarrollo de agentes conversacionales avanzados y soluciones de análisis predictivo. Además, como profesor adjunto, comparto mi conocimiento con la próxima generación de profesionales en IA, impartiendo cursos sobre métodos predictivos y análisis de datos. Mi objetivo es seguir impulsando la innovación en el campo de la IA, creando soluciones que generen valor tangible y medible para las organizaciones.",
  portfolioLink: undefined
};

// Agregar sección de casos de uso para mejora SEO
const useCasesData: UseCasesData = {
  title: "Soluciones de IA para Transformar su Negocio",
  subtitle: "Casos de uso prácticos donde nuestras soluciones de AI Engineering generan valor real",
  useCases: [
    {
      icon: "fa-robot",
      title: "Agentes Conversacionales Inteligentes",
      description: "Asistentes virtuales avanzados potenciados por LangChain y LangGraph que pueden interactuar con sus sistemas, responder preguntas complejas y ejecutar tareas.",
      benefits: [
        "Atención al cliente 24/7 con capacidades avanzadas",
        "Reducción de hasta 40% en costos de soporte",
        "Acceso a información contextual y personalizada"
      ]
    },
    {
      icon: "fa-magnifying-glass-chart",
      title: "Análisis Inteligente de Documentos",
      description: "Sistemas RAG (Retrieval Augmented Generation) que extraen información valiosa de documentos corporativos, contratos, informes y bases de conocimiento.",
      benefits: [
        "Búsqueda semántica avanzada en documentos internos",
        "Generación de resúmenes e insights automatizados",
        "Respuestas precisas basadas en su documentación"
      ]
    },
    {
      icon: "fa-brain",
      title: "Automatización de Procesos con IA",
      description: "Flujos de trabajo inteligentes que combinan LLMs, análisis de datos y sistemas existentes para automatizar procesos complejos que requieren razonamiento.",
      benefits: [
        "Reducción de tareas manuales repetitivas en un 70%",
        "Mayor precisión en procesos que requieren juicio",
        "Escalabilidad para manejar volúmenes variables"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Análisis Predictivo Avanzado",
      description: "Modelos de machine learning para prever tendencias, comportamientos de clientes y resultados de negocio basados en datos históricos y actuales.",
      benefits: [
        "Anticipación a cambios del mercado y demanda",
        "Optimización proactiva de inventarios y recursos",
        "Identificación temprana de oportunidades y riesgos"
      ]
    },
    {
      icon: "fa-comments",
      title: "Procesamiento de Lenguaje Natural",
      description: "Análisis de sentimiento, extracción de entidades, clasificación de texto y generación de contenido para obtener valor de datos no estructurados.",
      benefits: [
        "Comprensión de feedback de clientes a escala",
        "Clasificación automática de comunicaciones",
        "Generación de contenido personalizado y coherente"
      ]
    },
    {
      icon: "fa-code",
      title: "Consultoría en Prompt Engineering",
      description: "Optimización de interacciones con LLMs mediante el diseño experto de prompts que mejoran la calidad, relevancia y seguridad de las respuestas.",
      benefits: [
        "Mejora significativa en la precisión de respuestas",
        "Reducción de sesgos y contenido problemático",
        "Personalización para casos de uso específicos"
      ]
    }
  ]
};

const HomePage: React.FC = () => {
  const { language: lang, setLanguage: setLang } = useLanguage();

  const resume = lang === 'es' ? resumeData : resumeDataEn;
  const profile = lang === 'es' ? profileData : profileDataEn;
  const useCases = lang === 'es' ? useCasesData : useCasesDataEn;

  return (
    <Layout>
      {/* Botón para cambiar idioma */}
      <div className="fixed top-14 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="px-4 py-2 bg-accent text-white rounded shadow"
        >
          {lang === 'es' ? 'English' : 'Español'}
        </button>
      </div>
      <HeroSectionDynamic {...resume.hero} />
      <ProfileSection {...profile} />
      <SkillsSectionDynamic {...resume.skills} />
      <UseCasesSection {...useCases} />
      <ExperienceSectionDynamic {...resume.experience} />
      <EducationSection {...resume.education} />
      {recommendations && recommendations.length > 0 && recommendations[0] && (
        <RecommendationsSection 
          title={lang === 'es' ? 'Artículos de AI Engineering' : 'AI Engineering Articles'}
          items={recommendations[0].items || []} 
        />
      )}
      <ContactSection 
        title={lang === 'es' ? 'Contacto' : 'Contact'}
        subtitle={lang === 'es' ? '¿Interesado en colaborar? Estoy disponible para proyectos de consultoría en IA, desarrollo de agentes inteligentes y análisis de datos avanzados.' : 'Interested in collaborating? I am available for consulting projects in AI, intelligent agent development, and advanced data analysis.'}
        email="andeshebe96@gmail.com"
        socialLinks={[
          {
            platform: "GitHub",
            url: "https://github.com/javierherrera1996",
            icon: "fab fa-github"
          },
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/javierherrerab",
            icon: "fab fa-linkedin"
          }
        ]}
      />
    </Layout>
  );
};

export default HomePage;
