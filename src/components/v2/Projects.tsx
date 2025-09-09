import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  topics: string[];
}

interface ReadmeContent {
  name: string;
  content: string;
  encoding: string;
}

const ProjectsV2: React.FC = () => {
  const { t } = useTranslation();
  const [githubProjects, setGithubProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<GitHubProject | null>(null);
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [showReadme, setShowReadme] = useState(false);

  const fetchReadme = async (project: GitHubProject) => {
    setReadmeLoading(true);
    setSelectedProject(project);
    setShowReadme(true);
    try {
      const response = await fetch(`https://api.github.com/repos/miguelmoralesr13/${project.name}/contents/README.md`);
      if (!response.ok) throw new Error('README not found');
      const data: ReadmeContent = await response.json();
      const decodedContent = decodeURIComponent(escape(atob(data.content)));
      setReadmeContent(decodedContent);
    } catch (err) {
      setReadmeContent(t('projects.readme_modal.not_found'));
    } finally {
      setReadmeLoading(false);
    }
  };

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/miguelmoralesr13/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch GitHub projects');
        const data = await response.json();
        setGithubProjects(data);
      } catch (err) {
        setError('Failed to load GitHub projects');
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubProjects();
  }, []);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center py-20 px-4 overflow-x-hidden">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 w-full max-w-7xl">
        {loading && (
          <div className="col-span-full text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            <p className="text-gray-400 mt-2">{t('projects.loading')}</p>
          </div>
        )}
        {error && (
          <div className="col-span-full text-center py-8">
            <p className="text-red-400">{error}</p>
            <p className="text-gray-400 text-sm mt-2">
              {t('projects.error_message')}{' '}
              <a href="https://github.com/miguelmoralesr13" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{t('projects.github')}</a>
            </p>
          </div>
        )}
        {!loading && !error && githubProjects.map((project) => (
          <div key={project.id} className="relative bg-gray-800/80 rounded-3xl shadow-2xl border-4 border-blue-400/30 p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/40">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-2 animate-fade-in bg-gradient-to-r from-blue-300 via-green-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg text-center">{project.name}</h3>
            <p className="text-lg md:text-xl font-medium mb-4 animate-fade-in delay-100 text-blue-200 tracking-wide leading-relaxed text-center">{project.description || t('projects.no_description')}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.topics && project.topics.map((topic, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-md">{topic}</span>
              ))}
              {project.language && (
                <span className="px-2 py-1 bg-blue-600 text-blue-100 text-xs rounded">{project.language}</span>
              )}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {project.stargazers_count}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {project.forks_count}
              </div>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => fetchReadme(project)} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded transition-colors duration-300 text-sm">{t('projects.view_readme')}</button>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded transition-colors duration-300 text-sm">{t('projects.github')}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="https://github.com/miguelmoralesr13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          {t('projects.view_all_projects')}
        </a>
      </div>
      {/* README Modal */}
      {showReadme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">{t('projects.readme_modal.title')} {selectedProject?.name}</h3>
              <button onClick={() => setShowReadme(false)} className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {readmeLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                  <p className="text-gray-400 mt-2">{t('projects.readme_modal.loading')}</p>
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-2xl font-bold text-white mb-4">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-xl font-bold text-blue-400 mb-3 mt-6">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-lg font-bold text-blue-300 mb-2 mt-4">{children}</h3>,
                      p: ({ children }) => <p className="text-gray-300 mb-4">{children}</p>,
                      code: ({ children }) => <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">{children}</code>,
                      pre: ({ children }) => <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                      ul: ({ children }) => <ul className="text-gray-300 mb-4 list-disc list-inside">{children}</ul>,
                      ol: ({ children }) => <ol className="text-gray-300 mb-4 list-decimal list-inside">{children}</ol>,
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                      a: ({ href, children }) => <a href={href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                      blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-400 italic mb-4">{children}</blockquote>,
                    }}
                  >
                    {readmeContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
            <div className="flex justify-end p-6 border-t border-gray-700">
              <button onClick={() => setShowReadme(false)} className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors duration-300">{t('projects.readme_modal.close')}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsV2;
