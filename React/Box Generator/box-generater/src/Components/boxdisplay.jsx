import React from "react";
const BoxDisplay = (props) => {
    return (
      <div>
        {
            props.sentColor.map((item, index) => ( 
            <div style={{width:"150px", height: "150px" , backgroundColor :item}} key={index}></div>
            ))
        }
        
        
      </div>

    );
};
    
export default BoxDisplay;