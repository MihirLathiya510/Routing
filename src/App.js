import './App.css';
import {Link, Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  
      <h1> Home Page</h1>
      
      <Link className="btn btn-primary" to="/testhomeoutlet">Test Outlet</Link>
    <Outlet />
    </div>

  );
}

export default App;
