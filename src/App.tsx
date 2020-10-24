import React from 'react';
import s from './App.module.scss';
import iPadHor from './assets/ipad-mini-horizontal_2.png'
import iPadVer from './assets/ipad-mini-vertifical_2.png'
import iPhoneHor from './assets/iphone5-horizontal_2.png'
import iPhoneVer from './assets/iphone5-vertical_2.png'
import background from './assets/background.jpg'
import icon from './assets/icons/iTunes Store.png'


function App() {
  return (
    <div className={s.app}>
        <div className={s.device_wrapper}>
            <picture>
                <source srcSet={iPadHor} media='(min-width: 1024px)'/>
                <source srcSet={iPadVer} media='(min-width: 768px)'/>
                <source srcSet={iPhoneHor} media='(min-width: 568px)'/>
                <img src={iPhoneVer} alt="" className={s.device}/>
            </picture>
            <div className={s.screen_wrapper}>
                <img src={background} alt=""/>
                <div className={s.screen}>
                    <div className={s.top_bar}>
                        Icons
                    </div>
                    <div  className={s.icons_set}>
                        <div className={s.icons_wrapper}>
                            <img src={icon} alt="" className={s.icons}/>
                            <div className={s.app_name}>Music</div>
                        </div>
                        <div className={s.icons_wrapper}>
                            <img src={icon} alt="" className={s.icons}/>
                            <div className={s.app_name}>Music</div>
                        </div>
                        <div className={s.icons_wrapper}>
                            <img src={icon} alt="" className={s.icons}/>
                            <div className={s.app_name}>Music</div>
                        </div>
                        <div className={s.icons_wrapper}>
                            <img src={icon} alt="" className={s.icons}/>
                            <div className={s.app_name}>Music</div>
                        </div>
                    </div>
                    <div className={s.swap_menu}></div>
                    <div className={s.low_bar}></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
