import React, { useState } from "react";
import MyContext from "./MyContext";

export default function Container(props) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <MyContext.Provider
      value={{ user, setUser, isLogin, setIsLogin, register, setRegister }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
