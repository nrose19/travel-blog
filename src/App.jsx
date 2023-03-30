import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Navigation/NavBar';
import Main from './pages/Main';
import Footer from '';

import './index.css';
const styles = {
  contentContainer: {
    minHeight: 'calc(100vh - 190px)',
  },
  footerPin: {
    position: 'relative',
    left: '0',
    bottom: '0',
  }
}

function App() {
  return (
    <Router>
      <>
        <Nav />
        <div style={styles.contentContainer}>
          <Routes>
            <Route path='/' element={<Main />}/>
          </Routes>
        </div>
        <div style={styles.contentContainer}>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
