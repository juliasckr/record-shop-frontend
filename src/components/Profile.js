import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Profile() {
  const { user } = useContext(MyContext);
  return (
    <div>
      <h2>welcome, {user.fullname}</h2>
      <p>email: {user.email}</p>
    </div>
  );
}
