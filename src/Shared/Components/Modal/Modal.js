import React from 'react';
import reactDom from 'react-dom';



export default function Modal({ primaryButtonText, primaryButtonIcon, modalTitle, children, isShow, onClose, onPrimaryButtonClicked, onSecondaryButtonClicked }) {
    if (!isShow) return null;

    const onCloseModal = () => {
        onClose();
    }

    const onPrimaryButtonHandler = () => {
        onPrimaryButtonClicked()
    }

    const onSecondaryButtonHandler = () => {
        onSecondaryButtonClicked();
    }


    return reactDom.createPortal(
        <>
            <div className="modal_overlay"></div>
            <div className="modal_container">
                <div className="modal_body">
                    <div className="modal_head">
                        <h3>{modalTitle}</h3>
                        <span onClick={onCloseModal}><i className='far fa-times'></i></span>
                    </div>
                    <div className="modal_content">
                        { children }
                    </div>
                    <div className="modal_footer">
                        <button className='secondary_button' onClick={onSecondaryButtonHandler}><i style={{ fontSize: '1.2rem', paddingRight: '0.4rem' }} className='fas fa-times'></i> Cancel</button>
                        <button className='primary_button' onClick={onPrimaryButtonHandler}><i style={{ fontSize: '1.2rem', paddingRight: '0.4rem' }} className={primaryButtonIcon ? primaryButtonIcon : 'fas fa-trash-alt'}></i> { primaryButtonText ? primaryButtonText : 'Yes, Delete' }</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
