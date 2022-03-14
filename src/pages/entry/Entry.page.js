import React, {useState} from 'react'
import './entry.style.css'
import { LoginForm } from '../../components/login/LoginComp';
import { ResetPassword } from '../../components/password-reset/passwordResetComp';

export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('login')

  const handleOnChange = e => { {/* records data typed into the login screen*/}
    const {name, value} = e.target

    switch(name) {
      case 'email': 
      setEmail(value);
      break;
      case 'password': 
      setPassword(value);
      break;
      default:
        break;
    }
  };

  const handleOnSubmit = e => { //Handles the log in section
    e.preventDefault()

    if(!email || !password) { {/*Authentication*/}
      return alert("Please enter your details")
    }
    //FOR LATER CALL API TO SUBMIT FORM 
    console.log(email, password);
  };

  const handleOnResetSubmit = e => { //handles the reset password section
    e.preventDefault()

    if(!email) { {/*Authentication*/}
      return alert("Please enter your email")
    }
    //REPLACE THIS LATER WITH API  
    console.log(email);
  };

  const switchForm = frmType => {
    setFrmLoad(frmType);
  }

  return (
    <div className='entry-page bg-info'>
        <div className="form-box">
          {frmLoad === 'login' &&
          <LoginForm 
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              switchForm={switchForm}
              email={email}
              pass={password}
            />}
            {frmLoad === 'reset' &&
            <ResetPassword 
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              switchForm={switchForm}
              email={email}
            />}
            
        </div>
    </div>
  )
}
