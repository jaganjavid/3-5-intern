const Button = ({children, version, type, isDisbled}) => {
  return (
    <button type={type} disabled={isDisbled} 
    className={`btn btn-${version}`}>
       {children}
    </button>
  )
}

export default Button