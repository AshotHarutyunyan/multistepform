import React from 'react'
import { connect } from 'react-redux'
import { goToNextStep } from "../../Redux/actionCreators"
import PropTypes from 'prop-types';

const NextStepBtn = (props) => {
    return (
        <button onClick={props.toNextStep}>{props.children}</button>
    )
}

export default connect(null,{goToNextStep})(NextStepBtn)

NextStepBtn.propTypes = {
    toNextStep: PropTypes.func
}

