import React, { useRef, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import HomeV2 from './v2/Home';
import AboutV2 from './v2/About';
import ExperienceV2 from './v2/Experience';
import SkillsV2 from './v2/Skills';
import ProjectsV2 from './v2/Projects';
const CVGenerator = React.lazy(() => import('./v2/CVGenerator'));

const PortfolioV2: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Prevent default scroll on body to avoid double scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const { t } = useTranslation();
  const navItems = [
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
    ), label: t('portfolio.home', 'Home') },
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ), label: t('portfolio.about', 'About me') },
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
    ), label: t('portfolio.experience', 'Experience') },
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.7 0 1.31-.4 1.51-1a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06c.51.51 1.2.66 1.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09c0 .7.4 1.31 1 1.51a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82c.2.61.81 1.01 1.51 1H21a2 2 0 010 4h-.09c-.7 0-1.31.4-1.51 1z" /></svg>
    ), label: t('portfolio.skills', 'Skills') },
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18" /></svg>
    ), label: t('portfolio.projects', 'Projects') },
    { icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" /></svg>
    ), label: t('portfolio.cv', 'CV') },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNavClick = (idx: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(idx);
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const onSlideChange = () => setActiveIndex(swiper.activeIndex);
      swiper.on('slideChange', onSlideChange);
      return () => {
        swiper.off('slideChange', onSlideChange);
      };
    }
  }, []);

  // Idiomas disponibles
  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];
  // i18n hook
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Títulos de las secciones
  const sectionTitles = navItems.map(item => item.label);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gray-900 text-white z-50">
      {/* Título flotante */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in text-center select-none">
          {sectionTitles[activeIndex]}
        </h1>
      </div>
      {/* Navegación y selector de idioma */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-8">
        {/* Navegación de iconos con fondo glass */}
        <nav className="flex gap-4 items-center px-6 py-3 rounded-2xl shadow-2xl border border-blue-400/30"
          style={{
            background: 'linear-gradient(90deg, rgba(34,193,195,0.18) 0%, rgba(102,51,153,0.18) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(idx)}
              className={`relative flex flex-col items-center focus:outline-none transition-all duration-300
                ${activeIndex === idx
                  ? 'scale-125 drop-shadow-lg'
                  : 'text-gray-400 hover:text-blue-300 hover:scale-110'}
              `}
              aria-label={item.label}
              style={{
                background: activeIndex === idx
                  ? 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)'
                  : 'transparent',
                borderRadius: '50%',
                padding: '0.5rem',
                boxShadow: activeIndex === idx ? '0 0 16px 4px #38bdf8, 0 0 32px 8px #a78bfa' : 'none',
                transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {React.cloneElement(item.icon, {
                className: 'w-7 h-7',
                stroke: activeIndex === idx ? '#fff' : 'currentColor',
                fill: 'none',
                style: { filter: activeIndex === idx ? 'drop-shadow(0 0 8px #38bdf8)' : undefined }
              })}
              {activeIndex === idx && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-lg animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>
        {/* Selector de idioma aparte */}
        <div className="flex gap-2 items-center">
          {languages.map(lng => (
            <button
              key={lng.code}
              onClick={() => handleLanguageChange(lng.code)}
              className={`px-3 py-1 rounded-full font-bold text-sm transition-colors duration-200
                ${i18n.language === lng.code ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-blue-200 hover:bg-blue-400 hover:text-white'}`}
            >
              {lng.label}
            </button>
          ))}
        </div>
      </div>
      {/* Swiper vertical */}
       <Swiper
         direction="vertical"
         initialSlide={0}
         pagination={{ clickable: true }}
         mousewheel={true}
         modules={[Pagination, Mousewheel]}
         className="h-screen"
         style={{ minHeight: '100vh' }}
         ref={swiperRef}
       >
        <SwiperSlide><HomeV2 /></SwiperSlide>
        <SwiperSlide><AboutV2 /></SwiperSlide>
        <SwiperSlide><ExperienceV2 /></SwiperSlide>
        <SwiperSlide><SkillsV2 /></SwiperSlide>
        <SwiperSlide><ProjectsV2 /></SwiperSlide>
        <SwiperSlide>
          <Suspense fallback={<div className="flex items-center justify-center h-full text-blue-400 text-2xl">Cargando CV...</div>}>
            <CVGenerator />
          </Suspense>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortfolioV2;
