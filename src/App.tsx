import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Config/routes';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import General from './Components/General/General';
import Business from './Components/Business/Business';
import HomeContent from './Components/HomeContent/HomeContent';
import Health from './Components/Health/Health';
import Science from './Components/Science/Science';
import Sports from './Components/Sports/Sports';
import Technology from './Components/Technology/Technology';
import Favorite from './Components/Favorite/Favorite';

function App() {
  return (
    <div className="app-w">
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME.url} element={<Home />} >
            <Route index element={<HomeContent />} />
            <Route path={routes.GENERAL.url} element={<General />} />
            <Route path={routes.BUSINESS.url} element={<Business />} />
            <Route path={routes.HEALTH.url} element={<Health />} />
            <Route path={routes.SCIENCE.url} element={<Science />} />
            <Route path={routes.SPORTS.url} element={<Sports />} />
            <Route path={routes.TECHNOLOGY.url} element={<Technology />} />
            <Route path={routes.FAVORITE.url} element={<Favorite />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
