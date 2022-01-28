import React from 'react';


const HomeFive = () => {
    
    const message ="A jack of all trades is a master of none, but oftentimes better than a master of one"
    return (
      
        
        <div style={{color:"white"}}>
            <h6>Designed & Developed by</h6>
            <h5 style={{cursor:"pointer"}} onClick={()=>alert(message)}>V.S.Naaviinesh</h5>
        </div>
    )
}

export default HomeFive;