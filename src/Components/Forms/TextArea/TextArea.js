import React from 'react';

export const TextArea = ({ error, col, placeholder, onFieldBlur, name, value }) => {

    /**
     * Field blur handler
     * @param {field event } event 
     */
    const onBlurHandler = (event) => {
        !(!!(event.target.value.trim())) && onFieldBlur(event.target.value, name)
    }

    /**
     * Onchange event handler
     * @param {input event } event 
     */
    const onChangeHanlder = (event) => {
        onFieldBlur(event.target.value, name)
    }

    return <div className="input_field_wrapper" style={{ gridColumn: `span ${col}` }}>
        <label htmlFor="">{placeholder} *</label>
        <textarea className={!!error ? 'error_border' : ''} name={name} value={value} placeholder={placeholder} onChange={onChangeHanlder} onBlur={onBlurHandler} />
        {!!error && <small className='error_field'><b>{placeholder}</b> {error}</small>}
    </div>;
};
