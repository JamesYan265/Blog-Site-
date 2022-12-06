import React from 'react'
import {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const [cookies, setCookie] = useCookies(["isAuth"]);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    //Google Login
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      setCookie('isAuth', 'true', { maxAge: 3600 });
      navigate('/');
    });
  }

  return (
    <div>
      <p>登入開始</p>
      <button onClick={loginWithGoogle}>Google 登入</button>
    </div>
  )
}

export default Login