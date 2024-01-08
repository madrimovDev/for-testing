import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks"

export default function ProtectAuth() {
  const {isAuth} = useAuth()
   return isAuth ? <Outlet/> : <Navigate to='/login'/>
}