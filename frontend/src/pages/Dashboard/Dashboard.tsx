import axios from 'axios'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Dashboard = () => {
  const {user} = useAuth();
  const email = user.email;
  const axiosSecure = useAxiosSecure();
  useEffect(()=>{
    axiosSecure.get(`/api/carts?email=${email}`)
  .then(res => console.log(res.data))
  },[])

  return (
    <div className='h-[200px] border bg-red-300'>Dashboard</div>
  )
}

export default Dashboard