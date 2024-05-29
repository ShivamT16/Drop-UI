import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Components } from './components';
import { Navigation } from './navigation';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Navigation ></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
