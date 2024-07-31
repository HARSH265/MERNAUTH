import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import './App.css'
import Header from "./components/Header";

function App() {

  return (
    <>
      <BrowserRouter>
      {/* header */}

      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>



        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
