import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';

export default function GoogleLogin() {
const {googleSignIn,setUser} = useContext(AuthContext);
const [error,setError] = useState('');



  const handleGoogle = ()=>{
    googleSignIn()
    .then((result)=>{
      const user = (result.user);
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      setError(error.message);
    })
  }
  return (       
    <div className="">
    <button onClick={handleGoogle}
      className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google Icon"
        className="w-5 h-5 mr-2"
      />
      Continue with Google
    </button>
    {error&& alert(error)}
  </div>
  )
}
