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




















function Jokes(props){
    return(
        <>
        {props.setup &&<h3>Setup:{props.setup}</h3>}
        <h3>Punchline:{props.punchline}</h3>
        </>
    )
}
export default Jokes;