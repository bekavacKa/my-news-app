import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Config/routes';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="app-w">
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME.url} element={<Home />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
