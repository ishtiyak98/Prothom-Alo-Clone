import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAllNews } from "./redux/news/newsSlice";
import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => dispatch(addAllNews(data)));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
