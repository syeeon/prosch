import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 

import 'styles/responsive/rejoin.css'
import 'styles/page/join.css'

import {
  createUserWithEmailAndPassword,	
  onAuthStateChanged,			
} from "firebase/auth";
import { auth } from "../firebase";

function Join() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
    
  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {  
      setUser(currentUser);
      });
  }, [user]);

  //console.log(user);

  const checkBox = document.getElementById("chk_all");
  function checkAll(){
    if (checkBox.checked==true){ 
      for (let i=0;i<5;i++) document.getElementsByName("apply")[i].checked=true;   
    } if (checkBox.checked==false){
        for (let i=0;i<5;i++) document.getElementsByName("apply")[i].checked=false;  
      }
  }

  const [allCheck, setAllCheck] = useState(false);
  const [CheckOne, setCheckOne] = useState(false);
  const [CheckTwo, setCheckTwo] = useState(false);
  const [CheckThree, setCheckThree] = useState(false);
   
  const allBtnEvent =()=>{
    if (allCheck === false) {
      setAllCheck(true);
      setCheckOne(true);
      setCheckTwo(true);
      setCheckThree(true);
    } else {
      setAllCheck(false);
      setCheckOne(false);
      setCheckTwo(false);
      setCheckThree(false);
    } 
  };
     
  const CheckOneEvent =()=>{
    if (CheckOne === false) {
    setCheckOne(true);
  } else {
    setCheckOne(false);
    }
  };
     
  const CheckTwoEvent =()=>{
    if (CheckTwo === false) {
    setCheckTwo(true);
    } else {
    setCheckTwo(false);
    }
  };
     
  const CheckThreeEvent =()=>{
    if (CheckThree === false) {
    setCheckThree(true);
    } else {
    setCheckThree(false);
    }
  };
   
  useEffect(()=>{
    if (CheckOne === true && CheckTwo === true && CheckThree === true){
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [CheckOne,CheckTwo, CheckThree])
   

  const navigate = useNavigate();

  const register = async () => {  
    try {
      if (checkBox.checked == true) {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        //console.log(user);
        navigate('/joinFinish');
      } else {
        alert('이용 약관 전체 동의에 체크해주세요.');
      }
    } catch (error) {
      //console.log(error.message);
      alert('잘못된 정보입니다.');
    } 
  };

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setRegisterEmail(e.target.value);
    const regex = 
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false)
    }
  };
  
  const handlePw = (e) => {
    setRegisterPassword(e.target.value);
    const regex = 
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false)
    }
  };

  return (
    <div>
        <main id="main" className="container left_p join_container">
            <div className="join_txt">
                <h2>Porsche ID를 받으십시오.</h2>
                <p>포르쉐 가족의 일원이 되어 Porsche ID를 만드십시오.</p>
                <p>모든 포르쉐 디지털 서비스 및 기능의 핵심입니다.</p>
            </div>
                <legend className="hide">회원정보</legend>
                <div className="form_group txt">
                    <label htmlFor="email">이메일 주소</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="join_email"  
                        value={registerEmail}
                        onChange={handleEmail}/>
                    <div className='err_txt'>
                        {!emailValid && registerEmail.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                    </div>
                </div>
                <div className="form_group txt">
                    <label htmlFor="pwd">암호</label>
                    <input 
                        type="password" 
                        id="pwd" 
                        className="join_pwd" 
                        name="pwd" 
                        value={registerPassword}
                        onChange={handlePw}/> 
                    <div id="err_message" className="err_txt">
                    {!pwValid && registerPassword.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                    </div>
                </div>
                <div className="chk_wrap">
                    <div>
                        <input type="checkbox" id="chk_all" onClick={() => {
                             checkAll() }}  checked={allCheck} onChange={allBtnEvent} />
                        <label htmlFor="chk_1">전체 동의</label>
                    </div>
                    <div>
                        <input type="checkbox" id="chk_1" name="apply" checked={CheckOne} onChange={CheckOneEvent} />
                        <label htmlFor="chk_1">저는 이용약관의 내용을 확인하였으며, 이에 동의합니다.</label>
                    </div>
                    <div>
                        <input type="checkbox" id="chk_2" name="apply" checked={CheckTwo} onChange={CheckTwoEvent} />
                        <label htmlFor="chk_2">저는 개인정보 수집∙이용 동의서 의 내용을 확인하였으며, 이에 동의합니다.</label>
                    </div>
                    <div>
                        <input type="checkbox" id="chk_3" name="apply" checked={CheckThree} onChange={CheckThreeEvent}  />
                        <label htmlFor="chk_3">저는 개인정보 제3자 제공 동의서 의 내용을 확인하였으며, 이에 동의합니다.</label>
                    </div>
                    <p id="err_apply" className="err_txt"></p>
                </div>
                    <button type="submit" className="submit_btn" onClick={()=> {
                    register()
                    }}>Porsche ID 계정 생성</button>
        </main>
    </div>
  );
}
export default Join;