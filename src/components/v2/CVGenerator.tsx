import React from 'react';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

// ...existing code from attachment...

const CVGenerator: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 20;
    // Header box (gradient effect)
    doc.setFillColor(36, 99, 235); // blue
    doc.rect(10, 10, 190, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(t('hero.title'), 15, 27);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(t('hero.subtitle'), 15, 36);
    y = 44;
    // Divider
    doc.setDrawColor(36, 99, 235);
    doc.setLineWidth(1);
    doc.line(10, y, 200, y);
    y += 7;
    // About Section
    doc.setTextColor(36, 99, 235);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text(t('about.title'), 15, y);
    y += 7;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    y = addMultilineText(doc, t('about.description1'), 15, y, 170);
    y += 2;
    // Divider
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(10, y, 200, y);
    y += 6;
    // Skills Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(36, 99, 235);
    doc.text(t('skills.title'), 15, y);
    y += 6;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    y = addMultilineText(doc, t('skills.proficiency'), 15, y, 170);
    // Skills categories (backend, frontend, etc.)
    const techCategories = [
      {
        name: t('skills.categories.backend.name'),
        techs: ["Spring Boot", "Spring Cloud", "Node.js", "Java", "JavaScript", "Microservices", "NestJS", "Golang", "Express.js"],
      },
      {
        name: t('skills.categories.frontend.name'),
        techs: ["React", "Vue.js", "Angular", "PWA"],
      },
      {
        name: t('skills.categories.databases.name'),
        techs: ["PostgreSQL", "MongoDB"],
      },
      {
        name: t('skills.categories.cloud.name'),
        techs: ["Docker", "Kubernetes", "CI/CD", "DevOps"],
      },
      {
        name: t('skills.categories.tools.name'),
        techs: ["Linux", "Bash", "Git"],
      },
      {
        name: t('skills.categories.architecture.name'),
        techs: ["Microservices", "Distributed Systems"],
      },
    ];
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(36, 99, 235);
    doc.text(i18n.language === 'es' ? 'Tecnologías:' : 'Technologies:', 15, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    techCategories.forEach(cat => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(36, 99, 235);
      doc.text(`${cat.name}:`, 20, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      y = addMultilineText(doc, cat.techs.join(', '), 25, y, 140);
      y += 3;
    });
    // Skills list (certifications, achievements)
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(36, 99, 235);
    doc.text(t('skills.certifications'), 15, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const certs = t('skills.certifications_list', { returnObjects: true }) as string[];
    certs.forEach((cert) => {
      y = addMultilineText(doc, `• ${cert}`, 20, y, 160);
    });
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(36, 99, 235);
    doc.text(t('skills.achievements'), 15, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const achievements = t('skills.achievements_list', { returnObjects: true }) as string[];
    achievements.forEach((ach) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      y = addMultilineText(doc, `• ${ach}`, 20, y, 160);
    });
    y += 2;
    // Divider
    doc.setDrawColor(36, 99, 235);
    doc.setLineWidth(1);
    doc.line(10, y, 200, y);
    y += 7;
    // Experiencia laboral detallada
    const experiences = [
      {
        title: t('experience.jobs.scotiabank.title'),
        company: t('experience.jobs.scotiabank.company'),
        period: t('experience.jobs.scotiabank.period'),
        description: t('experience.jobs.scotiabank.description', { returnObjects: true }) as string[],
        technologies: ["Spring Boot", "Spring Cloud", "React", "Node.js", "Java", "JavaScript", "Microservices", "Docker", "Kubernetes"],
      },
      {
        title: t('experience.jobs.freelance.title'),
        company: t('experience.jobs.freelance.company'),
        period: t('experience.jobs.freelance.period'),
        description: t('experience.jobs.freelance.description', { returnObjects: true }) as string[],
        technologies: ["Vue.js", "React", "Node.js", "Docker", "CI/CD", "Linux", "Bash", "Git", "DevOps"],
      },
      {
        title: t('experience.jobs.ebitware.title'),
        company: t('experience.jobs.ebitware.company'),
        period: t('experience.jobs.ebitware.period'),
        description: t('experience.jobs.ebitware.description', { returnObjects: true }) as string[],
        technologies: ["Angular", "Vue.js", "Node.js", "NestJS", "Golang", "Java", "PostgreSQL", "MongoDB", "PWA", "Express.js"],
      },
    ];
    experiences.forEach((exp, idx) => {
      const descLines = exp.description.reduce((acc, desc) => acc + doc.splitTextToSize(desc, 160).length, 0);
      const techLines = 0;
      const totalLines = 4 + descLines + techLines;
      const spaceNeeded = totalLines * 7 + 20;
      if (y + spaceNeeded > 280) {
        doc.addPage();
        y = 20;
      }
      if (idx === 0 || y === 20) {
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(36, 99, 235);
        doc.text(t('experience.title'), 15, y);
        y += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
      }
      doc.setDrawColor(220, 220, 220);
      doc.setFillColor(245, 247, 250);
      doc.rect(12, y - 2, 185, 18 + exp.description.length * 6, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(36, 99, 235);
      doc.text(`${exp.title} - ${exp.company}`, 15, y + 4);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(exp.period, 15, y + 10);
      doc.setTextColor(0, 0, 0);
      let descY = y + 15;
      exp.description.forEach((desc) => {
        descY = addMultilineText(doc, `• ${desc}`, 20, descY, 160);
      });
      y = descY + 7;
    });
    // Añadir contacto al final de cada página
    const addContactFooter = () => {
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(56, 189, 248);
        doc.text(
          `${t('cv.contact', 'Contacto: miguelmoralesr13@gmail.com')} | ${t('cv.phone', 'Tel: +52 55 1234 5678')}`,
          15,
          290
        );
      }
    };
    addContactFooter();
    doc.save(`cv-miguel-ange-morales-reyes-${i18n.language}.pdf`);
  };
  function addMultilineText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number): number {
    const lines: string[] = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      doc.text(line, x, y);
      y += 6;
    });
    return y;
  }
  return (
<section className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col justify-center py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto items-center">
    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg text-left">{i18n.language === 'es' ? 'Descargar CV' : 'Download CV'}</h2>
        <div className="flex flex-col gap-8 justify-center">
          <p className="text-lg md:text-xl font-medium mb-4 animate-fade-in delay-100 text-blue-200 tracking-wide leading-relaxed">{i18n.language === 'es' ? 'Descarga mi currículum actualizado en PDF con toda mi experiencia y habilidades.' : 'Download my updated resume in PDF with all my experience and skills.'}</p>
          <ul className="text-lg text-blue-200 space-y-3">
            <li><span className="font-bold text-green-300">{t('hero.title')}</span></li>
            <li>{t('hero.subtitle')}</li>
            <li>{t('about.description1')}</li>
            <li>{t('skills.proficiency')}</li>
            <li>{t('cv.contact', 'Contacto: miguelmoralesr13@gmail.com')}</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleDownload}
            className="px-10 py-6 rounded-2xl bg-green-400 text-gray-900 font-bold shadow-xl hover:bg-green-300 transition-colors duration-200 text-3xl mb-8"
          >
            {i18n.language === 'es' ? 'Generar CV PDF' : 'Generate CV PDF'}
          </button>
          <span className="text-gray-400 text-lg">PDF generado dinámicamente</span>
        </div>
      </div>
    </section>
  );
};

export default CVGenerator;
