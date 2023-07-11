import React, { useContext, useState , useEffect} from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './Ratingselect';

import FeedbackContent from '../context/FeedBackContext';


const FeedbackForm = () => {

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContent);

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


       if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback);
       } else {
        addFeedback(newFeedback)
       }

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



  useEffect(()=> {
   if(feedbackEdit.edit === true){
     setBtnDisabled(false);
     setText(feedbackEdit.item.text);
     setRating(feedbackEdit.item.rating);
   }
  }, [feedbackEdit]);

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