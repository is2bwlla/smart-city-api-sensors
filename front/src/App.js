import React from 'react';
import Header from './components/header';
import './styles/header.css';
import './styles/styles.css';
import './styles/App.css';
import Login from './pages/login';
import './styles/login.css';
// import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}

export default App;