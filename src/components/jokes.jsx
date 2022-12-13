// function Joke(props){
//     return(
//         <div>
//                 {/* Conditional Redering */}
//              {props.setup && <h3>Setup: {props.setup}</h3>}
             
//              {/* concise letral  */}
//              {/* <h3 style={{display: props.setup ? 'block' : 'none'}}>Setup: {props.setup}</h3> */}
//             <p>Punchline: {props.punchline}</p>
//             <hr />
            
//         </div>
//     )
// }
// export {Joke};



















import { useState } from "react";
function Jokes(props){
    const [isShown, setisShown] = useState(false);
    
    function toggle(){
        setisShown((prevIsshown)=> !prevIsshown)
        
    }
    return(
        <>
        {props.setup &&<h3>Setup:{props.setup}</h3>}
        {isShown &&<h3>Punchline:{props.punchline}</h3>}
        <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
        </>
    )
}
export default Jokes;