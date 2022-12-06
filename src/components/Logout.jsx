import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import './style/Logout.css';

const Logout = ({setIsAuth}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["isAuth"]);
  const navigate = useNavigate();

  const logout = () => {
    //Google Logout
    signOut(auth).then(() => {
      removeCookie('isAuth', { path: '/'});
      setIsAuth(false);
      navigate('/login');
    })
  }

  return (
    <div className='logoutPage'>
      <div className='logoutContainer'>
      <FontAwesomeIcon icon={faDoorOpen}/>
      <p>登出</p>
      <button onClick={logout}>Google 登出</button>
      </div>
    </div>
  )
}

export default Logout