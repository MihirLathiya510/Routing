import './App.css';
import { useState } from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
function Testoutlet() {
    const [input,setinput] = useState("");
    const {params} = useParams();
    const navigate = useNavigate();
    const inputHandler = (e) =>{
        setinput(e.target.value);

    }
    const searchclickhandler = (e) =>{
        navigate("/search",{ state:input });
    } 
  return (
    <div className="App">

      <h1> Search Output</h1>
      <h3> params given : {params}</h3>
      <form>
          <input type="text" onChange={inputHandler} placeholder='Input search here'/>
      </form>
      <button onClick={searchclickhandler} className="btn btn-warning" >Search</button>
      <Link className="btn btn-danger" to="/search" state={input} >Search By Link</Link>
    </div>
  );
}

export default Testoutlet;
