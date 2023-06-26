import FeedbackItems from "./FeedbackItems"

const FeedbackList = ({feedback, handleDelete}) => {

  if(!feedback || feedback.length === 0){
    return <p>No item added yet</p>
  }  


  return (
    <div>
        {
            feedback.map((item) => (
               <div key={item.id}>
                   <FeedbackItems item={item} handleDelete={handleDelete}/>
                </div>
            ))
        }
    </div>
  )
}

export default FeedbackList