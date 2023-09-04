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
        <img src={logo} className="logo"/>
        <h1>Références</h1>
        </div>
        <Search/>
        <div className='user_mess'>
          <div className='user_decon'>
        <img src={user} className='user'></img>
        <h3>{stat}</h3>
        </div>
         <img src={message} className='message'/>
        </div>
      </header>
      <Options className='exception_div' />
      <Routes>
        <Route path="/" element={<Mainframe />} />
        <Route path="accueil" element={<Mainframe />} />
        <Route path="store" element={<StoreEntrep />} />

      </Routes>

    </div>
  );
}



export default App