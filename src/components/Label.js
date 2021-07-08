import React from 'react'

const Label = (props) => (
    <div className='label'>
        <h3>{props.gallery[props.currentView.currentImg].title}</h3>
        <h3>{props.gallery[props.currentView.currentImg].description}</h3>
    </div>
)

export default Label