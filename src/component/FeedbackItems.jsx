import { FaTimes } from "react-icons/fa";

import Card from "./shared/Card"


const FeedbackItems = ({item,handleDelete}) => {

 

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