import { useEffect, useState } from "react";
import { useSignUpMutation } from "../redux/user/userApi";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const [signUp] = useSignUpMutation();

  console.log("token", user);
  useEffect(() => {
    const email = user?.user?.email;
    //const name = user?.user?.;
    console.log(email);
    // const name = user?.displayName;
    // console.log(user?.displayName);

    // console.log(user);
    const currentUser = { email: email };

    if (email) {
      const result = signUp(currentUser);
      console.log("re",result);

      // fetch(`http://localhost:5000/api/v1/users`, {
      //   method: "PUT",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(currentUser),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     const accessToken = data.token;
      //     localStorage.setItem("accessToken", accessToken);
      //     setToken(accessToken);
      //   });
    }
  }, [signUp, user]);

  return [token];
};

export default useToken;
