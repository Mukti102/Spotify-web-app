import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={`playlist/:id`} element={<Home />}>
          {/* <Route path=":id" element={<Hero />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
