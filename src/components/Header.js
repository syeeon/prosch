import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom' 

import 'styles/common/header.css'
import 'styles/responsive/reHeader.css'
import Main from 'page/main'
import Login from 'page/login'
import Model718 from 'page/model_718'
import MyPage from 'page/mypage'

import {
  onAuthStateChanged,			
} from "firebase/auth";
import { auth } from "../firebase";

function Header() {

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => { 
    setUser(currentUser);
    });
  }, [user]);


  return (
          <header id ="header" className="header">
            <h1 className ="logo"><Link to="/">Porsche</Link></h1>
            <nav className="gnb_wrap">
              <ul className='gnb'>
                <li className="material-symbols-outlined item slidebtn">menu</li>
                <li><Link to="model_718" className='item'>Model</Link></li>
                {
                  user?.email == null
                  ? <li><Link to="login" className='item'>Login</Link></li>
                  : <li><Link to="mypage" className='item'>Mypage</Link></li>
                }
                <li className="material-symbols-outlined item">search</li>
              </ul>
            </nav>
          </header>

  );
}

export default Header;
