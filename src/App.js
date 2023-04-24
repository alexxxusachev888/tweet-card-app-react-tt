import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Tweets from './components/Tweets';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
