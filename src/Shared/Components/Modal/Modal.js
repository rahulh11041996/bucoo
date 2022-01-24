import React from 'react';
import reactDom from 'react-dom';
import { DICTIONARY, ICONS } from '../../Data/data';



export default function Modal({ primaryButtonText, primaryButtonIcon, modalTitle, children, isShow, onClose, onPrimaryButtonClicked, onSecondaryButtonClicked }) {
    if (!isShow) return null;

    /**
     * Modal close event handler
     */
    const onCloseModal = () => {
        onClose();
    }

    /**
     * Modal primary button handler
     */
    const onPrimaryButtonHandler = () => {
        onPrimaryButtonClicked()
    }

    /**
     * Modal secondary biutton handler
     */
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
                        <span onClick={onCloseModal}><i className={ICONS.TIMES}></i></span>
                    </div>
                    <div className="modal_content">
                        { children }
                    </div>
                    <div className="modal_footer">
                        <button className='secondary_button' onClick={onSecondaryButtonHandler}><i style={{ fontSize: '1.2rem', paddingRight: '0.4rem' }} className={ICONS.TIMES_BOLD}></i> {DICTIONARY.CANCEL}</button>
                        <button className='primary_button' onClick={onPrimaryButtonHandler}><i style={{ fontSize: '1.2rem', paddingRight: '0.4rem' }} className={primaryButtonIcon ? primaryButtonIcon : ICONS.TRASH}></i> { primaryButtonText ? primaryButtonText : DICTIONARY.YES_DELETE }</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
