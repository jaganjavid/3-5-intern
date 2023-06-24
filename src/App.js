
import { useState } from "react";

import Header from "./component/Header";
import FeedbackItems from "./component/FeedbackItems";
import FeedbackList from "./component/FeedbackList";

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



  return (
    <div className="App">
       <Header/>
       <div className="container">
           <FeedbackList feedback={feedback}/>
       </div>
    </div>
  );
}

export default App;
