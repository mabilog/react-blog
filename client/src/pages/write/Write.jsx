import './write.css'
import writeImage from '../../assets/writeImage.jpeg'
function Write() {
  return (
    <div className="write">
      <img 
        className="writeImage"
        src={writeImage} 
        alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input 
            type="text"
            placeholder="Title" 
            className="writeInput" 
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="writeInput writeText"/>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
