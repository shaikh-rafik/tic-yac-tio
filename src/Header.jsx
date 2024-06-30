 
 
import "./App.css";
const Squer=({val,onsquareClick})=>{
    
    return(
        <>
         <button className="squer" onClick={onsquareClick}> {val}</button>
        </>
    );
}
export default Squer;