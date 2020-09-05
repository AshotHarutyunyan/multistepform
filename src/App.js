import React  from 'react';
import FirstStep from './components/firstStep/FirstStep';
import SecondStep from './components/secondStep/SecondStep';
import ThirdStep from './components/thirdStep/ThirdStep';
import ForthStep from './components/forthStep/ForthStep';
import ConfirmStep from './components/confirmStep/ConfirmStep';
import SucssesStep from './components/sucssesStep/sucssesStep';
import NextStepBtn from './components/nextPrevBtns/NextStepBtn';
import PrevStepBtn from './components/nextPrevBtns/PrevStepBtn';
import { StepIsValid } from './Helpers/Validations';
import { connect } from 'react-redux';
import { handleChange, goToNextStep , goToPrevStep , checkboxChange } from "./Redux/actionCreators";
import { getStepData, getStep } from './Redux/AppSelectors';
import PropTypes from 'prop-types';

const App = ({stepData,step,handleChange,goToNextStep,goToPrevStep,checkboxChange}) => {
    let toNextStep = () => {
        let data = stepData[`step${step}`];
        let isValid = StepIsValid(data);
        if(isValid !== true){
            handleChange(`step${step}`,isValid[0],isValid[1],'error')
        }else{
            goToNextStep()
        }
    }; 

    return (
        <div>
            {step === 1 && <FirstStep formState={stepData.step1} handleChange={handleChange} checkboxChange={checkboxChange} /> }
            {step === 2 && <SecondStep formState={stepData.step2} handleChange={handleChange} /> }
            {step === 3 && <ThirdStep formState={stepData.step3} handleChange={handleChange} checkboxChange={checkboxChange} /> }
            {step === 4 && <ForthStep formState={stepData.step4} handleChange={handleChange} /> }
            {step === 5 && <ConfirmStep formState={stepData}/> }
            {step === 6 && <SucssesStep /> }
            {step !== 1 && step !== 6 && <PrevStepBtn goToPrevStep={goToPrevStep}>Prev</PrevStepBtn> }
            {step !== 6 && <NextStepBtn toNextStep={toNextStep}>{step !== 5 ? 'next' : 'confirm'}</NextStepBtn> }
        </div>
    );
}

let mapStateToProps = (state) => ({
    stepData: getStepData(state),
    step: getStep(state)
});

export default  connect(mapStateToProps,{ checkboxChange , handleChange , goToNextStep , goToPrevStep})(App)

App.propTypes = {
    stepData: PropTypes.object,
    step: PropTypes.number,
    handleChange: PropTypes.func,
    goToNextStep:PropTypes.func,
    checkboxChange: PropTypes.func,
}

