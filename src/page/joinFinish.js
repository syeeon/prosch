import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 


import Header from 'components/Header'
import Footer from 'components/Footer'
import JoinFinish from 'styles/page/joinFinish.css'

function joinFinish() {
  return (
    <div className='container'>
      <h1 class="top_txt">Porsche Korea.</h1>
      <img className='join_img' src="img/join_finish.jpg" alt="아이디 생성 완료" />
      <div className='txt_box'>
        <h2>Porsche ID가 생성되었습니다.</h2>
        <Link to="/login" className='login_link'>로그인하기</Link>
      </div>
    </div>
  );
}

export default joinFinish;