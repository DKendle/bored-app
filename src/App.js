import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ActivityDisplay from './components/ActivityDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
        <Routes>
          <Route path="/activities" element={<ActivityDisplay />} />
          <Route path="/" element={<Home/ >} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
