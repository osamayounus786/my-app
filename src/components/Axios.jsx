import { useState } from "react";

function Axios(){


    const [num, setNum] = useState();



    return(
        <>
        <h1>You clicked this {num} lucky number</h1>
        <select value={num} onChange = {(event)=>{
                setNum(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}
export default Axios;