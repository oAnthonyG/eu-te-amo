import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HiArrowNarrowUp } from "react-icons/hi";

import Inicio from './pages/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';
import Memorias from './pages/Memorias';
import Motivos from './pages/Motivos';
import './components/global-css/global.css'

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Router>
        <Header className="header" />
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/memorias' element={<Memorias />} />
          <Route exact path='/motivos' element={<Motivos />} />
        </Routes>
        <button className="buttonScrollToTop" onClick={scrollToTop}>
          <HiArrowNarrowUp />
          Voltar
        </button>
        <Footer />
      </Router>
    </>
  )
}

export default App;
