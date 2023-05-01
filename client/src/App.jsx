import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAllNews } from "./redux/news/newsSlice";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import EditProfile from "./pages/Dashboard/EditProfile";

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
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="edit-profile" element={<EditProfile></EditProfile>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
