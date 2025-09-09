import React from 'react'
import { useTranslation } from 'react-i18next'

interface SkillCategory {
  name: string
  skills: string[]
  icon: string
}

const Skills: React.FC = () => {
  const { t } = useTranslation()

  const skillCategories: SkillCategory[] = [
    {
      name: t('skills.categories.backend.name'),
      skills: ["Node.js", "NestJS", "Express", "Go", "Java", "JWT", "PM2", "RESTful APIs"],
      icon: t('skills.categories.backend.icon')
    },
    {
      name: t('skills.categories.frontend.name'),
      skills: ["React", "Vue.js", "Angular", "JavaScript", "TypeScript", "Material Design", "Responsive Design", "PWA"],
      icon: t('skills.categories.frontend.icon')
    },
    {
      name: t('skills.categories.databases.name'),
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Database Design", "Query Optimization"],
      icon: t('skills.categories.databases.icon')
    },
    {
      name: t('skills.categories.cloud.name'),
      skills: ["Google Cloud", "Heroku", "Linux", "Bash", "Docker", "CI/CD", "Monitoring"],
      icon: t('skills.categories.cloud.icon')
    },
    {
      name: t('skills.categories.tools.name'),
      skills: ["npm", "Yarn", "Git", "GitHub", "VS Code", "Postman", "Testing", "Documentation"],
      icon: t('skills.categories.tools.icon')
    },
    {
      name: t('skills.categories.architecture.name'),
      skills: ["Clean Architecture", "SOLID Principles", "Microservices", "Agile", "Scrum"],
      icon: t('skills.categories.architecture.icon')
    }
  ]

  const proficiencyLevels = [
    { skill: "JavaScript", level: 95 },
    { skill: "TypeScript", level: 92 },
    { skill: "Node.js", level: 90 },
    { skill: "React", level: 88 },
    { skill: "NestJS", level: 85 },
    { skill: "Java", level: 83 },
    { skill: "Spring Boot", level: 80 },
    { skill: "PostgreSQL", level: 78 },
    { skill: "MongoDB", level: 75 },
    { skill: "Vue.js", level: 72 },
    { skill: "Go", level: 70 },
    { skill: "Angular", level: 68 }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            {t('skills.title')}
          </h2>
          
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              {t('skills.proficiency')}
            </h3>
            <div className="space-y-6">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{item.skill}</span>
                    <span className="text-blue-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                {t('skills.certifications')}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(t('skills.certifications_list', { returnObjects: true }))
                  ? (t('skills.certifications_list', { returnObjects: true }) as string[]).map((cert: string, index: number) => {
                      const certLinks = [
                        "/certificateds/TypeScript-Tu-completa-guia-y-manual.jpg",
                        "/certificateds/React- De cero a experto - Edición 2025.jpg",
                        "/certificateds/NestJS Node Typescript al estilo Angular para crear APIS.jpg",
                        "/certificateds/Microservicios Spring Boot Spring Cloud Netflix Eureka 2025.jpg"
                      ];
                      return (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          <a 
                            href={certLinks[index]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-300"
                          >
                            {cert}
                          </a>
                        </li>
                      );
                    })
                  : <li className="text-gray-400">No certifications available</li>
                }
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                {t('skills.achievements')}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(t('skills.achievements_list', { returnObjects: true }))
                  ? (t('skills.achievements_list', { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))
                  : <li className="text-gray-400">No achievements available</li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
