import React from 'react'

const Images = (props) => {

    return (
        <div className='images'>
            <div 
                className='image image__previous'
                style={{backgroundImage: `url(${props.gallery[props.currentView.prevImg].pathLarge})`}}
                onClick={props.handlePreviousImage}
            >
                <i className="fas fa-arrow-left arrow"></i>
            </div>
            <div 
                className='image image__current'
                style={{backgroundImage: `url(${props.gallery[props.currentView.currentImg].pathLarge})`}}
                onClick={props.handleImageSelect}
            >
            </div>
            <div 
                className='image image__next'
                style={{backgroundImage: `url(${props.gallery[props.currentView.nextImg].pathLarge})`}}
                onClick={props.handleNextImage}
            >         
                <i className="fas fa-arrow-right arrow"></i>
            </div>
        </div>
    )
}

export default Images