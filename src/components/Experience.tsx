import React from 'react'
import { useTranslation } from 'react-i18next'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const Experience: React.FC = () => {
  const { t } = useTranslation()

  const experiences: ExperienceItem[] = [
    {
      title: t('experience.jobs.scotiabank.title'),
      company: t('experience.jobs.scotiabank.company'),
      period: t('experience.jobs.scotiabank.period'),
      description: t('experience.jobs.scotiabank.description', { returnObjects: true }) as string[],
      technologies: ["Spring Boot", "Spring Cloud", "React", "Node.js", "Java", "JavaScript", "Microservices", "Docker", "Kubernetes"]
    },
    {
      title: t('experience.jobs.freelance.title'),
      company: t('experience.jobs.freelance.company'),
      period: t('experience.jobs.freelance.period'),
      description: t('experience.jobs.freelance.description', { returnObjects: true }) as string[],
      technologies: ["Vue.js", "React", "Node.js", "Docker", "CI/CD", "Linux", "Bash", "Git", "DevOps"]
    },
    {
      title: t('experience.jobs.ebitware.title'),
      company: t('experience.jobs.ebitware.company'),
      period: t('experience.jobs.ebitware.period'),
      description: t('experience.jobs.ebitware.description', { returnObjects: true }) as string[],
      technologies: ["Angular", "Vue.js", "Node.js", "NestJS", "Golang", "Java", "PostgreSQL", "MongoDB", "PWA", "Express.js"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            {t('experience.title')}
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index)  => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  <div className="ml-16 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {Array.isArray(exp.description)
                        ? exp.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-2 mt-1">•</span>
                              {desc}
                            </li>
                          ))
                        : <li className="text-gray-400">No description available</li>
                      }
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
