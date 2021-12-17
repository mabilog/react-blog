import './sidebar.css'
import image from '../../assets/sidebar.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats();
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={image} alt="sidebar" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum sit doloremque maxime consequuntur, voluptates eaque. Repellendus, quia quas? Nesciunt!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((cat, index) => (
            <Link to={`/?cat=${cat.name}`} className="link" key={index}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">          
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar