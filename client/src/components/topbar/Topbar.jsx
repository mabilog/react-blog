import { Link } from 'react-router-dom'
import './topbar.css'
import picture from '../../assets/profile-picture.jpg' 
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Topbar = (props) => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
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
          <li className="topListItem" onClick={handleLogout}>
              {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to='/settings'>
              <img 
                className='topImage'
                src={user.profile} 
                alt="profile" />
            </Link>
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