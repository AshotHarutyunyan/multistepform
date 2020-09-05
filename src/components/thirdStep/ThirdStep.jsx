import React from 'react'
import CheckboxItem from '../FormItems/CheckboxItem'
import { CheckboxItemValid } from '../../Helpers/Validations'
import PropTypes from 'prop-types';

const ThirdStep = ({formState,handleChange,checkboxChange}) => {
    return (
        <div className="Step" >
            <h2>3/5</h2>
            <h3 className="main_question wizard-header">How did you hear about our company?</h3>
             <CheckboxItem data={formState.quiz} name="quiz"  checkboxChange={checkboxChange}
             handleChange={handleChange} validations={CheckboxItemValid} step="step3"/>
        </div>
    )
}

export default ThirdStep

ThirdStep.propTypes = {
    formState: PropTypes.object,
    handleChange: PropTypes.func,
    checkboxChange: PropTypes.func,
}
