import React from 'react'
import Header from './header/Header'

const Contact = () => {
    return (
        <div className="wrapper--content">
            <Header />
            <section className="article">
                <div className="article__inner">
                    <h2>Contact</h2>
                    <p className="article__text">To inquire about my photographic services please click the link below.</p>
                    <a href="https://www.flickr.com/photos/timobrienphoto" className="btn__contact">info@timophoto.com</a>
                    <div className="social">
                        <a href="https://www.instagram.com" className="btn__social">
                            <i class="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://www.flickr.com" className="btn__social">
                            <i class="fab fa-flickr"></i>
                        </a>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Contact