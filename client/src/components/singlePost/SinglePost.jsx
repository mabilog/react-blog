import './singlePost.css'
import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const PF = "http://localhost:5002/images/"
  const { user } = useContext(Context)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(()=> {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
    }
    getPost()
  }, [path])

  const handleDelete = async ()=>{
    try {
      await axios.delete('/posts/' + path, {data: {username: user.username}})
      window.location.replace('/' )
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = () => {
    setUpdateMode(true)
  }

  const handleUpdate = async () => {
    try {
      await axios.put('/posts/' + path, {
          username: user.username,
          title,
          description
        })
      setUpdateMode(false)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && 
        <img src={PF +post.photo} alt={post.title} className="singlePostImage" />
        }
        { updateMode ? (
          <input 
            type="text"  
            value={title} 
            className="singlePostTitleEdit" 
            autoFocus
            onChange={(e)=> setTitle(e.target.value)}

            /> 
            ) : (
              <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                  </div>
                )}
              </h1>
              )
            }
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link> 
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea 
            className='singlePostDescInput' 
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            /> 
          ) : (
          <p className="singlePostDesc">{description}</p>
        )}
        {updateMode && (
        <button 
          className="singlePostButton"
          onClick={handleUpdate}
          >
            Update
            </button>

        )}
      </div>
    </div>
  )
}

export default SinglePost
