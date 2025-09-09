import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const jobs = [
  'scotiabank',
  'freelance',
  'ebitware',
];

// Puedes reemplazar esto por una ilustración SVG propia
const ExperienceIllustration = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="60" width="280" height="280" rx="40" fill="url(#grad)" />
    <circle cx="120" cy="120" r="30" fill="#A7F3D0" />
    <circle cx="320" cy="320" r="20" fill="#818CF8" />
    <rect x="180" y="180" width="80" height="40" rx="10" fill="#F472B6" />
    <text x="200" y="205" fontSize="18" fill="#fff" fontWeight="bold">{':)'}</text>
    <defs>
      <linearGradient id="grad" x1="60" y1="60" x2="340" y2="340" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#A7F3D0" />
      </linearGradient>
    </defs>
  </svg>
);

const ExperienceV2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white flex items-center justify-center">
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      >
        {jobs.map((jobKey) => {
          const job = t(`experience.jobs.${jobKey}`, { returnObjects: true }) as any;
          return (
            <SwiperSlide key={jobKey}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full px-12 py-24 md:px-24 md:py-32 gap-0">
                {/* Izquierda: Texto */}
                <div className="flex flex-col justify-center h-full pr-8">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-blue-300 via-green-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">{job.title}</h3>
                  <p className="text-2xl font-semibold mb-2 animate-fade-in text-blue-200 tracking-wide leading-relaxed">{job.company}</p>
                  <p className="text-lg font-light mb-8 animate-fade-in text-purple-200 italic border-l-4 border-blue-400 pl-4">{job.period}</p>
                  <ul className="list-disc pl-8 space-y-6 text-xl text-gray-100">
                    {Array.isArray(job.description)
                      ? job.description.map((desc: string, idx: number) => (
                          <li key={idx}>{desc}</li>
                        ))
                      : <li>No description available</li>
                    }
                  </ul>
                </div>
                {/* Derecha: Ilustración decorativa */}
                <div className="flex flex-col justify-center items-center h-full">
                  <ExperienceIllustration />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ExperienceV2;
