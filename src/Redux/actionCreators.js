import { HANDLE_CHANGE, CHECKBOX_CHANGE, NEXT_STEP, PREV_STEP, DATA_IS_LOADED, SET_STATE } from "./FormReducer";

export const handleChange = (step, name, text, chengedType) => ({ type: HANDLE_CHANGE, step, name, chengedType, text });
export const checkboxChange = (step, name, id, checked) => ({ type: CHECKBOX_CHANGE, step, name, id, checked });
export const goToNextStep = () => ({ type: NEXT_STEP });
export const goToPrevStep = () => ({ type: PREV_STEP });
export const loadSucsses = () => ({ type: DATA_IS_LOADED });
export const setState = (newState) => ({ type: SET_STATE, newState });
