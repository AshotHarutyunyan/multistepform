import React from 'react'
import InputItem from '../FormItems/InputItem'
import SelectItem from '../FormItems/SelectItem'
import RadioItem from '../FormItems/RadioItem'
import CheckboxItem from '../FormItems/CheckboxItem'
import { TextInputValid, NumberInputValid, EmailInputValid, CheckboxItemValid } from '../../Helpers/Validations'
import PropTypes from 'prop-types';

const FirstStep = ({formState,handleChange,checkboxChange}) => {
    return (
        <div className="Step" >
            <h2>1/5</h2>
            <h3 className="main_question wizard-header">Please fill with your details</h3>
            <InputItem type="text" name="firstname" placeholder="First Name" data={formState.firstname}
             validations={TextInputValid} handleChange={handleChange} step="step1"/>
             <InputItem type="text" name="lastname" placeholder="Last Name" data={formState.lastname}
             validations={TextInputValid} handleChange={handleChange} step="step1"/>
             <InputItem type="text" name="email" placeholder="email" data={formState.email}
             validations={EmailInputValid} handleChange={handleChange} step="step1"/>
             <SelectItem  data={formState.country} name='country'
              handleChange={handleChange} validations={TextInputValid} step="step1"/>
             <InputItem type="number" name="age" placeholder="Age"  data={formState.age}
             validations={NumberInputValid} handleChange={handleChange} step="step1"/>
             <RadioItem radioItems={['Male','Female']} name='gender' step="step1"   
             data={formState.gender}  handleChange={handleChange} validations={TextInputValid} />
             <CheckboxItem data={formState.terms} name="terms"  checkboxChange={checkboxChange}
             handleChange={handleChange} validations={CheckboxItemValid} step="step1"/>
        </div>
    )
}

export default FirstStep

FirstStep.propTypes = {
    formState: PropTypes.object,
    handleChange: PropTypes.func,
    checkboxChange: PropTypes.func,
}
