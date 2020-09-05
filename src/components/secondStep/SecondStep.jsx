import React from 'react'
import RadioItem from '../FormItems/RadioItem'
import { TextInputValid } from '../../Helpers/Validations'
import PropTypes from 'prop-types';

const SecondStep = ({formState,handleChange}) => {
    return (
        <div className="Step" >
            <h2>2/5</h2>
            <h3 className="main_question wizard-header">How do rate your overall satisfaction about the service provided?</h3>
             <RadioItem radioItems={['Not Satisfied','Quite Satisfied','Satisfied','Completely Satisfied','Extremely Satisfied']} 
             name='satisfied' step="step2"  data={formState.satisfied}  handleChange={handleChange} validations={TextInputValid} />
        </div>
    )
}

export default SecondStep

SecondStep.propTypes = {
    formState: PropTypes.object,
    handleChange: PropTypes.func,
}
