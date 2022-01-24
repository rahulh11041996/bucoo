import React from 'react';

export const Text = ({ error, col, placeholder, onFieldBlur, name, value, onEnterKeyPressed }) => {

    /**
     * Field blur handler
     * @param {Field event } event 
     */
    const onBlurHandler = (event) => {
        !(!!(event.target.value.trim())) && onFieldBlur(event.target.value, name)
    }

    /**
     * Onchange handler
     * @param {field handler} event 
     */
    const onChangeHanlder = (event) => {
        onFieldBlur(event.target.value, name)
    } 

    /**
     * On enter key clicked
     * @param {input event handler} event 
     */
    const onEnterKeyPress = (event) => {
        event.keyCode === 13 && onEnterKeyPressed();
    }

    return <div className="input_field_wrapper" style={{gridColumn: `span ${col}`}}>
        <label htmlFor="">{placeholder} *</label>
        <input className={!!error ? 'error_border' : ''} type="text" onKeyUp={onEnterKeyPress} name={name} value={value} placeholder={placeholder} onChange={onChangeHanlder} onBlur={onBlurHandler}/>
        {!!error && <small className='error_field'><b>{placeholder}</b> {error}</small>}
    </div>;
};
