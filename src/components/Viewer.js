import React, { useState } from 'react'
import Header from './header/Header'
import Images from './Images'
import ImageSelectModal from './ImageSelectModal'

const Viewer = (props) => {
    const [gallery] = useState(props.gallerySelect)
    const [currentView, setCurrentView] = useState({
        prevImg: 0,
        currentImg: 1,
        nextImg: 2
    })
    const [imageSelect, setImageSelect] = useState(undefined)

    // Next Image
    const handleNextImage = () => {
        const imageCount = gallery.length - 1
        // console.log(currentView)

        if (currentView.prevImg < imageCount) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    prevImg: prevState.prevImg + 1
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    prevImg: 0
                })
            )
        }

        if (currentView.currentImg === imageCount) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    currentImg: 0
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    currentImg: prevState.currentImg + 1
                })
            )
        }

        if (currentView.nextImg >= imageCount) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    nextImg: 0
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    nextImg: prevState.nextImg + 1
                })
            )
        }
    }

    // Previous Image
    const handlePreviousImage = () => {
        const imageCount = gallery.length - 1
        // console.log(currentView)

        if (currentView.prevImg <= 0) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    prevImg: imageCount
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    prevImg: prevState.prevImg - 1
                })
            )
        }

        if (currentView.currentImg <= 0) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    currentImg: imageCount
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    currentImg: prevState.currentImg - 1
                })
            )
        }

        if (currentView.nextImg <= 0) {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    nextImg: imageCount
                })
            )
        } else {
            setCurrentView(
                prevState => ({
                    ...prevState,
                    nextImg: prevState.nextImg - 1
                })
            )
        }
    }

    const handleImageSelect = () => {
        setImageSelect(true)
    }

    const handleImageSelectClear = () => {
        setImageSelect(undefined)
    }

    return (
        <div className="wrapper--content">
            <Header />
            <div className="wrapper--images">
                <Images 
                    gallery={gallery}
                    currentView={currentView}
                    handleNextImage={handleNextImage}
                    handlePreviousImage={handlePreviousImage}
                    handleImageSelect={handleImageSelect}
                />
                <div className='label'>
                    <h3>{gallery[currentView.currentImg].title}, {gallery[currentView.currentImg].description}</h3>
                </div>
            </div>
            
            <ImageSelectModal 
                gallery={gallery}
                currentView={currentView}
                imageSelect={imageSelect}
                handleImageSelectClear={handleImageSelectClear}
            />
            
        </div>
    )
}

export default Viewer