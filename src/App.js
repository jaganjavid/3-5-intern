
import { useState } from "react";

import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackForm from "./component/FeedbackForm";
import Button from "./component/shared/Button";

function App() {


const [feedback, setFeedback] = useState([
    {
      id:1,
      text:"This is my sample 1",
      rating: 1
    },
    {
      id:2,
      text:"This is my sample 2",
      rating: 6
    },
    {
      id:3,
      text:"This is my sample 3",
      rating: 7
    }
    
]);

const handleDelete = (id) => {
  if(window.confirm("Are you Sure?")){
    setFeedback(feedback.filter((item) => {
      return item.id !== id;
    }))
  }
}



  return (
    <div className="App">
       <Header/>
       <div className="container">
           <FeedbackForm/>
           <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
       </div>
    </div>
  );
}

export default App;
