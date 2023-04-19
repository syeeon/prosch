import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

import 'styles/page/login.css';
import 'styles/responsive/reLogin.css';

import {
    signInWithEmailAndPassword,	
    onAuthStateChanged,								
  } from "firebase/auth";
  import { auth } from "../firebase";

function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});
    
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => { 
        setUser(currentUser);
      });
    }, [user]);
    
    //console.log(user);

    const navigate = useNavigate();
    
    const login = async () => {  
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        alert("로그인에 성공했습니다.")
        navigate('/mypage');
        console.log(loginEmail)
      } catch (error) {
        alert("등록된 정보가 없습니다.")
      }
    };
    
    function ch_bg(){
      if (matchMedia("screen and (min-width : 769px").matches)
      document.querySelector('.body').style.backgroundImage="url(img/login/login_on.jpg)"
    };
    
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const handleEmail = (e) => {
      setLoginEmail(e.target.value);
      const regex = 
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false)
      }
    };

    const handlePw = (e) => {
      setLoginPassword(e.target.value);
      const regex = 
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false)
      }
    };
  return (
      <div className='body container'>
          <section className="login_box">
            <h2>반갑습니다.</h2>
              <legend className="hide">Porsche Login</legend>
              <label htmlFor="u_id" className="id_txt">Porsche ID(이메일 주소)</label>
              <input 
                type="email" 
                className="login_input" 
                id="email" 
                name="email" 
                placeholder="porsche@gmail.com" 
                value={loginEmail}
                onChange={handleEmail}/>
              <div id="err_message" className="err_txt">
                {!emailValid && loginEmail.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )}
              </div>
              <label htmlFor="pwd" className="id_txt">암호</label>
              <input 
                type="password" 
                className="login_input" 
                id="pwd" 
                name="pwd" 
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                onChange={handlePw}/> 
              <div id="err_message" className="err_txt">
                {!pwValid && loginPassword.length > 0 && (
                  <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
              </div>
              <button type="submit" className="id_btn" onClick={() => {
                ch_bg()
                login();
              }}>지금 로그인</button>
            <hr className="line" />
            <p className="go_to_join">
            <Link to="/join">
              <span className='go_join_txt'>지금 등록하세요</span>
            </Link>
              , Porsche의 디지털 세상을 알아보세요.
            </p>
            <a href="#" className="forget_pwd">암호를 잊어버리셨나요?</a>
          </section>
      </div>
  );
}

export default Login;