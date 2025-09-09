import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio';
import PortfolioV2 from './components/PortfolioV2';

function App() {
  return (
    <Router basename='/miguel-angel-morales-r'>
      <Routes>
        <Route path="/" element={<PortfolioV2 />} />
        <Route path="/v2" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
