
import './App.css';

function Button(props) {

   return (
      <button onClick={props.functionName}>{props.name}</button>
   );
}

export default Button;