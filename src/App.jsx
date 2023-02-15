import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CommonFollowers from './components/CommonFollowers';
import Home from './components/Home';
import React, { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
    <div>
        <header className="main-header">Demo App for Github Followores </header>
        <main className="main-content">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/commonFollowers" element={<CommonFollowers />} />
                </Routes>
            </Suspense>
        </main>
    </div>
</BrowserRouter>
  );
}

export default App;
