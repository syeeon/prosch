import { useState } from 'react';
import {Link} from 'react-router-dom' 

import 'styles/common/footer.css'
import 'styles/responsive/reFooter.css'

function Footer() {

    const [isOff_1, setIsoff_1] = useState(false);
    const [isOff_2, setIsoff_2] = useState(false);
    const [isOff_3, setIsoff_3] = useState(false);
    const [isOff_4, setIsoff_4] = useState(false);

    const toggleMenu1 = () => {
        setIsoff_1(isOff_1 => !isOff_1);
    }
    const toggleMenu2 = () => {
        setIsoff_2(isOff_2 => !isOff_2);
    }
    const toggleMenu3 = () => {
        setIsoff_3(isOff_3 => !isOff_3);
    }
    const toggleMenu4 = () => {
        setIsoff_4(isOff_4 => !isOff_4);
    }
    
  return (
<footer id="footer">
        <div className="footer_link containerwrap">
            <h2 className="hide">사이트 이용안내</h2>
            <hr className="line pc" />
            <div id="faq" className="link_wrap">
                <div className='panel-question' onClick={ () => toggleMenu1()}>
                    <h3 className='panel-heading'>Build & Find</h3>
                    <div className={isOff_1 ? "show-menu" : "hide-menu"}>
                        <a href="#" className='footer_sub'>나만의 포르쉐 만들기</a>
                        <a href="#" className='footer_sub'>포르쉐 인증 중고차 찾기</a>
                        <a href="#" className='footer_sub'>포르쉐 센터 찾기</a>
                    </div>
                </div>
                <div className='panel-question' onClick={ () => toggleMenu2()}>
                    <h3 className='panel-heading'>Online Services</h3>
                    <div className={isOff_2 ? "show-menu" : "hide-menu"}>
                        <a href="" className='footer_sub'>Porsche Financial Services</a>
                        <a href="" className='footer_sub'>뉴스레터 구독</a>
                    </div>
                </div>
                <div className='panel-question' onClick={ () => toggleMenu3()}>
                    <h3 className='panel-heading'>Behind the Scenes</h3>
                    <div className={isOff_3 ? "show-menu" : "hide-menu"}>
                        <a href="#" className='footer_sub'>Passion Motorsports</a>
                        <a href="#" className='footer_sub'>Porsche Experience</a>
                        <a href="#" className='footer_sub'>Porsche ClassNameic</a>
                    </div>
                </div>
                <div className='panel-question' onClick={ () => toggleMenu4()}>
                    <h3 className="last panel-heading">Porsche Company</h3>
                    <div className={isOff_4 ? "show-menu" : "hide-menu"}>
                        <a href="#" className='footer_sub'>Contact & Information</a>
                        <a href="#" className='footer_sub'>Christophorus - The Porsche Magazine</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_bottom containerwrap">
            <h3 className="hide">언어</h3>
            <p className="language">국가 / 지역 변경 :</p>

            <select className="main">
                <option>지역을 선택하여 주십시오</option>
                <option>North America</option>
                <option>Latin America</option>
                <option>Europe</option>
                <option>Middle East</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Australia/Oceania</option>
            </select>

            <select className="sub">
                <option>국가 / 지역을 선택하십시오</option>
                <option>Mexico</option>
                <option>Argentina</option>
                <option>Bolivia</option>
                <option>Brazil</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Costa Rica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>El Salvador</option>
                <option>Guatemala</option>
                <option>Haiti</option>
                <option>Honduras</option>
                <option>Jamaica</option>
                <option>Panama</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Puerto Rico</option>
                <option>Trinidad & Tobago</option>
                <option>Uruguay</option>
                <option>Venezuela</option>
                <option>Other countries</option>
            </select>
            
            
            <p className="cw">© 2022 Porsche Korea Ltd. </p>
            <div className="">
                <a href="#">Legal notice </a>
                <a href="#">개인정보처리방침 </a>
                <a href="#">쿠키 정책 </a>
                <a href="#">위치정보사업 이용약관 </a>
                <a href="#">위치기반서비스 이용약관 </a>
                <a href="#">포르쉐 그룹 부정비리 제보 시스템 </a>
                <a href="#">Open Source Software Notice.</a>
            </div>
            
            <p className="cs">포르쉐 고객센터 080-8100-911 </p>
            
            <div className="guidelines">
                <p>※ 표기된 연비는 표준 모드에 의한 것으로 도로상태, 운전방법, 차량적재, 정비상태 및 외기온도에 따라 실주행연비와 차이가 있습니다.</p>
                <p>※ 본 웹사이트에 기재된 내용은 사전에 예고 없이 변경될 수 있으므로 실제 차량과 다를 수 있습니다.</p>
                <p>※ 차량 이미지는 실제 모델과 다를 수 있으며, 국내 적용 사양 및 구성에 따라 차이가 있을 수 있습니다.</p>
                <p>※ 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않을 수 있습니다.</p>
                <p>※ 개별소비세 인하 관련 공지사항</p>
                <p>포르쉐 코리아는 정부의 일시적 개별소비세 인하 정책에 따라 적용 대상 차량에 대해 개별소비세 감면 혜택을 적용합니다.</p>
                <p>자세한 사항은 포르쉐 센터를 통하여 문의하시기 바랍니다.</p>
                <p>※본 페이지에 기재된 차량 가격은 권장소비자가격(MSRP)으로, 선택 사양, 취득세, 운송료 및 기타 핸들링에 대한 비용은 포함하지 않으며 실제 판매 가격과 상이할 수 있습니다.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
