import {useInputHook} from "../../hooks/hookInputs/useInputHook.jsx";

function Input(){
    const {value,handleChange,getValueFromDoneButton} = useInputHook()
    return (
        <>

            <div className="input-acceptors">
                <input type="text" onChange={handleChange} value={value}/>
                <button onClick={getValueFromDoneButton}>Done</button>
            </div>


        </>
    )
}

export default Input