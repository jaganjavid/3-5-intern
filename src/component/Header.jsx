const Header = ({text, bgColor}) => {


  const styles = {
    backgroundColor:bgColor,
    color:"lightgray"
  }  

  return (
    <header style={styles}>
        <div className="container">
             <h2>{text}</h2>
        </div>
    </header>
  )
  
}

Header.defaultProps = {
    text: "Review App",
    bgColor: "rgba(0,0,0,0.5)"
}

export default Header