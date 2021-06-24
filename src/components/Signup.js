import React from "react";

export default function Signup() {
  const signupForm = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target.elements["firstname"].value,
      lastname: e.target.elements["lastname"].value,
      email: e.target.elements["email"].value,
      password: e.target.elements["password"].value,
    };
    // sending post request to express server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.data);
        } else {
          console.log(result.message);
        }
      });
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={signupForm}>
        <label>
          first name: <input type="text" name="firstname" />
        </label>
        <br />
        <label>
          last name: <input type="text" name="lastname" />
        </label>
        <br />
        <label>
          email: <input type="email" name="email" />
        </label>
        <br />
        <label>
          password: <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}
