import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ActivityDisplay from './components/ActivityDisplay';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Routes>
          <Route path="/activities" element={<ActivityDisplay />} />
          <Route path="/" element={<Home/ >} />
        </Routes>

    </div>
  );
}

export default App;
