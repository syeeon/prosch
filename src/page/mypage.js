import React, { useState, useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";

import 'styles/page/mypage.css'

import {
    onAuthStateChanged,			
    signOut,						
    updatePassword,					
  } from "firebase/auth";
  import { auth } from "../firebase";


function MyPage() {

    const [user, setUser] = useState({});
    const [pwValid, setPwValid] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
    }, [user]);

    const navigate = useNavigate();

    const logout = async () => {
       await signOut(auth); 
       alert('정상적으로 로그아웃 되었습니다.')
       navigate('/');
      };   

      const [newPassword, setNewPassword] = useState("");

      const pwdChanged = async () => { 
        try {
          if (user) {
            updatePassword(user, newPassword);
          } else {
            alert("로그인 하세요.");
          }
        } catch (error) {
          console.log(error);
        }
      };

      const handlePw = (e) => {
        setNewPassword(e.target.value);
        const regex = 
          /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };

      function pwdChange(){
        document.querySelector('.mw').style.display='block';
      }

      function close(){
        alert("비밀번호 변경이 완료됐습니다.");
        document.querySelector('.mw').style.display='none'
      }
  return (
    <main id="main" className="container left_p">
       <h1 className='mypage_title'>My Porsche</h1>
       {
        user?.email == null
        ? <p className='err_login'>로그인 후 이용이 가능합니다.</p>
        : <p className='user'>{user?.email} 님 안녕하세요.</p>
       }
        <Link className='logout_btn' onClick={logout}>로그아웃</Link>
        <Link className='pwd_change_btn' onClick={pwdChange}>비밀번호 변경</Link>
       <div className='reservation_box'>
            <h2>My Reservation</h2>
            <p>딜러와의 예약을 통해 꿈의 차인 포르쉐를 소유하세요</p>
            <Link to="" className='link_reservation'>상담 예약하기</Link>
            <Link to="" className='link_reservation'>예약 정보 확인하기</Link>
            <div id="mw" className='mw'>
              <div className='bg' name="bg">
                <div className='fg'>
                  <h3>비밀번호 변경</h3>
                  <input
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    onChange={handlePw} />
                  <div id="err_message" className="pwd_change_err_txt">
                    {!pwValid && newPassword.length > 0 && (
                  <div className='pwd_change_err_txt'>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
              </div>
                  <button onClick={() => { pwdChanged(); close(); }}> 변경하기 </button>
                </div>
              </div>
            </div>
       </div>

    </main>
  );
}

export default MyPage;
