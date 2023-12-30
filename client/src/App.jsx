import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages pt-24 px-10 lg:px-20 xl:px-40">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
