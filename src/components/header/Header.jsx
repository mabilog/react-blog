import './header.css'
import coverImage from '../../assets/CoverImage.jpeg'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        src={coverImage} 
        alt="header" 
        className="headerImage" />
    </div>
  )
}

export default Header
