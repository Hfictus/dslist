import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GameListsPage } from './pages/GameListsPage';
import { GameListingPage } from './pages/GameListingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<GameListsPage />} />
        <Route path="/lists/:listId" element={<GameListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}