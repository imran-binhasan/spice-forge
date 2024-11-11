import LoginForm from "./LoginForm"
import loginImg from "../../assets/others/authentication.gif"

const Login = () => {
  return (
    <div className="max-w-7xl border shadow-xl mx-auto h-screen">
      <div className="flex flex-col md:flex-row justify-around items-center border m-20">
        <div className="flex-1">
          <img src={loginImg} alt="" />
        </div>
        <div className="flex-1">
          <LoginForm/>
        </div>
      </div>
      
    </div>
  )
}

export default Login