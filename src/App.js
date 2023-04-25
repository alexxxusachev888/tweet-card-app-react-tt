import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Tweets } from './components/Tweets/Tweets';

export const App = ()=> {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

