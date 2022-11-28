import React from 'react';

function InputComponent({name, label, value, clickHandler,type, labelName, children }) {
    return (
        <>
        <label htmlFor={`details-${labelName}`}>{label}</label>
            {children}
        <input
            type={type}
            name={name}
            id={`detail${labelName}`}
            value={value}
            onChange={clickHandler}
        />

        </>
    );
}

export default InputComponent;