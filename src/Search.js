import './App.css';
import {useLocation} from 'react-router-dom';
function Search() {
  const location = useLocation(); 
  return (
    <div className="App">
      <h1> Searched for : {location.state}</h1>
      
    </div>
  );
}

export default Search;
