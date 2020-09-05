export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const CHECKBOX_CHANGE = 'CHECKBOX_CHANGE';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const SET_STATE = 'SET_STATE';
export const DATA_IS_LOADED = 'DATA_IS_LOADED';

let initialState = {
    loaded: false,
    step: 1,
    stepData: {
        step1: {
            firstname: {
                value: '',
                error: ''
            },
            lastname: {
                value: '',
                error: ''
            },
            email: {
                value: '',
                error: ''
            },
            country: {
                value: '',
                error: ''
            },
            age: {
                value: '',
                error: ''
            },
            gender: {
                value: '',
                error: ''
            },
            terms: {
                value: [
                    { id: 1, text: "Please accept our Terms and conditions" , checked: false}
                ],
                error: ''
            },
        },
        step2: {
            satisfied: {
                value: '',
                error: ''
            },
        },
        step3: {
            quiz: {
                value: [
                    { id: 1, text: "Google Search Engine" , checked: false},
                    { id: 2, text: "A friend of mine" , checked: false},
                    { id: 3, text: "Print Advertise" , checked: false},
                    { id: 4, text: "Newspaper" , checked: false},
                    { id: 5, text: "Other" , checked: false},
                ],
                error: ''
            }
        },
        step4: {
            partnerQuiz: {
                value: '',
                error: ''
            },
            describe: {
                value: '',
            }
        },
    },
};




export const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return {...state,...action.newState}
        case HANDLE_CHANGE:
            return { ...state, 
                stepData: { 
                    ...state.stepData ,
                    [`${action.step}`]: {
                        ...state.stepData[`${action.step}`],
                        [`${action.name}`]: {
                            ...state.stepData[`${action.step}`][`${action.name}`],
                            [`${action.chengedType}`]:  action.text
                        }
                    } 
                } 
            };
        case CHECKBOX_CHANGE:
            return { ...state, 
                stepData: { 
                    ...state.stepData ,
                    [`${action.step}`]: {
                        ...state.stepData[`${action.step}`],
                        [`${action.name}`]: {
                            ...state.stepData[`${action.step}`][`${action.name}`],
                            value:  state.stepData[`${action.step}`][`${action.name}`].value.map(item => {
                                if(item.id === action.id){
                                    return {...item, checked: action.checked}
                                }
                                return item
                            })
                        }
                    } 
                } 
            };
        case NEXT_STEP:
            return { ...state, step: state.step + 1 };
        case PREV_STEP:
            return { ...state, step: state.step - 1 };
        case DATA_IS_LOADED:
            return { ...state, loaded: true };
        default:
            return state;
    }
};

