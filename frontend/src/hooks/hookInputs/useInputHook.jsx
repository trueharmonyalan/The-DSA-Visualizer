import {useState} from "react";
import {receieveInput} from "../../services/servicebst/bstService.js";


export function useInputHook(){

    const [value,setValue] = useState("")


    function handleChange(event){
        const value = event.target.value
        setValue(value)
    }

    function getValueFromDoneButton(){
        receieveInput(value)
    }




    return {value,handleChange,getValueFromDoneButton}
}

