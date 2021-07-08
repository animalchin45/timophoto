import React, { useEffect } from 'react'
import Modal from 'react-modal'

const ImageSelectModal = (props) => {

    useEffect(() => {
        Modal.setAppElement('body')
      }, [])
    
    return (
        <div>
            <Modal
                isOpen={!!props.imageSelect}
                onRequestClose={props.handleImageSelectClear}
                contentLabel='Selected Image'
                closeTimeoutMS={200}
                className='modal'
            >
                <img 
                    className='modal__img'
                    alt={props.gallery[props.currentView.currentImg].title}
                    onClick={props.handleImageSelectClear}
                    src={props.gallery[props.currentView.currentImg].pathLarge}
                >
                </img>
            </Modal>
        </div> 
    )
}

export default ImageSelectModal