import React from 'react'
import ReactDOM from 'react-dom'

import Content from './components/Content'

const TimoPhoto = () => {
    return (
        <div>
            <Content />
        </div> 
    )
}

ReactDOM.render(<TimoPhoto />, document.querySelector('#root'))