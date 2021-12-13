import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ActivityDisplay from './components/ActivityDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BsSuitHeart} from 'react-icons/bs'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
        <Routes>
          <Route path="/activities" element={<ActivityDisplay />} />
          <Route path="/" element={<Home/ >} />
        </Routes>
      <Footer heart={<BsSuitHeart />}/>
    </div>
  );
}

export default App;
