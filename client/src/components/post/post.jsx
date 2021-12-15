import './post.css' 
function Post() {
  return (
    <div className='post'>
      <img 
        className='postImage'
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="first" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam facilis impedit voluptates eum nisi numquam laborum praesentium distinctio quas repudiandae tempore, obcaecati sequi alias nam, voluptas dolore quia enim a asperiores repellendus esse, excepturi non? Impedit, a rem. Doloribus quam est at ut incidunt ducimus voluptatem porro ipsum, sint dolores veritatis a sequi, repudiandae dicta? Repudiandae praesentium, adipisci unde porro totam tempore nostrum fugit natus iusto dolorum nulla voluptatem ea vel illum! Iusto itaque error dolore voluptates dolores, modi perferendis iste rerum totam adipisci soluta vero, ipsa quod ipsum omnis veritatis quis accusantium unde quae maxime fugit. Id, eum?</p>
    </div>
  )
}
export default Post