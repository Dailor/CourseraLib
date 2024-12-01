import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;


