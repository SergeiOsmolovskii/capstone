import React from 'react';
import './App.css';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { MainPage } from './components/pages/MainPage';
import { BookingPage } from './components/pages/BookingPage';
import { ConfirmedBooking } from './components/ConfirmedBooking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/confirmation" element={<ConfirmedBooking/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
