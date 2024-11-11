import {useForm} from 'react-hook-form'

import signUpImg from '../../assets/others/authentication2.png'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  const {register} = useForm();
  return (
    <div className="max-w-7xl mx-auto border">
      <div className="m-20 flex border flex-col md:flex-row justify-between items-center">
       <div className="flex-1">
       <SignUpForm/>
       </div>
        <div className='flex-1'>
          <img src={signUpImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp