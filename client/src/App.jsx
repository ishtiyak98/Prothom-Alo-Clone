import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import NavItems from "./components/Navbar/NavItems";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
