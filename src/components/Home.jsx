import React, { useEffect, useState } from 'react'
import './style/Home.css'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const [currentUserData, setCurrentUserData] = useState(auth);
  

  useEffect(() => {
    const getPosts = collection(db, "blogs");
    onSnapshot(getPosts, (querySnapshot) => {
      setBlogList(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
    })  
  },[]);

  useEffect(() => {
    if(currentUserData.currentUser === null) {
      setCurrentUserData('Fail');
    } else {
      setCurrentUserData(auth.currentUser.uid);
    }
  },[])

  const handDelete = async(id) => {
    await deleteDoc(doc(db, 'blogs', id));
  }




  return (
    <div className='homePage'>
    
      {blogList.map((blog) => {
        return (
          <div className='postContents' key={blog.id}>
            <div className='postHeader'>
              <h1>{blog.title}</h1>
            </div>
            <div className='postTextContainer'>
              {blog.context}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{blog.author.username}</h3>
              
              {blog.author.id === currentUserData && (
                <button onClick={() => handDelete(blog.id)}>刪除</button>
              )}
            </div>
          </div>
        )
      })}
    
    </div>
  )
}

export default Home