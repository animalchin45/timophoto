import React from 'react'
import Header from './header/Header'

const About = () => {
    return (
        <div className="wrapper--content">
            <Header />
            <section className="article">
                <div className="article__inner">
                    <h2>About Me</h2>
                    <p className="article__text">Hello and thank you for taking a moment to look at my photographs. Originally from the Chicago area and now living in Florida, I often find myself making images that reflect my surroundings.</p>
                </div>
            </section>
        </div>
    )
}

export default About