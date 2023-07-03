import { FaTimes } from "react-icons/fa";

import Card from "./shared/Card";

import { useContext } from "react";

import FeedbackContent from "../context/FeedBackContext";


const FeedbackItems = ({item}) => {

  const {handleDelete} = useContext(FeedbackContent);

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
    </Card>
  )
  
}

export default FeedbackItems