import React from 'react'

const Card = ({children, reverse}) => {
 
  return (
    <div className={`card ${reverse ? 'reverse' : ""}`}>
        {children}
    </div>
  )

// return (
//     <div className={"card"} style={
//         {
//             backgroundColor: reverse ? "rgba(0,0,0,0.5)" : "#ffffff",
//             color: reverse ? "#ffffff" : "#000000"
//         }
//     }>
//         {children}
//     </div>
//   )
}

export default Card