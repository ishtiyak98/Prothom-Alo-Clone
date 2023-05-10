import React, { useEffect, useState } from "react";

const DateTime = ({setDate}) => {
  //const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateTime = new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "medium",
      });
      setDate(dateTime);
    }, [1000]);

    return () => clearInterval(intervalId);
  }, [setDate]);
  return "";
};

export default DateTime;
