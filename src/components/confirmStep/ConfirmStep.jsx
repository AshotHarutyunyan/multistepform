import React from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ConfirmStep = ({formState}) => {
    let step2 = formState.step2.satisfied.value;
    let step3 = formState.step3.quiz.value.map(item => {
        if(item.checked){
            let key = nanoid();
            return <div key={key}>{item.text}</div>
        }
        return null
    });
    let step4 = [];
    for (const [ , item] of Object.entries(formState.step4)) {
        let key = nanoid();
        step4.push(<div key={key}>{item.value}</div>)
    }

    return (
        <div>
            <h2>5/5</h2>
            <h3>Summary</h3>
            <h4>How do rate your overall satisfaction about the service provided?</h4>
            {step2}
            <h4>How did you hear about our company?</h4>
            {step3}
            <h4>Do you think to suggest our company to a friend or parent?</h4>
            {step4}
        </div>
    )
}

export default ConfirmStep

ConfirmStep.propTypes = {
    formState: PropTypes.object,
}
