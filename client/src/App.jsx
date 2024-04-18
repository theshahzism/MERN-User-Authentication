import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";

function App() {

  return (
      <BrowserRouter>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
        <Routes>
          <Route exact path={"/register"} element={<Register></Register>}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
