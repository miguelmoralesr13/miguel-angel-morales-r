import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeV2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in delay-100">
          {t('hero.subtitle')}
        </h2>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in delay-200">
          {t('hero.description')}
        </p>
        
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-3xl text-blue-400">↓</span>
      </div>
    </section>
  );
};

export default HomeV2;
