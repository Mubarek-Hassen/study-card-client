
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1>Hi Wubit!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
