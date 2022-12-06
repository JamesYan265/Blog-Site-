import React from 'react';
import { Link } from "react-router-dom";
import './style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseLaptop, faMessage, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({isAuth}) => {
  return (
    <nav>
      {!isAuth ? (
        <>
        <Link to="/"><FontAwesomeIcon icon={faHouseLaptop} />首頁</Link>
        <Link to="/login"><FontAwesomeIcon icon={faUser} />登入</Link>
        </>) : (
        <>
        <Link to="/"><FontAwesomeIcon icon={faHouseLaptop} />首頁</Link>
        <Link to="/createpost"><FontAwesomeIcon icon={faMessage} />投稿</Link>
        <Link to="/logout"><FontAwesomeIcon icon={faRightFromBracket} />登出</Link>
        </>
      )}
      
    </nav>
  )
}

export default Navbar