import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <Home />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
