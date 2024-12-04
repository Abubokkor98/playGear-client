import { createContext, useState } from "react"

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);



    const userInfo = {
           user,
    }

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}
