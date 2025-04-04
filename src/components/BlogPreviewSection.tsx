import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

interface BlogPreviewSectionProps {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
}

const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({
  title,
  subtitle,
  posts
}) => {
  return (
    <section id="blog" className="py-16 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
          {subtitle && <p className="text-xl max-w-2xl mx-auto text-gray-300">{subtitle}</p>}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              className="bg-dark rounded-lg overflow-hidden shadow-lg border border-primary hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-400">{post.date}</div>
                  <div className="text-xs text-gray-400">{post.author}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white-safe">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-dark-overlay text-accent px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`/blog/${post.slug}`} 
                  className="text-accent font-medium hover:text-white-safe transition inline-flex items-center"
                >
                  Leer más <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Sección de recomendaciones */}
        <div className="mt-16">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white-safe">Recomendaciones</h3>
            <p className="text-gray-300 mt-2">Recursos adicionales para profundizar en AI Engineering</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "LangChain Documentation",
                description: "Guía oficial para construir aplicaciones con LLMs",
                icon: "fas fa-book",
                link: "https://python.langchain.com/docs/get_started/introduction"
              },
              {
                title: "LangGraph Tutorials",
                description: "Aprende a crear agentes autónomos con LangGraph",
                icon: "fas fa-robot",
                link: "https://github.com/langchain-ai/langgraph"
              },
              {
                title: "RAG Best Practices",
                description: "Mejores prácticas para sistemas de Retrieval Augmented Generation",
                icon: "fas fa-magnifying-glass-chart",
                link: "https://www.pinecone.io/learn/retrieval-augmented-generation-rag/"
              },
              {
                title: "Prompt Engineering Guide",
                description: "Guía completa para diseñar prompts efectivos",
                icon: "fas fa-comment-dots",
                link: "https://www.promptingguide.ai/"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-dark p-6 rounded-lg border border-primary hover:border-accent transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-accent">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-white-safe mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection; 