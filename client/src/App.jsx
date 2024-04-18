import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Link to={'/login'}>Login</Link>
        <Link to={'/Register'}>Register</Link>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
