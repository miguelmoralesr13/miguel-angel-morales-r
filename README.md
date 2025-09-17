# Miguel Angel Morales - Portfolio

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer. Built with React, TypeScript, and Vite, featuring internationalization support and dynamic CV generation.

## 🌟 Features

- **Responsive Design**: Modern, mobile-first design with smooth animations
- **Internationalization**: Support for Spanish and English languages
- **Dynamic CV Generation**: PDF CV generation with real-time data
- **GitHub Integration**: Live GitHub repositories display with README viewer
- **Interactive Skills**: Animated floating skills with proficiency levels
- **Professional Experience**: Detailed work history with technology stacks
- **Projects Showcase**: GitHub projects with live README preview

## 🚀 Live Demo

Visit the live portfolio: [https://miguelmoralesr13.github.io/miguel-angel-morales-r/](https://miguelmoralesr13.github.io/miguel-angel-morales-r/)

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### Internationalization
- **react-i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Language detection

### PDF Generation
- **jsPDF** - PDF generation library

### Markdown Rendering
- **react-markdown** - Markdown component for React

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub API** - Repository data fetching

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/miguelmoralesr13/miguel-angel-morales-r.git
cd miguel-angel-morales-r
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── v2/             # Version 2 components
│   │   ├── CVGenerator.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── About.tsx
│   ├── Header.tsx
│   ├── Projects.tsx
│   └── ...
├── i18n/               # Internationalization
│   ├── index.ts
│   └── locales/
│       ├── en.json     # English translations
│       └── es.json     # Spanish translations
├── App.tsx
├── main.tsx
└── index.css
```

## 🌐 Deployment to GitHub Pages

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### GitHub API Configuration

The portfolio fetches data from GitHub API. No API key is required for public repositories.

### Internationalization

Language files are located in `src/i18n/locales/`:
- `en.json` - English translations
- `es.json` - Spanish translations

To add a new language:
1. Create a new JSON file in the locales folder
2. Add the language to `src/i18n/index.ts`
3. Update the language switcher component

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: miguel.moralesr@hotmail.com
- **LinkedIn**: [Miguel Angel Morales](https://linkedin.com/in/miguel-angel-morales)
- **GitHub**: [@miguelmoralesr13](https://github.com/miguelmoralesr13)

---

Made with ❤️ by Miguel Angel Morales
