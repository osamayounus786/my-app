import { BioData } from "./ComA";
import { useContext } from "react";
function ComC(){
    const myName = useContext(BioData);
    return(
      <>
      <h1>hello this is  {myName}</h1>
      
      </>
    )
   }
  
   export default ComC;