import React from 'react';
import { useTranslation } from 'react-i18next';

const profileImg = '/photo.jpg'; // Actualiza la ruta para usar la nueva foto

const AboutV2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-8 gap-12">
        {/* Texto principal moderno */}
        <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
          <p className="text-lg md:text-xl font-medium mb-4 animate-fade-in delay-100 text-blue-200 tracking-wide leading-relaxed">
            {t('about.description1')}
          </p>
          <p className="text-base md:text-lg font-light mb-4 animate-fade-in delay-200 text-purple-200 italic border-l-4 border-blue-400 pl-4">
            {t('about.description2')}
          </p>
          <p className="text-base md:text-lg font-light mb-4 animate-fade-in delay-300 text-green-200">
            {t('about.description3')}
          </p>
        </div>
        {/* Imagen de perfil */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-gradient-to-br from-green-300 via-blue-400 to-purple-400 blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full border-8 border-gradient-to-br from-green-400 via-blue-400 to-purple-400 shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-blue-400/50 animate-fade-in"
              style={{ boxShadow: '0 8px 32px 0 rgba(44, 200, 255, 0.25)' }}
            />
            {/* Decorativos modernos */}
            <div className="absolute top-8 left-8 w-10 h-10 rounded-full border-4 border-green-400 bg-white/10 animate-bounce"></div>
            <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border-4 border-blue-400 bg-white/10 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
      {/* Cards amigables para logros y detalles */}
      <div className="flex flex-wrap justify-center items-center pb-5 gap-6 mt-8 w-full animate-fade-in delay-400">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 min-w-[180px] flex flex-col items-center">
          <span className="text-sm font-medium text-green-200 mb-2">{t('about.experience')}</span>
          <span className="text-xl font-bold text-green-300">5+</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 min-w-[180px] flex flex-col items-center">
          <span className="text-sm font-medium text-green-200 mb-2">{t('about.projects')}</span>
          <span className="text-xl font-bold text-green-300">20+</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 min-w-[180px] flex flex-col items-center">
          <span className="text-sm font-medium text-green-200 mb-2">{t('about.technologies')}</span>
          <span className="text-xl font-bold text-green-300">TypeScript, React, Java, Go...</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 min-w-[180px] flex flex-col items-center">
          <span className="text-sm font-medium text-green-200 mb-2">{t('about.certifications')}</span>
          <span className="text-xl font-bold text-green-300">4+</span>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;
