import ComB from './ComB'
import { createContext } from 'react';
const BioData = createContext();
function ComA(){
    return(
      <>
      <BioData.Provider value={"Osama Younus"}>
      <ComB />

      </BioData.Provider>
      
      </>
    )
   }
  
   export default ComA; 
   export {BioData};