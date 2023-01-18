
//type classname will change success danger as defined in css 
const Alert = ({msg, type}) => {
  return(<>
  
  <div className={`${type}`}>{msg}</div>  
  
  </>
  );   
};

export default Alert;
