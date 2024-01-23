import Header from "./componnents/Header";
import {Routes,Route}from "react-router-dom"
function App() {
  return
  <main>
    <Header>
      <Routes>
        <Route path="/" element =(<Home/>) /> 

        <Route path="/login" element =(<Login/>) />
        
        <Route path="/Signup" element =(<Signup/>) />
        
        <Route path="/chats" element =(<Chat/>) />   
        
      </Routes>

    </Header>
  </main>;
}

export default App;
