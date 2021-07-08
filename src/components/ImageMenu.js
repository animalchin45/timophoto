import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Header from './header/Header'

const ImageMenu = () => {
    const menuItems = [
        {
            name: 'IRELAND',
            img: '/images/menu/ireland.jpg',
            description: `Step across the Atlantic to a Celtic island.`,
            href: '/images/ireland'
        },
        {
            name: 'AMERICANA',
            img: '/images/menu/americana.jpg',
            description: `This is the best we could do here in the good ol' U S of A!`,
            href: '/images/americana'
        },
        {
            name: 'SOUTHBOUND',
            img: '/images/menu/southbound.jpg',
            description: `Keep on movin' on`,
            href: '/images/southbound'
        }
    ]

    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

    const renderedMenuItemsDesktop = menuItems.map((item) => {
        return (
            <div className="btn__menu">
                <div className="btn__menu--header">
                    <h3 className="btn__menu--title">{item.name}</h3>
                </div>
                <Link 
                    to={item.href}
                    className="btn__menu--image" 
                    style={{backgroundImage: `url(${item.img})`}}
                >    
                </Link>
                <div className="btn__menu--footer">
                    <p className="btn__menu--description">{item.description}</p>
                </div>
            </div>
            
        )
    })

    const renderedMenuItemsMobile = menuItems.map((item) => {
        return (
            <div className="btn__menu">
                <Link 
                    to={item.href}
                    className="btn__menu--image" 
                    style={{backgroundImage: `url(${item.img})`}}
                >    
                </Link>
                <div className="btn__menu--article">
                    <div className="btn__menu--header">
                        <h3 className="btn__menu--title">{item.name}</h3>
                    </div>
                    <div className="btn__menu--footer">
                        <p className="btn__menu--description">{item.description}</p>
                    </div>
                </div>
            </div>
            
        )
    })

    return (
        <div>
            <Header />
            <section className="image-menu">
                {isDesktop && renderedMenuItemsDesktop}
                {isMobile && renderedMenuItemsMobile}
            </section>
        </div>
    )
}

export default ImageMenu