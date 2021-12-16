import './post.css' 
import { Link } from 'react-router-dom'
function Post({ post }) {
  return (
    <div className='post'>
      {post.photo && (
      <img 
        className='postImage'
        src={post.photo}
        alt={post.title}/>
      )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map(cat => (
              <span className="postCat" key={cat}>{cat}</span>
              ))}
              </div>
            <Link to={`/post/${post._id}`} className="link">
             <span className="postTitle">{post.title}</span>
            </Link>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.description}</p>
    </div>
  )
}
export default Post