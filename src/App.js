
import './app.scss';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaPowerOff } from 'react-icons/fa';

import apple from './src_assets/img/apple.jpg';

import React,{useState, useEffect} from 'react';

import SidebarItem from './component/SidebarItem';

function App() {

  const [isHide, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
        setMenu(isHide => !isHide); // on,off 개념 boolean
  }

  useEffect(() =>{
    window.addEventListener('resize', testResize);
    return() =>{
      window.removeEventListener('resize', testResize);
    }
  },[]);

  const testResize = () => {
    if(window.innerWidth < 1190){
      setMenu(true);
    }
  }

  return (
    <div>
      <div className='wrapper'>
        <div className={isHide ? "side-hide" : "side-area"}>
          <div className='logo-area header-area'>
            <div className='logo-mark-area'>
              <div className='logo-mark-radios'>
                <img className='logo-mark-img' src={apple} />
              </div>
            </div>
            <div className='logo-content'>테스트중입니다.</div>
          </div>
          <div className='sidebar'>
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
          </div>
        </div>
        <div className='main-area'>
          <div className='header header-area'>
            <div className='side-toggle'>
              <div>
                <button type='button' className='btn' onClick={()=>toggleMenu()}>{isHide ? <FaRegArrowAltCircleRight /> : <FaRegArrowAltCircleLeft />}</button>
              </div>
            </div>
            <div className='nav'>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
              <div className='nav-item'><a href='javascript:void(0)'>나는나아</a></div>
            </div>
            <div className='header-tools'>
              <div className='header-tools'>
                <a className='btn logout' href='/logout'><FaPowerOff /></a>
              </div>
            </div>
          </div>
          <div className='content-area'>
            <div>1</div>
          </div>
          <div className='footer-area'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
