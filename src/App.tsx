// import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins/Coins';
import AboutCoin from './components/AboutCoin/AboutCoin';
import NavBar from './components/NavBar/NavBar';
import FavList from './components/FavList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin" element={<AboutCoin />}>
          <Route path=":coinId" element={<AboutCoin />} />
        </Route>
        <Route path="/favorite" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
