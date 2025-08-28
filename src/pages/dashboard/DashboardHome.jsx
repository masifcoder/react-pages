import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'



const DashboardHome = () => {

  const authCtx = useContext(AuthContext);

  return (
    <div>Welcome {authCtx.name}</div>
  )
}

export default DashboardHome