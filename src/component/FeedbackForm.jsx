import React, { useContext, useState } from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './Ratingselect';

import FeedbackContent from '../context/FeedBackContext';


const FeedbackForm = () => {

  const {addFeedback} = useContext(FeedbackContent);

  const [text, setText] = useState(""); 
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(""); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
       const newFeedback = {
        text,
        rating
       }

       addFeedback(newFeedback);

       setText("");
       setBtnDisabled(true)
    }
  }  

  const handleTextChange = (e) => {
    if(text === ""){
        setBtnDisabled(true);
        setMessage(null)
    } else if(text !== "" && text.trim().length <= 10){
        setBtnDisabled(true);
        setMessage("Please type atleast 10 char")
    } else {
        setBtnDisabled(false);
        setMessage("")
    }

    setText(e.target.value);
  }

  return (
    <Card>
         <h2>what is your review?</h2>

         <RatingSelect select={(rating) => setRating(rating)}/>
        
        <form onSubmit={handleSubmit}>
        <div className='input-group'>
            <input 
            type="text" 
            onChange={handleTextChange}
            value={text}
            />
            <Button type='submit' isDisbled={btnDisabled} version="primary">
                Submit
            </Button>
        </div>
        </form>

         {message && <p>{message}</p>}
    </Card>
  )
}

export default FeedbackForm