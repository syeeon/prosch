import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'styles/common/reset.css';

// component import
import Header from 'components/Header'
import Footer from 'components/Footer'
import Join from 'page/join'
import JoinFinish from 'page/joinFinish'
import Login from 'page/login'
import Main from 'page/main'
import Model718 from 'page/model_718'
import Model911 from 'page/model_911';
import ModelTaycan from 'page/model_taycan';
import ModelPanamera from 'page/model_panamera';
import ModelMacan from 'page/model_macan';
import ModelCayenne from 'page/model_cayenne';
import MyPage from 'page/mypage';
import ScrollTop from 'components/ScrollTop';

function App() {
  return (
      <BrowserRouter>
      <ScrollTop />
        <div className="App">
          <Header></Header>
          <Routes>
              <Route index path="/" element={<Main />}></Route>
              <Route path="/login/*" element={<Login />}></Route>
              <Route path="/join/*" element={<Join />}></Route>
              <Route path="/joinfinish" element={<JoinFinish />}></Route>
              <Route path="/model_911" element={<Model911 />}></Route>
              <Route path="/model_718" element={<Model718 />}></Route>
              <Route path="/model_taycan" element={<ModelTaycan />}></Route>
              <Route path="/model_panamera" element={<ModelPanamera />}></Route>
              <Route path="/model_macan" element={<ModelMacan />}></Route>
              <Route path="/model_cayenne" element={<ModelCayenne />}></Route>
              <Route path="/mypage/*" element={<MyPage />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
