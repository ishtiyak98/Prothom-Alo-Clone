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
import { useFindUserDataQuery } from "./redux/user/userApi";
import ProtectedRoute from "./components/RoutesHandler/ProtectedRoute";
import AllUsers from "./pages/Dashboard/Admin/AllUsers";

function App() {
  const dispatch = useDispatch();

  const [user, loading, error] = useAuthState(auth);

  console.log(user);
  const {
    data: findUser,
    isLoading,
    isError,
  } = useFindUserDataQuery(user?.email, { skip: !user?.email });

  console.log("findUser", findUser);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => dispatch(addAllNews(data)));
  }, [dispatch]);

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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="add-news" element={<AddNews></AddNews>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="edit-profile"
            element={<EditProfile></EditProfile>}
          ></Route>
          <Route path="all-users" element={<AllUsers></AllUsers>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
