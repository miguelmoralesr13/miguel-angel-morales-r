import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skillsData = [
  { name: 'Node.js', percent: 95, color: 'from-green-400 to-blue-500', size: 110 },
  { name: 'NestJS', percent: 90, color: 'from-green-400 to-blue-500', size: 90 },
  { name: 'Java', percent: 85, color: 'from-green-400 to-blue-500', size: 80 },
  { name: 'Go', percent: 80, color: 'from-green-400 to-blue-500', size: 70 },
  { name: 'Spring Boot', percent: 90, color: 'from-green-400 to-blue-500', size: 100 },
  { name: 'React', percent: 95, color: 'from-purple-400 to-pink-500', size: 120 },
  { name: 'Angular', percent: 80, color: 'from-purple-400 to-pink-500', size: 80 },
  { name: 'Vue.js', percent: 75, color: 'from-purple-400 to-pink-500', size: 70 },
  { name: 'TypeScript', percent: 95, color: 'from-purple-400 to-pink-500', size: 110 },
  { name: 'JavaScript', percent: 98, color: 'from-purple-400 to-pink-500', size: 100 },
  { name: 'PostgreSQL', percent: 90, color: 'from-blue-400 to-indigo-500', size: 90 },
  { name: 'MongoDB', percent: 85, color: 'from-blue-400 to-indigo-500', size: 80 },
  { name: 'MySQL', percent: 80, color: 'from-blue-400 to-indigo-500', size: 70 },
  { name: 'AWS', percent: 80, color: 'from-cyan-400 to-blue-400', size: 90 },
  { name: 'Azure', percent: 70, color: 'from-cyan-400 to-blue-400', size: 70 },
  { name: 'Docker', percent: 90, color: 'from-cyan-400 to-blue-400', size: 100 },
  { name: 'Kubernetes', percent: 75, color: 'from-cyan-400 to-blue-400', size: 80 },
];

// Generate random initial positions for skills across the viewport
const getRandomPositions = (count: number) => {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * (vw - 120) + 60,
    y: Math.random() * (vh - 120) + 60,
    dx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1),
    dy: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1),
  }));
};

const SkillsV2: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [positions, setPositions] = useState(() => getRandomPositions(skillsData.length));
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => prev.map((pos, i) => {
        if (activeSkill === i) return pos; // Stop animation for selected
        let { x, y, dx, dy } = pos;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const size = skillsData[i].size;
        x += dx;
        y += dy;
        // Bounce on edges
        if (x < size / 2 || x > vw - size / 2) dx *= -1;
        if (y < size / 2 || y > vh - size / 2) dy *= -1;
        return { x, y, dx, dy };
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [activeSkill]);

  // Traducción
  // eslint-disable-next-line
  // @ts-ignore
  const { t } = useTranslation();
  const certifications = [
    {
      name: t('skills.certifications_list.0', 'TypeScript: Tu completa guía y manual'),
      link: '/miguel-angel-morales-r/certificateds/TypeScript-Tu-completa-guia-y-manual.jpg',
    },
    {
      name: t('skills.certifications_list.1', 'React: De cero a experto - Edición 2025'),
      link: '/miguel-angel-morales-r/certificateds/React-De-cero-a-experto-Edición-2025.jpg',
    },
    {
      name: t('skills.certifications_list.2', 'NestJS Node Typescript al estilo Angular para crear APIS'),
      link: '/miguel-angel-morales-r/certificateds/NestJS-Node-Typescript-al-estilo-Angular-para-crear-APIS.jpg',
    },
    {
      name: t('skills.certifications_list.3', 'Microservicios Spring Boot Spring Cloud Netflix Eureka 2025'),
      link: '/miguel-angel-morales-r/certificateds/Microservicios-Spring-Boot-Spring-Cloud-Netflix-Eureka-2025.jpg',
    },
  ];
  const achievements = t('skills.achievements_list', { returnObjects: true }) as string[];

  return (
    <section className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden z-30">
      {/* Floating skill circles */}
      {skillsData.map((skill, i) => (
        <motion.div
          key={skill.name}
          className={`absolute group cursor-pointer z-10`}
          style={{ left: positions[i].x - skill.size / 2, top: positions[i].y - skill.size / 2 }}
          onClick={() => setActiveSkill(i)}
        >
          <motion.div
            className={`flex items-center justify-center rounded-full bg-gradient-to-br ${skill.color} shadow-xl text-white border-4 border-white/20 transition-all duration-300 font-semibold`}
            style={{ width: skill.size, height: skill.size, fontSize: skill.size / 5 }}
          >
            {skill.name}
          </motion.div>
        </motion.div>
      ))}
      {/* Selected skill info */}
      {activeSkill !== null && (
        <motion.div
          key={skillsData[activeSkill].name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed right-12 top-1/2 -translate-y-1/2 px-8 py-6 rounded-2xl bg-gray-900/90 text-green-300 text-4xl font-bold shadow-2xl border-4 border-blue-400/30 z-50"
        >
          {skillsData[activeSkill].name}
          <div className="mt-2 text-6xl text-blue-300">{skillsData[activeSkill].percent}%</div>
        </motion.div>
      )}
      {/* Card inferior: Certificados y logros */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6 py-8 rounded-3xl bg-gray-900/90 shadow-2xl border-4 border-blue-400/30 z-40 backdrop-blur-lg"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center"><span className="text-3xl mr-2">🏆</span>{t('skills.certifications')}</h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-center text-blue-200">
                  <span className="text-blue-400 mr-2">•</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-green-300 underline transition-colors duration-300">
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center"><span className="text-3xl mr-2">🎯</span>{t('skills.achievements')}</h3>
            <ul className="space-y-3">
              {achievements.map((ach, idx) => (
                <li key={idx} className="flex items-center text-blue-200">
                  <span className="text-purple-400 mr-2">•</span>
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsV2 ;
