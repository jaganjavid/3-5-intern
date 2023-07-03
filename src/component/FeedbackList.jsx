import FeedbackItems from "./FeedbackItems";
import FeedbackContent from "../context/FeedBackContext";
import { useContext } from "react";

const FeedbackList = () => {

  const {feedback} = useContext(FeedbackContent);
 
  if(!feedback || feedback.length === 0){
    return <p>No item added yet</p>
  }  


  return (
    <div>
        {
            feedback.map((item) => (
               <div key={item.id}>
                   <FeedbackItems item={item}/>
                </div>
            ))
        }
    </div>
  )
}

export default FeedbackList