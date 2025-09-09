import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio';
import PortfolioV2 from './components/PortfolioV2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/v2" element={<PortfolioV2 />} />
      </Routes>
    </Router>
  );
}

export default App;
