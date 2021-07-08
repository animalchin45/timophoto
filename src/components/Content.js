import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import ImageMenu from './ImageMenu'
import Viewer from './Viewer'
import ireland from './galleries/ireland'
import americana from './galleries/americana'
import southbound from './galleries/southbound'

const Content = () => {
    return (
        <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path="/images" exact component={ImageMenu} />
                <Route 
                    path="/images/ireland" 
                    exact 
                    render={(props) => (
                        <Viewer {...props} gallerySelect={ireland} />
                    )} 
                />
                <Route 
                    path="/images/americana" 
                    exact 
                    render={(props) => (
                        <Viewer {...props} gallerySelect={americana} />
                    )} 
                />
                <Route 
                    path="/images/southbound" 
                    exact 
                    render={(props) => (
                        <Viewer {...props} gallerySelect={southbound} />
                    )} 
                />        
        </BrowserRouter>
    )
}

export default Content