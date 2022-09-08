import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div id="footer">
    <div className="contain">
        <div className="footer__whathappened">
            <h3>
                what happened
            </h3>
            <p className='kr'>
                [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
                [공지] 29CM 강남 스토어 영업 종료<br/>
                [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
                [공지] iOS 10 이하 버전 지원 중단 안내<br/>
                [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
        </div>

        <div className="footer__help aboutus" >
            <h3>
                about us
            </h3>
            <p className='kr'>
                회사 소개<br/>
                인재 채용<br/>
                상시 할인 혜택<br/>
            </p>
        </div>


        <div className="footer__help myorder" >
            <h3>
                my order
            </h3>
            <p>
                내 주문<br/>
                주문 배송<br/>
                취소 / 교환 / 반품 내역<br/>
                상품 리뷰 내역<br/>
                증빙 서류 발급<br/>
            </p>
        </div>
    
    
        <div className="footer__help myaccount" >
            <h3>
                my account
            </h3>
            <p>
                회원 정보 수정<br/>
                회원 등급<br/>
                마일리지 현황<br/>
                쿠폰<br/>
            </p>
        </div>
    
    
            <div className="footer__help">
                <h3>
                   help
                </h3>
                <p>
                    1 : 1 상담 내역<br/>
                    상품 Q & A 내역<br/>
                    공지 사항<br/>
                    자주하는 질문<br/>
                    고객의 소리<br/>
                </p>
            </div>




    </div>

    <div className="outro">
        <p>
            © 2020-2021 what happened corp  ｜  
           
        </p>
        <p className="kr">
            (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 
        </p>

        <p> 
            : 356-00-00000 ㅣ test0101@what happened.co.kr
        </p>
        <p className="kr">
            서울특별시 강남구 도산대로 8길 17 
        </p>

        <p> 
            ｜ FAX : 070-0000-0000  l  
        </p>
        <p className="kr">
            서비스 이용약관  l  개인정보처리방침
        </p>
    </div>
</div>
  )
}

export default Footer