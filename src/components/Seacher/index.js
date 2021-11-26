import { useState } from "react"

export default function Seacher ({value, onChange}){
    const [displayValue, setDisplayValue] = useState(value)


    const handleChanged = (e)=>{
        setDisplayValue(e.target.value)
        onChange(e.target.value)
    }

    return(
        <input value={displayValue} onChange={handleChanged} />
    )
}