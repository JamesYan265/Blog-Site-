import React, { useEffect, useState } from 'react'
import './style/CreatePost.css'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [postContext, setPostContext] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);


  const createPost = async() => {
    await addDoc(collection(db, 'blogs'), {
      title: title,
      context:postContext,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    })
    navigate('/');
  }

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Blog 投稿</h1>
        <div className='inputPost'>
          <div>主題</div>
          <input type="text" placeholder='你的主題' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder='你的內容' onChange={(e) => setPostContext(e.target.value)}></textarea>
        </div>
        <button className='postButton' onClick={createPost}>發送</button>
      </div>
    </div>
  )
}

export default CreatePost