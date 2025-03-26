import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
const Profile = () => {
  const [userp, setuserp] = useState({});
  const navigate = useNavigate;
const storeddata=JSON.parse(localStorage.getItem('token'))
// const expirytime=JSON.parse(localStorage.getItem('expirytime'))

console.log(storeddata)
const[loading,setloading]=useState(false)

  function getprofiledata() {
    const token = JSON.parse(localStorage.getItem("token"))||{};

    const header = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setuserp(res.data);
        console.log("profile data", res);
      })
      .catch((err) => {
        alert("you are not loged in");
      });
  }

  useEffect(() => {
if(storeddata){
  if(Date.now()>storeddata.expirytime){
    localStorage.removeItem('token')
  }}else {
    console.log("Token is still valid:", storedData.token);
  }
    getprofiledata();
    
  }, []);

  function logout() {
    navigate("./"), setuserp();
    localStorage.removeItem("token");
    alert("LOGIUT HOGYA");
  }
  return (
    <>
      {  loading? <p>loading huri hai</p>: userp ? (
        <div>
          <p>{userp?.name || "N,A"}</p>
          <p>{userp?.email || "N,A"}</p>
          <p>{userp?.role || "N,A"}</p>
          <img
            className="rounded-full h-20 w-20"
            src={userp?.avatar || "n,a"}
            alt=""
          />
        </div>
      ) : (
      ''
      )}

      <h1>No data</h1>
    </>
  );
};

export default Profile;
