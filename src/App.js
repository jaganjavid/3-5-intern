
import { useState } from "react";

import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackForm from "./component/FeedbackForm";
import { FeedbackProvider } from "./context/FeedBackContext";


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
    <FeedbackProvider>
       <Header/>
       <div className="container">
           <FeedbackForm/>
           <FeedbackList/>
       </div>
    </FeedbackProvider>
  );
}

export default App;
