import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Components } from './components';
import { Navigation } from './navigation';
import { AlertDocs } from './documentation/AlertDocs';
import { AvatarDocs } from './documentation/AvatarDocs';
import { BadgeDocs } from './documentation/BadgeDocs';
import { ButtonDocs } from './documentation/ButtonDocs';
import { CardDocs } from './documentation/CardDocs';
import { HeadingDocs } from './documentation/HeadingDocs';
import { ImageDocs } from './documentation/ImageDocs';
import { TextDocs } from './documentation/TextDocs';

function App() {
  return (
    <div className="App">
     <Router>

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/avatars" element={<AvatarDocs />} />
        <Route path="/components/alerts" element={<AlertDocs />} />
        <Route path="/components/badges" element={<BadgeDocs />} />
        <Route path="/components/buttons" element={<ButtonDocs />} />
        <Route path="/components/cards" element={<CardDocs />} />
        <Route path="/components/headings" element={<HeadingDocs />} />
        <Route path="/components/images" element={<ImageDocs />} />
        <Route path="/components/text" element={<TextDocs />} />
      </Routes>

     </Router>

    </div>
  );
}

export default App;
