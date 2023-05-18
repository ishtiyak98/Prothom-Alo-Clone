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
import AddNews from "./pages/Dashboard/AddNews";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => dispatch(addAllNews(data)));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      console.log(user.email);
    }
  }, [user]);

  return (
    <>
      {loading && <LoadingSpinner></LoadingSpinner>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="add-news" element={<AddNews></AddNews>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="edit-profile"
            element={<EditProfile></EditProfile>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
