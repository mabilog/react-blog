import './write.css'
import writeImage from '../../assets/writeImage.jpeg'
import { useContext, useState } from 'react'
import axios from 'axios'
import {Context} from '../../context/Context'

function Write() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      description,
    }
    if(file) {
      const data = new FormData()
      const filename = Date.now() + file.name

      data.append("name", filename)
      data.append('file', file)

      newPost.photo = filename

      try {
        await axios.post('/upload', data)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace('/post/' +res.data._id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="write">
      {file && 
      <img 
        className="writeImage"
        src={URL.createObjectURL(file)} 
        alt="" />
      
      }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{display:"none"}} 
            onChange={e => setFile(e.target.files[0])}
          />
          <input 
            type="text"
            placeholder="Title" 
            className="writeInput" 
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="writeInput writeText"
            onChange={e => setDescription(e.target.value)}

            />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
