import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import CreateCard from "./pages/CreateCard";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-card" element={<CreateCard />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
