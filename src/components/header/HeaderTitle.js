import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTitle = ({ getClassName }) => {
    return (
        <div className={`header__title${getClassName()}`}>
            <div className="header__title__inner">
                <Link to="/">
                    <h1 className="title">Tim O'Brien</h1>
                    <h1 className="title--sub">Photographer</h1>
                </Link>
            </div>   
        </div>
    )
}

export default HeaderTitle