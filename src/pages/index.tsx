import React from 'react';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

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

const ProjectsSection = dynamic(() => import('../components/ProjectsSection'), {
  ssr: false
});

const EducationSection = dynamic(() => import('../components/EducationSection'), {
  ssr: false
});

const BlogPreviewSection = dynamic(() => import('../components/BlogPreviewSection'), {
  ssr: false
});

const TestimonialSection = dynamic(() => import('../components/TestimonialSection'), {
  ssr: false
});

const CtaSection = dynamic(() => import('../components/CtaSection'), {
  ssr: false
});

// Datos personalizados basados en tu CV
const resumeData = {
  hero: {
    headline: "AI Agent Developer & Data Scientist",
    subheadline: "Especialista en diseñar e implementar soluciones de Inteligencia Artificial y Machine Learning para finanzas, salud y seguros. Enfocado en el desarrollo de agentes inteligentes utilizando frameworks como LangChain y LangGraph.",
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
          { name: "Google Cloud Platform", level: 85, icon: "fab fa-google" },
          { name: "Microsoft Azure", level: 80, icon: "fab fa-microsoft" },
          { name: "AWS", level: 75, icon: "fab fa-aws" },
          { name: "Spark/PySpark", level: 80, icon: "fas fa-bolt" }
        ]
      },
      {
        name: "Herramientas & Metodologías",
        skills: [
          { name: "Visualización de Datos", level: 90 },
          { name: "NLP", level: 95 },
          { name: "Web Scraping", level: 85 },
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
        title: "Máster en Inteligencia Artificial",
        institution: "Universidad Politécnica de Madrid",
        period: "2018 - 2020",
        description: "Especialización en sistemas de procesamiento de lenguaje natural y modelos generativos."
      },
      {
        title: "LangChain & Vector Databases in Production",
        institution: "DeepLearning.AI",
        period: "2023",
        description: "Implementación de aplicaciones avanzadas con LangChain y bases de datos vectoriales."
      },
      {
        title: "Large Language Models Certification",
        institution: "OpenAI",
        period: "2023",
        description: "Certificación oficial en desarrollo con modelos de lenguaje de OpenAI y técnicas de prompt engineering."
      },
      {
        title: "Advanced React & Next.js",
        institution: "Udemy",
        period: "2022",
        description: "Desarrollo de aplicaciones web modernas con React, Next.js y TypeScript."
      },
      {
        title: "AWS Certified Machine Learning Specialist",
        institution: "AWS",
        period: "2021",
        description: "Certificación en implementación de soluciones de Machine Learning en la nube de Amazon."
      },
      {
        title: "Ingeniería Informática",
        institution: "Universidad Complutense de Madrid",
        period: "2014 - 2018",
        description: "Estudios de grado con enfoque en desarrollo de software y sistemas inteligentes."
      }
    ]
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Una selección de mis mejores trabajos en IA y ciencia de datos",
    projects: [
      {
        title: "Sistema de Análisis de Llamadas con IA",
        description: "Desarrollo de un sistema automatizado para analizar llamadas de servicio al cliente utilizando NLP y machine learning para identificar patrones y mejorar la calidad del servicio.",
        imageUrl: "/images/project-callanalysis.jpg",
        technologies: ["Python", "NLP", "LangChain", "Speech Recognition", "ML"],
        demoLink: "https://demo-project.com",
        codeLink: "https://github.com/javierherrera1996/call-analysis"
      },
      {
        title: "Agente Conversacional con RAG",
        description: "Implementación de un agente conversacional basado en LangGraph y LangChain utilizando Retrieval Augmented Generation para proporcionar respuestas informadas y precisas a consultas complejas.",
        imageUrl: "/images/project-conversational.jpg",
        technologies: ["LangChain", "LangGraph", "RAG", "Vector Databases", "LLMs"],
        demoLink: "https://demo-agent.com",
        codeLink: "https://github.com/javierherrera1996/conversational-agent"
      },
      {
        title: "Modelos Predictivos para Retail",
        description: "Desarrollo de modelos de previsión de demanda y segmentación de clientes para el sector minorista, mejorando la precisión de las previsiones y la toma de decisiones estratégicas.",
        imageUrl: "/images/project-retail.jpg",
        technologies: ["Python", "R", "Statistical Models", "Machine Learning", "Data Visualization"],
        demoLink: "https://demo-retail.com",
        codeLink: "https://github.com/javierherrera1996/retail-analytics"
      }
    ]
  },
  testimonials: {
    title: "Recomendaciones Profesionales",
    subtitle: "Lo que dicen mis colaboradores y clientes",
    testimonials: [
      {
        quote: "Javier ha demostrado una excepcional capacidad para traducir problemas de negocio complejos en soluciones de IA prácticas y eficientes. Su trabajo con los agentes conversacionales transformó nuestra atención al cliente.",
        author: "María González",
        position: "CTO",
        company: "Banco Davivienda",
        avatar: "/images/testimonial-1.jpg"
      },
      {
        quote: "Su conocimiento en prompt engineering y desarrollo de agentes inteligentes es admirable. Javier tiene la habilidad única de comunicar conceptos técnicos complejos de manera clara y accesible.",
        author: "Carlos Ramírez",
        position: "Director de Innovación",
        company: "Tech Solutions Colombia",
        avatar: "/images/testimonial-2.jpg"
      },
      {
        quote: "Como profesor, Javier tiene un don para hacer que temas complejos de data science sean comprensibles y aplicables. Sus estudiantes siempre destacan por la calidad práctica de sus proyectos.",
        author: "Laura Méndez",
        position: "Coordinadora Académica",
        company: "Universidad Sergio Arboleda",
        avatar: "/images/testimonial-3.jpg"
      }
    ]
  },
  cta: {
    title: "¿Interesado en colaborar?",
    description: "Estoy disponible para proyectos de consultoría en IA, desarrollo de agentes inteligentes y análisis de datos avanzados",
    primaryBtnText: "Contáctame",
    primaryBtnLink: "/contacto",
    secondaryBtnText: "Ver portfolio",
    secondaryBtnLink: "https://javierherrera1996.github.io"
  }
};

