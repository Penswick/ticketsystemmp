import React, {useState} from 'react'
import './entry.style.css'
import {LoginForm} from '../../components/login/LoginComp';

export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    console.log(name, value)
  };

  return (
    <div className='entry-page bg-info'>
        <div className="form-box">
            <LoginForm handleOnChange={handleOnChange}
              email={email}
              pass={password}
            />
        </div>
    </div>
  )
}
