import { FaTimes, FaEdit } from "react-icons/fa";

import Card from "./shared/Card";

import { useContext } from "react";

import FeedbackContent from "../context/FeedBackContext";


const FeedbackItems = ({item}) => {

  const {handleDelete, editFeedback} = useContext(FeedbackContent);

  return (
    <Card reverse={false}>
        <div className='num-display'>
            {item.rating}
        </div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes/>
        </button>
        <div className='text-display'>
            {item.text}
        </div>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit/>
        </button>
    </Card>
  )
  
}

export default FeedbackItems