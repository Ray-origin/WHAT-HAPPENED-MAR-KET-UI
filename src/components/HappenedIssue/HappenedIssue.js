import React from 'react'
import SeeMore from '../SeeMore/SeeMore'
import './HappenedIssue.css'

function HappenedIssue() {
  return (
    <div id="happenedissue">
        <div className="happendissue--background"></div>
        <h1 className="happenedissue--h1">
            Happened's issue
        </h1>  
        <p className="kr happenedissue--p">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br/>
        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <div className='happenedissue__seemore'>
            <SeeMore/>
        </div>
        
        <img src="imgs/images/xucxac5.png" alt="" className="threeroll"/>
        <img src="imgs/images/xucxac3.png" alt="" className="fiveroll"/>
        
        <div className="brand">
            <div className="brand__brandblock">
                    <h1>
                        whpn<br/>
                        issue
                    </h1>
                    <img src="imgs/images/arrow.png" alt="" className="arrow"/>
        
            </div>
            <div className="brand__brandblock">
                <img src="imgs/images/ahead.png" alt="" className="ahead"/>
                <div className="brand__brandblock--title">
                    <img src="imgs/images/hot.png" alt="" className="hot"/>
                    <h2>b brand</h2>
                </div>
                <div className="imgcontain">
                    <img src="imgs/images/bbrand.PNG"  alt="" className="model"/>
                </div>
            </div>
            <div className="brand__brandblock">
                <div className="brand__brandblock--title">
                    <h2>c brand</h2>
                </div>
                <div className="imgcontain">
                    <img src="imgs/images/cbrand.png" alt="" className="model"/>
                </div>
            </div>
            <div className="brand__brandblock">
                <div className="brand__brandblock--title  dbrand">
                    <h2>d brand</h2>
                </div>
                <div className="imgcontain">
                    <img src="imgs/images/dbrand.png" alt="" className="model"/>
                </div>
            </div>
            <div className="brand__brandblock">
                <img src="imgs/images/lol.png" alt="" className="lol"/>
                <div className="brand__brandblock--title">
                    <h2>e brand</h2>
                </div>
        
                <div className="imgcontain">
                    <img src="imgs/images/ebrand.png" alt="" className="model"/>
        
                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default HappenedIssue
