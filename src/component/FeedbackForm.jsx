import React from 'react'

const FeedbackForm = () => {
    return (
        <div className="feedback-form main-form" id="feedbackForm">
            <h3 className="contact-heading">Thank you for Taking the time!</h3>
            <p className="contact-heading"> Please provide the below details</p>

         <form autoComplete="off" className="form-data">
         <div className="name">
                <label>First Name</label>
                <input type="text" name="" id="" placeholder="John"  required/>
            </div>

            <div className="name">
                <label>Last Name</label>
                <input type="text" name="" id="" placeholder="Doe"  required/>
            </div>

            <div className="name">
                <label>Address</label>
                <textarea name="" id="" cols="22" rows="5" placeholder ="XYZ road " required></textarea>
            </div>

            <div className="name">
                <label>Country</label>
                <input type="text" name="" id="" placeholder="India"  required/>
            </div>

            <div className="name">
                <label>Email Id</label>
                <input type="email" name="" id="" placeholder="xyz123@gmail.com" required />
            </div>

            <div className="name">
                <label>Phone No</label>
                <input type="number" name="" id="" placeholder="12345678" required />
            </div>

            <button className="form-submit" type="submit">Submit</button>
         </form>
        </div>
    )
}

export default FeedbackForm;
