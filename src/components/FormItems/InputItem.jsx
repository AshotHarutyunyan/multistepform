import React, { useState } from 'react'
import PropTypes from 'prop-types';

const InputItem = ({type,name,placeholder,data,validations,handleChange,step}) => {
    let [value,setValue] = useState(data.value);

    let removeError = (text) => {
        if(validations){
            let isValid = validations(text);
            if(isValid === true){
                handleChange(step, name, '', 'error')
            }else{
                handleChange(step, name, isValid, 'error')
            }
        }
    };

    let blur = () => {
        removeError(value)
        handleChange(step, name, value, 'value')
    };
    
    let changeValue = (event) => {
        let text = event.target.value ;
        if(type === "number"){
            setValue(Number(text))
        }else{  
            setValue(text)
        }
    };

    return (
        <div className="form-group">
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={changeValue} onBlur={blur}/>
            <div className="error">{data.error}</div>
        </div>
    )
}

export default InputItem

InputItem.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.object,
    validations:PropTypes.func,
    handleChange: PropTypes.func,
    step: PropTypes.string,
}
