import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <main className="App">
      <Header />
        <MainPage/>
      <Footer />
    </main>
  );
}

export default App;
