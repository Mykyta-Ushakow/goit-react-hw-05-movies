import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'pages/Home';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
