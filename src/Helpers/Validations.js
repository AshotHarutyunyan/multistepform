export let TextInputValid = (data) => {
    if( typeof(data) === "string" && !data.length > 0 && !data.replace(/^\s+|\s+$/g, '').length > 0 ){ 
        return 'required'
    }
    return true
};

export let NumberInputValid = (data) => {
    if( typeof(data) === 'number' && data === 0 ){
        return 'required'
    }
    return true
};

export let EmailInputValid = (data) => {
    if( TextInputValid(data) !== true ){
        return 'required'
    }else if(!data.includes("@", 0) ){
        return 'Wrong email'
    }
    return true
};

export let CheckboxItemValid = (data) => {
    if( typeof(data) === "object" ){
        let some = data.some(element => element.checked === true)
        if(!some){
            return 'required'
        }
    }
    return true
};

export let StepIsValid = (stepState) => {
    for(let key in stepState){
        if(stepState[key].error !== undefined){
            let item = stepState[key].value;
            let string = TextInputValid(item);
            let number = NumberInputValid(item);
            let email = true;
            if(key === 'email'){
                email = EmailInputValid(item)
            }
            let checkbox = CheckboxItemValid(item);
            if(email === 'Wrong email'){
                return [key, email]
            }else if(string !== true || number !== true || email !== true || checkbox !== true){
                return [key, 'required']
            }
        }
    }
    return true    
}