import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from '../Hooks/useApi'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const { response, loading, error, apicaller } = useApi();


  useEffect(() => {
    apicaller({ method: "GET", url: "https://jsonplaceholder.typicode.com/todos/1s",
    });

  }, []);

  console.log('name',response)
if(loading) return <h1>loading</h1>
if(error)  return <p>eoooo</p>


  function handleSubmit() {
    const payload = { email, password };
    console.log(payload);

    // CALLING API THEN STORING A TOKEN
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        const token = res.data.access_token;
        const expirytime = Date.now() + 1 * 60 * 1000;
        localStorage.setItem("token", JSON.stringify({ token, expirytime }));
        console.log("Success:", res);
        navigate("/profile");

        setTimeout(() => {
          localStorage.removeItem(token);
          console.log("removed");
        }, 2 * 60 * 1000);
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  return (
    <div className="bg-sky-200 space-y-4 p-5 rounded-md shadow-md m-10 w-72">
      <p className="font-semibold text-lg text-center">Login Page</p>

      <div>
        <p>Email:</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="border rounded-md p-2 w-full"
        />
      </div>

      <div>
        <p>Password:</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          className="border rounded-md p-2 w-full"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
