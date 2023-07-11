

import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackForm from "./component/FeedbackForm";
import { FeedbackProvider } from "./context/FeedBackContext";


function App() {


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
