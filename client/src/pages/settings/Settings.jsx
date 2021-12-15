import Sidebar from '../../components/sidebar/Sidebar'
import profile from '../../assets/profile-picture.jpg'
import './settings.css'

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
              className="settingsProfilePicture"
              src={profile} 
              alt="" 
              />
              <label htmlFor="fileInput">
                <i class="settingsPPIcon far fa-user-circle"></i>
              </label>
          </div>
          <input type="file" id="fileInput" style={{display: "none"}} className="settingsPPInput"/>
          <label >Username</label>
          <input type="text" placeholder="Angelo"/>
          <label >Email</label>
          <input type="email" placeholder="angelo@duck.com"/>
          <label >Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
    </div>
  )
}

export default Settings