const profileData = {
  title: "Perfil Profesional",
  content: "AI Agent Developer, Consultor y Data Scientist con más de 5 años de experiencia en diseñar e implementar soluciones de Inteligencia Artificial y Machine Learning para finanzas, salud y seguros. Actualmente enfocado en desarrollar agentes inteligentes utilizando frameworks de vanguardia como LangChain y LangGraph, con énfasis en automatizar procesos y mejorar las interacciones con los clientes.",
  portfolioLink: "https://javierherrera1996.github.io"
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

// Agregar datos de blog para SEO
const blogData = {
  title: "Artículos sobre AI Engineering",
  subtitle: "Insights, tutoriales y mejores prácticas sobre LangChain, RAG y desarrollo de agentes de IA",
  posts: [
    {
      title: "Implementando RAG con LangChain: Una Guía Práctica",
      excerpt: "Aprende a desarrollar sistemas de Retrieval Augmented Generation que conectan tus documentos con modelos de lenguaje para respuestas precisas.",
      slug: "implementando-rag-con-langchain",
      date: "10 Oct 2023",
      author: "Javier Herrera",
      image: "/images/blog-rag.jpg",
      tags: ["LangChain", "RAG", "Tutorial", "Vector Databases"]
    },
    {
      title: "El Arte del Prompt Engineering para Aplicaciones Empresariales",
      excerpt: "Estrategias avanzadas de prompt engineering para mejorar la calidad, precisión y utilidad de las respuestas de los LLMs en entornos de negocio.",
      slug: "arte-prompt-engineering-empresarial",
      date: "25 Sep 2023",
      author: "Javier Herrera",
      image: "/images/blog-prompt.jpg",
      tags: ["Prompt Engineering", "LLMs", "GPT-4", "Best Practices"]
    },
    {
      title: "Construyendo Agentes Autónomos con LangGraph: Paso a Paso",
      excerpt: "Guía completa para desarrollar agentes de IA capaces de realizar tareas complejas mediante planificación y ejecución autónoma.",
      slug: "agentes-autonomos-langgraph",
      date: "12 Sep 2023",
      author: "Javier Herrera",
      image: "/images/blog-agents.jpg",
      tags: ["LangGraph", "Autonomous Agents", "LangChain", "AI Development"]
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
      <ProjectsSection {...resumeData.projects} />
      <EducationSection {...resumeData.education} />
      <BlogPreviewSection {...blogData} />
      <TestimonialSection {...resumeData.testimonials} />
      <CtaSection {...resumeData.cta} />
    </Layout>
  );
};

export default HomePage;
