import React from 'react';

export const Text = ({ error, col, placeholder, onFieldBlur, name, value }) => {

    const onBlurHandler = (event) => {
        !(!!(event.target.value.trim())) && onFieldBlur(event.target.value, name)
    }

    const onChangeHanlder = (event) => {
        onFieldBlur(event.target.value, name)
    } 

    return <div className="input_field_wrapper" style={{gridColumn: `span ${col}`}}>
        <label htmlFor="">{placeholder} *</label>
        <input className={!!error ? 'error_border' : ''} type="text" name={name} value={value} placeholder={placeholder} onChange={onChangeHanlder} onBlur={onBlurHandler}/>
        {!!error && <small className='error_field'><b>{placeholder}</b> {error}</small>}
    </div>;
};
