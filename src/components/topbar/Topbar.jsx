import { Link } from 'react-router-dom'
import './topbar.css'
import picture from '../../assets/profile-picture.jpg' 

const Topbar = (props) => {
  const user = props.user;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">About</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">Contact</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">Write</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img 
              className='topImage'
              src={picture} 
              alt="profile" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">Register</Link>
              </li>
            </ul>
            
          )
        }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar