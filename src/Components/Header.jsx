import { Link } from "react-router-dom";

function Header() {
  const token = JSON.parse(localStorage.getItem("token"));

  function logout(){
    
    localStorage.removeItem('token')
alert('LOGIUT HOGYA')
}
  return (
    <div className="h-10 border-b border-red-50 bg-blue-400 text-white flex gap-4 p-2 items-center justify-between" >
  
     <div className="space-x-5" >
     <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link> {/* ✅ Lowercase */}
      <Link to="/login">LOGIN</Link> 
     </div>
      <p className=" text-white px-1 py-1" onClick={logout}>
        Log Out{" sss"}
      </p>
    </div>
  );
}

export default Header;
