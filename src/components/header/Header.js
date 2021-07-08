import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import HeaderTitle from './HeaderTitle'
import HeaderNav from './HeaderNav'

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const location = useLocation()

    const getClassName = () => {
        if (location.pathname === '/') {
            return '--splash'
        } else {
            return ''
        }
    }

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor)

    return (
        <header className={colorChange ? `header${getClassName()} scroll` : `header${getClassName()}`}>
            <div className={`header__inner${getClassName()}`}>
                <HeaderTitle getClassName={getClassName} />
                <HeaderNav getClassName={getClassName}/>
            </div>
        </header>
    )
}

export default Header