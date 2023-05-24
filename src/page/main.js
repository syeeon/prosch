import React from 'react';

import 'styles/page/main.css'
import 'styles/responsive/reMain.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Main() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }  
    const bbox = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 1024, //화면 사이즈 960px
          settings: {
            slidesToShow: 2
          } 
        },
        { 
          breakpoint: 769, //화면 사이즈 768px
          settings: {    
            slidesToShow: 1
          } 
        }
      ]
    }  
  return (
    <main id="main" className="container">
        <section>
            <h2 className="hide">주요소식</h2>
            <Slider className="mainBanner" {...settings}>
                <li>
                    <a href="">
                        <img src="img/main/main_1.jpg" alt="메인배너_1" />
                        <div className="banner_txt">
                            <p>Sonderwunsch.</p>
                            <p>You dream it. We build it.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/main_2.jpg" alt="메인배너_2" />
                        <div className="banner_txt">
                            <div>
                                <p>Soul, electrified.</p>
                                <p>The Taycan.</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/main_3.jpg" alt="메인배너_3" />
                        <div className="banner_txt">
                            <div>
                                <p>Sportscar Together.</p>
                                <p>The Cayenne Turbo.</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/main_4.jpg" alt="메인배너_4" />
                        <div className="banner_txt">
                            <div>
                                <p>More of what you love.</p>
                                <p>The 911 Targa 4 GTS.</p>
                            </div>
                        </div>
                    </a>
                </li> 
            </Slider>
        </section>
        <section className="models">
            <h2 className="title containerwrap">Models</h2>
            <div className="model_wrap">
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_718.jpg" alt="718 model img" />
                        <div className="link_top">
                            <p className="name">718</p>
                            <p className="price">91,600,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_911.jpg" alt="911 model img" />
                        <div className="link_top">
                            <p className="name">911</p>
                            <p className="price">158,700,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_taycan.jpg" alt="Taycan model img" />
                        <div className="link_top">
                            <p className="name">Taycan</p>
                            <p className="price">123,800,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_panamera.jpg" alt="Panamera model img" />
                        <div className="link_top">
                            <p className="name">Panamera</p>
                            <p className="price">150,300,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_macan.jpg" alt="Macan model img" />
                        <div className="link_top">
                            <p className="name">Macan</p>
                            <p className="price">103,000,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
                <div className="model_box">
                    <div className="img_box">
                        <img src="img/main/model_cayenne.jpg" alt="Cayenne model img" />
                        <div className="link_top">
                            <p className="name">Cayenne</p>
                            <p className="price">117,200,000 KRW 부터</p>
                        </div>
                        <div className="link_bottom">
                            <a href="#" className="main">나만의 포르쉐 만들기</a>
                            <a href="#" className="all">모든 모델</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="search containerwrap">
            <h2 className="title">포르쉐 인증 중고차 찾기</h2>
            <ul className="search_box">
            <Slider  {...bbox}>
                <li className="list">
                    <img src="img/main/search_718.jpg" alt="718 모델 찾기" />
                    <a href="#">718 모델 찾기</a>
                </li>
                <li className="list">
                    <img src="img/main/search_911.jpg" alt="911 모델 찾기" />
                    <a href="#">911 모델 찾기</a>
                </li>
                <li className="list">
                    <img src="img/main/search_taycan.jpg" alt="Taycan 모델 찾기" />
                    <a href="#">Taycan 모델 찾기</a>
                </li>
                <li className="list">
                    <img src="img/main/search_panamera.jpg" alt="Panamera 모델 찾기" />
                    <a href="#">Panamera 모델 찾기</a>
                </li>
                <li className="list">
                    <div><img src="img/main/search_macan.jpg" alt="Macan 모델 찾기" /></div>
                    <a href="#">Macan 모델 찾기</a>
                </li>
                <li className="list">
                    <img src="img/main/search_macan.jpg" alt="Cayenne 모델 찾기" />
                    <a href="#">Cayenne 모델 찾기</a>
                </li>
            </Slider>
            </ul>
            </section>
            <section className="shopping containerwrap">
            <h2 className="title">Shopping Tools</h2>
            <div className="tools_wrap">
                <ul className="tools_box">
                    <li className="tool_1">
                        <div className="img_box">
                            <img src="img/main/shpooingTools_1.jpg" alt="포르쉐 모델 자세히 보기" />
                        </div>
                        <a href="#">포르쉐 모델 자세히 보기</a>
                    </li>
                    <li className="tool_2 sub2">
                        <div className="img_box">
                            <img src="img/main/shpooingTools_2.jpg" alt="포르쉐 센터 찾기" />
                        </div>
                        <a href="#">포르쉐 센터 찾기</a>
                    </li>
                    <li className="tool_2 sub3">
                        <div className="img_box">
                            <img src="img/main/shpooingTools_3.jpg" alt="포르쉐 파이낸셜 서비스" />
                        </div>
                        <a href="#">포르쉐 파이낸셜 서비스</a>
                    </li>
                    <li className="tool_2 tool_4">
                        <div className="img_box">
                            <img src="img/main/shpooingTools_4.jpg" alt="포르쉐 익스클루시브 메뉴팩투어" />
                        </div>
                        <a href="#">포르쉐 익스클루시브 메뉴팩투어</a>
                    </li>
                </ul>
            </div>
        </section>
        <section className="discover containerwrap">
            <h2>Discover</h2>
            <ul className="discover_wrap">
                <li>
                    <a href="">
                        <img src="img/main/discover_1.jpg" alt="Porsche Exclusive Manufaktur." />
                        <p>Porsche Exclusive Manufaktur.</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/discover_2.jpg" alt="Porsche Financial Services." />
                        <p>Porsche Financial Services.</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/discover_3.jpg" alt="Porsche Lifestyle." />
                        <p>Porsche Lifestyle.</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/main/discover_4.jpg" alt="Porsche Connect Store." />
                        <p>Porsche Connect Store.</p>
                    </a>
                </li>
            </ul>
        </section>
    </main>
  );
}

export default Main;
