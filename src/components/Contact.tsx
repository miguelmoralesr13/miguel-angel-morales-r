import React from 'react'
import { useTranslation } from 'react-i18next'
import CVGenerator from './CVGenerator'

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <section id="cv" className="py-10 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">{t('cv.title')}</h2>
          <p className="text-gray-300 mb-4 text-lg mb-4">
            {t('cv.description')}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6 mt-8">
            <CVGenerator />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
