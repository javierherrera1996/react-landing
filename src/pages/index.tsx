import React from 'react';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { recommendations } from '../data/data';

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

const CtaSection = dynamic(() => import('../components/CtaSection'), {
  ssr: false
});

const ContactSection = dynamic(() => import('../components/ContactSection'), {
  ssr: false
});

// Importar el componente de recomendaciones
const RecommendationsSection = dynamic(() => import('../components/RecommendationsSection'), {
  ssr: false
});

// Datos personalizados basados en tu CV
const resumeData = {
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

const profileData = {
  title: "Perfil Profesional",
  content: "Como AI Agent Developer y Data Scientist con más de 5 años de experiencia, me especializo en el desarrollo de soluciones de Inteligencia Artificial avanzadas utilizando frameworks de vanguardia como LangChain y LangGraph. Mi enfoque se centra en la creación de agentes inteligentes que automatizan procesos complejos y mejoran la experiencia del cliente en sectores como finanzas, salud y seguros. Combino conocimientos técnicos profundos en machine learning, procesamiento de lenguaje natural y arquitecturas de IA con una sólida comprensión de las necesidades empresariales. Mi experiencia abarca desde el diseño e implementación de sistemas RAG (Retrieval Augmented Generation) hasta el desarrollo de agentes conversacionales avanzados y soluciones de análisis predictivo. Además, como profesor adjunto, comparto mi conocimiento con la próxima generación de profesionales en IA, impartiendo cursos sobre métodos predictivos y análisis de datos. Mi objetivo es seguir impulsando la innovación en el campo de la IA, creando soluciones que generen valor tangible y medible para las organizaciones.",
  portfolioLink: undefined
};

// Agregar sección de casos de uso para mejora SEO
const useCasesData = {
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
  return (
    <Layout>
      <HeroSectionDynamic {...resumeData.hero} />
      <ProfileSection {...profileData} />
      <SkillsSectionDynamic {...resumeData.skills} />
      <UseCasesSection {...useCasesData} />
      <ExperienceSectionDynamic {...resumeData.experience} />
      <EducationSection {...resumeData.education} />
      {recommendations && recommendations.length > 0 && recommendations[0] && (
        <RecommendationsSection 
          title="Artículos de AI Engineering" 
          items={recommendations[0].items || []} 
        />
      )}
      <ContactSection 
        title="Contacto"
        subtitle="¿Interesado en colaborar? Estoy disponible para proyectos de consultoría en IA, desarrollo de agentes inteligentes y análisis de datos avanzados."
        email="andeshebe96@gmail.com"
        socialLinks={[
          {
            platform: "GitHub",
            url: "https://github.com/javierherrera1996",
            icon: "fab fa-github"
          },
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/javierherrera",
            icon: "fab fa-linkedin"
          },
          {
            platform: "Twitter",
            url: "https://twitter.com/javierherrera",
            icon: "fab fa-twitter"
          }
        ]}
      />
    </Layout>
  );
};

export default HomePage;
