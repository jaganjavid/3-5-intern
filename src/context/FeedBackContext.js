import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"; 

const FeedbackContent = createContext();

// console.log(FeedbackContent);

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
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
              },
              {
                id:4,
                text:"This is my sample 3",
                rating: 67
              }
        ]
    )

    const handleDelete = (id) => {
        if(window.confirm("Are you Sure?")){
          setFeedback(feedback.filter((item) => {
            return item.id !== id;
          }))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([...feedback, newFeedback]);
    }

    return <FeedbackContent.Provider value={{
        feedback,
        handleDelete,
        addFeedback
    }}>
     {children}
    </FeedbackContent.Provider>
}

export default FeedbackContent;