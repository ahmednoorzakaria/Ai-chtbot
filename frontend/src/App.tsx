import Header from "./componnents/Header";
import {Routes,Route}from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/chat";+                  
import Notfound from "./pages/NotFound";
function App() {
  return
  <main>
    <Header>
      <Routes>
        <Route path="/" element =(<Home/>) /> 

        <Route path="/login" element =(<Login/>) />
        
        <Route path="/Signup" element =(<Signup/>) />
        
        
        <Route path="/chats" element =(<Chat/>) />   
        <Route path = "*" element = (<Notfound/>) />        
      </Routes>

    </Header>
  </main>;
}

export default App;
