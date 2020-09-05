import React from 'react'
import PropTypes from 'prop-types';

const PrevStepBtn = (props) => {
    return (
        <button onClick={props.goToPrevStep}>
            {props.children}
        </button>
    )
}

export default PrevStepBtn

PrevStepBtn.propTypes = {
    goToPrevStep: PropTypes.func
}
