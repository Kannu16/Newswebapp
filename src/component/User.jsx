import React from 'react'
import Img from './img.png'

const User = () => {
    return (
        <>
             <div className="user">
                 <img src={Img} alt="icon" />
                 <div className="user-content">
                     <h5>Hii Reader,</h5>
                     <h6>Here is your News</h6>
                 </div>
             </div>

        </>
    )
}

export default User;
