import FeedbackItems from "./FeedbackItems"

const FeedbackList = ({feedback}) => {

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