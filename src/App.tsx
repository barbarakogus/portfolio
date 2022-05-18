import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Pagination />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
