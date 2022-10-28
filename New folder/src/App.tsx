import React from 'react';
import './App.css';
import BookList from './components/bookList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from './components/description';


function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/description/id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
