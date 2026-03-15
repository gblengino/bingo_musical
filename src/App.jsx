import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Preview from "./pages/Preview";
import Bingo from "./pages/Bingo";
import Admin from "./pages/Admin";

import "./App.css"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/songs" element={<Songs/>}/>
        <Route path="/preview" element={<Preview/>}/>
        <Route path="/bingo" element={<Bingo/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App