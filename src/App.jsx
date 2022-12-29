import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
