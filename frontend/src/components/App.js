import logo from '../assets/logo_REF.svg';
import user from '../assets/user.svg';
import message from '../assets/message.svg';
import '../styles/App.css';
import Options from './Options';
import Search from './Search';
import Mainframe from './Mainframe';
import StoreEntrep from './StoreEntrep';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/overLay.css';
function App() {
  const stat="se connecter"
  return (
    <div className="App">
      <header className="App-header">
        <div className='name_logo'>
          <h1> <span>R</span>éférences</h1>
          <img src={logo} className="logo"/>
        </div>
        <Search/>
        <div className='user_mess'>
        <img src={message} className='message'/>
          <div className='user_decon'>
            <img src={user} className='user'></img>
            <h3>{stat}</h3>
          </div>
        </div>
      </header>
      <Options />
      <Routes>
        <Route path="/" element={<Mainframe />} />
        <Route path="accueil" element={<Mainframe />} />
        <Route path="store" element={<StoreEntrep />} />

      </Routes>

    </div>
  );
}



export default App