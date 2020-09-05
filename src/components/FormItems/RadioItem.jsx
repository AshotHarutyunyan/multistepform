import React from 'react'
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

const RadioItem = ({radioItems,name,data,handleChange,step}) => {
    let radioChange = (event) => {
        let text = event.target.value;
        if(text){
            handleChange(step, name , text, 'value')
            handleChange(step, name, '', 'error')
        }
    };

    let items = radioItems.map(item => {
        let key = nanoid();
        return (
            <label key={key} className="container_radio">{item}
                <input type="radio" name={name} value={item} 
                onChange={radioChange} checked={item === data.value ? true : false } />
            </label>
        )
    });

    return (
        <div className="form-group radio_input">
            {items}
            <div className="error">{data.error}</div>
        </div>
    )
}

export default RadioItem

RadioItem.propTypes = {
    name: PropTypes.string,
    radioItems: PropTypes.array,
    data: PropTypes.object,
    handleChange: PropTypes.func,
    step: PropTypes.string,
}
