import React from 'react'

const ViewToggle = () => {
  
  const horizontal = () =>{
    const rightContainer = document.getElementById('rightContainer')
    const horizontalContainer = document.getElementById('horizontalContainer')
    horizontalContainer.style.display ="flex";
    rightContainer.style.display ="none";

  }

  const vertical = () =>{
    const rightContainer = document.getElementById('rightContainer')
    const horizontalContainer = document.getElementById('horizontalContainer')
    horizontalContainer.style.display ="none";
    rightContainer.style.display ="block";
    rightContainer.style.display ="flex";
  }
    return (
      <>
       <div className="toggle-container">
         <h3>View Toggle</h3>
         <div className="view-toggle">
             <button onClick={horizontal}><i className = "fas fa-grip-vertical"></i></button>
             <button onClick={vertical}><i className = "fas fa-bars"></i></button>
         </div>
       </div>
      </>
    )
}

export default ViewToggle
