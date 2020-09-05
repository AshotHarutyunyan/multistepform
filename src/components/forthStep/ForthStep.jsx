import React from 'react'
import RadioItem from '../FormItems/RadioItem'
import { TextInputValid } from '../../Helpers/Validations'
import InputItem from '../FormItems/InputItem';
import PropTypes from 'prop-types';

const ForthStep = ({formState,handleChange}) => {
    return (
        <div className="Step" >
            <h2>4/5</h2>
            <h3 className="main_question wizard-header">Do you think to suggest our company to a friend or parent?</h3>
            <RadioItem radioItems={['No','Maybe','Probably','100% sure']} 
            name='partnerQuiz' step="step4"  data={formState.partnerQuiz}  handleChange={handleChange} validations={TextInputValid} />
            <h4 className="main_question wizard-header">In no, please describe with few words why</h4>
            <InputItem type="text" name="describe" placeholder="Type here additional info..."
            data={formState.describe}  handleChange={handleChange} step="step4"/>
        </div>
    )
}

export default ForthStep

ForthStep.propTypes = {
    formState: PropTypes.object,
    handleChange: PropTypes.func,
}