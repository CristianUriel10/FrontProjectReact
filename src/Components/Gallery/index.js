import React, { useState } from 'react';
import { MainContainer } from './index.styled';

const GalleryComponent = props => {

    const [showNextButton, setShowNextButton] = useState(true);
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const nextPage = () => {
        if (props.currentPage !== 12 && props.currentPage !== 14){
            props.setCurrentPage(props.currentPage + 3)
            setShowPreviousButton(true)
        } else if (props.currentPage === 12) {
            props.setCurrentPage(props.currentPage + 2)
            setShowPreviousButton(true)
            setShowNextButton(false)
        }
    }
    const previousPage = () => {
        if (props.currentPage !== 0 && props.currentPage !== 2){
            props.setCurrentPage(props.currentPage - 3)
            setShowNextButton(true)
        } else if (props.currentPage === 2) {
            props.setCurrentPage(props.currentPage - 2)
            setShowNextButton(true)
            setShowPreviousButton(false)
        }
    }
    return (
        <MainContainer>
            <div className="LeftIcon">
                <div></div>
                {showPreviousButton && <svg style={{cursor: 'pointer'}} onClick={() => previousPage()} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>}
            </div>
            <div className="Gallery1">
                {props.data[props.currentPage] && <img src={props.data[props.currentPage].imageKey} />}
                {props.data[props.currentPage + 1] && <img src={props.data[props.currentPage + 1].imageKey} />}
                {props.data[props.currentPage + 2] && <img src={props.data[props.currentPage + 2].imageKey} />}
            </div>
            <div className="Gallery2">
                {props.data[props.currentPage + 3] && <img src={props.data[props.currentPage + 3].imageKey} />}
                {props.data[props.currentPage + 4] && <img src={props.data[props.currentPage + 4].imageKey} />}
                {props.data[props.currentPage + 5] && <img src={props.data[props.currentPage + 5].imageKey} />}
            </div>
            <div className="LeftIcon">
                <div></div>
                {showNextButton && <svg style={{cursor: 'pointer'}} onClick={() => nextPage()} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>}
            </div>
        </MainContainer>
    )
}

export default GalleryComponent