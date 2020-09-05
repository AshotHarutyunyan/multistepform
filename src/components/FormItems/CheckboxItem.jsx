import React from 'react'
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

const CheckboxItem = ({name,data,checkboxChange,validations,handleChange,step}) => {
    let removeError = (data) => {
        if(validations){
            let isValid = validations(data);
            if(isValid === true){
                handleChange(step, name, 'required', 'error')
            }else{
                handleChange(step, name, '', 'error')
            }
        }
    }

    let toggleChange = (event) => {
        const target = event.target;
        const checked = target.type === 'checkbox' ? target.checked : !target.children[0].checked;
        const id = target.type === 'checkbox' ? target.getAttribute('data-id') : !target.children[0].getAttribute('data-id');
        checkboxChange(step,name,Number(id),checked)
        removeError(data.value)
    };

    let items = data.value.map(item => {
        let key = nanoid();
        return (
            <label key={key} className="container_check" >
                <input type="checkbox" name={name} checked={item.checked} onChange={toggleChange} data-id={item.id}/>
                {item.text}
            </label>
        )
    });

    return (
        <div className="form-group terms">
            {items}
            <div className="error">{data.error}</div>
        </div>
    )
}

export default CheckboxItem

CheckboxItem.propTypes = {
    name: PropTypes.string,
    data: PropTypes.object,
    checkboxChange: PropTypes.func,
    validations:PropTypes.func,
    handleChange: PropTypes.func,
    step: PropTypes.string,
}