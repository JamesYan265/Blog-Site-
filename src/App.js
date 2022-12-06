import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';


function App() {
  const [ cookies ] = useCookies(['isAuth'])
  const [isAuth, setIsAuth] = useState();
  
  useEffect(() => {
    if(cookies.isAuth === 'true') {
      setIsAuth(cookies.isAuth)
    } else {
      setIsAuth(false)
    }
  }, [cookies])

  return (
  <Router>
    <Navbar isAuth={isAuth}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/createPost' element={<CreatePost isAuth={isAuth} />}></Route>
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
      <Route path='/logout' element={<Logout setIsAuth={setIsAuth} /> }></Route>
    </Routes>
  </Router>
  );
}

export default App;
