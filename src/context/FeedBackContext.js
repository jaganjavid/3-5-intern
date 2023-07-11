import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid"; 

const FeedbackContent = createContext();

// console.log(FeedbackContent);

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false,
    })

    useEffect(() => {
      fetchFeedback();
    }, []);

    const fetchFeedback = async() => {
      const response = await fetch("http://localhost:5000/feedback");
      const data = await response.json();
      setFeedback(data);
    }

    const addFeedback = async(newFeedback) => {
        
      try{
        const response = await fetch("http://localhost:5000/feedback",{
          method: "POST",
          headers:{
            "Content-type" : "application/json"
          },
          body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        setFeedback([data,...feedback]);
      }catch(error){
        console.log(error);
      }
       
    }


    const handleDelete = async(id) => {
      if(window.confirm("Are you Sure?")){

        await fetch(`http://localhost:5000/feedback/${id}`,{
          method:"DELETE"
        })

        setFeedback(feedback.filter((item) => {
          return item.id !== id;
        }))
      }
  }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item: item,
        edit: true
      })
    }

    const updateFeedback = async(id, updItem) => {

     
      try{
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
          method: "PUT",
          headers:{
            "Content-type" : "application/json"
          },
          body: JSON.stringify(updItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => 
        (item.id === id) ? {...item, ...data} : item))
      }catch(error){
        console.log(error);
      }

   
    }   

    return <FeedbackContent.Provider value={{
        feedback,
        feedbackEdit,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
     {children}
    </FeedbackContent.Provider>
}

export default FeedbackContent;