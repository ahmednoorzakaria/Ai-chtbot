import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/chat";
import NotFound from "./pages/NotFound"; // Corrected component name

function App() {
  return (
    <main>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </main>
  );
}

export default App;
