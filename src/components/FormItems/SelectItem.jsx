import React from 'react'
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

const SelectItem = ({data,handleChange,name,validations,step}) => {
    let removeError = (text) => {
        if( validations(text) === true ){
            handleChange(step, name, '', 'error')
        }
    }

    let selectChange = (event) => {
        let value = event.target.value;
        handleChange(step, name , value, 'value')
        removeError(value)
    };

    let countrys = ['Europe','Asia','North America','South America','Oceania'];
    let items = countrys.map(item => {
        let key = nanoid();
            return (
                <option key={key} value={item}>{item}</option>
            )
        }
    );

    return (
        <div>
            <select name="country"  onChange={selectChange} value={data.value}>
                <option  value="" >Your Country</option>
                {items}
            </select>
            <div className="error">{data.error}</div>
        </div>
    )
}

export default SelectItem

SelectItem.propTypes = {
    name: PropTypes.string,
    validations: PropTypes.func,
    data: PropTypes.object,
    handleChange: PropTypes.func,
    step: PropTypes.string,
}
