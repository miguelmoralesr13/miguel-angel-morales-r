import React from 'react'
import { useTranslation } from 'react-i18next'

// Simple code rain animation
const CodeRain: React.FC = () => {
  const codeLines = [
    'const user = {',
    '  name: "Miguel",',
    '  role: "Full Stack Engineer",',
    '  skills: ["Node.js", "React", "Spring Boot"]',
    '}',
    'function greet() {',
    '  return "Hello, World!";',
    '}',
    'console.log(greet())',
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center animate-code-rain">
      {codeLines.map((line, i) => (
        <span
          key={i}
          className={`block text-green-300 font-mono text-lg md:text-xl lg:text-2xl opacity-80 animate-float${i % 3}`}
          style={{
            animationDelay: `${i * 0.5}s`,
            marginBottom: '0.3em',
          }}
        >
          {line}
        </span>
      ))}
      <style>{`
        @keyframes float0 {
          0% { transform: translateY(-30px); opacity: 0.5; }
          50% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(-30px); opacity: 0.5; }
        }
        @keyframes float1 {
          0% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(20px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.7; }
        }
        @keyframes float2 {
          0% { transform: translateY(20px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0.6; }
        }
        .animate-float0 { animation: float0 3s infinite linear; }
        .animate-float1 { animation: float1 3s infinite linear; }
        .animate-float2 { animation: float2 3s infinite linear; }
      `}</style>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            {t('about.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden relative">
                <CodeRain />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description2')}
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description3')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-gray-400">{t('about.experience')}</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">20+</div>
                  <div className="text-sm text-gray-400">{t('about.projects')}</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">{t('about.technologies')}</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">4</div>
                  <div className="text-sm text-gray-400">{t('about.certifications')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
