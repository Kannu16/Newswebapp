import React from 'react'

const FeedBack = () => {
const feedBackBtn  = () =>{
 var feedbackForm = document.getElementById('feedbackForm');
  feedbackForm.classList.toggle('feedback-form');
}


    return (
       <>
          <div className="feedback-container">
              <h3>Have a Feedback?</h3>
          <button onClick={ feedBackBtn} className="feedback-btn">We're Listening</button>
          </div>

       </>
    )
}
export default FeedBack;
