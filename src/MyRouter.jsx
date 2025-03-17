import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

export default function MyRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}
