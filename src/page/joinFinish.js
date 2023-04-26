import React, {Component} from 'react';
import {Link} from 'react-router-dom' 

import 'styles/page/joinFinish.css'

function joinFinish() {
  return (
    <div className='container'>
      <img className='join_img' src="img/join_finish.jpg" alt="아이디 생성 완료" />
      <div className='txt_box'>
        <h1>Porsche ID가 생성되었습니다.</h1>
        <Link to="/login" className='login_link'>로그인하기</Link>
      </div>
    </div>
  );
}

export default joinFinish;