
import '../app.scss';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import apple from '../src_assets/img/apple.jpg';

import React,{useState} from 'react';

function SidebarItem() {

  const [isHide, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
        setMenu(isHide => !isHide); // on,off 개념 boolean
  }

  return (
      <div className='side-item'>
        <div className={isHide ? 'side-main side-active' : 'side-main'} onClick={toggleMenu}>
          <div className='side-mark-area'>
            <div className='side-mark-radios'>
              <img className='side-mark-img' src={apple} />
            </div>
          </div>
          <div className='side-content'>테스트중입니다.</div>
          <div className='side-content-toggle'>{isHide ? <FaCaretDown /> : <FaCaretUp />}</div>
        </div>
        <div className={isHide ? 'side-sub show' : 'side-sub collapse'}>
          <div className='side-sub-item'>
            <div className='side-mark-area'>
              <div className='side-mark-radios'>
                <img className='side-mark-img' src={apple} />
              </div>
            </div>
            <div className='side-content'>테스트중입니다.</div>
          </div>
          <div className='side-sub-item'>
            <div className='side-mark-area'>
              <div className='side-mark-radios'>
                <img className='side-mark-img' src={apple} />
              </div>
            </div>
            <div className='side-content'>테스트중입니다.</div>
          </div>
          <div className='side-sub-item'>
            <div className='side-mark-area'>
              <div className='side-mark-radios'>
                <img className='side-mark-img' src={apple} />
              </div>
            </div>
            <div className='side-content'>테스트중입니다.</div>
          </div>
        </div>
      </div>
  );
}

export default SidebarItem;
