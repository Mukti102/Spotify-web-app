import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero/Hero";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Beranda from "./components/Beranda/Beranda";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={`spotify`} element={<Home />}>
          <Route path="playlist" element={<Hero />}>
            <Route path=":id" element={<PlaylistPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="Home" element={<Beranda />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
