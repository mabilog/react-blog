import './singlePost.css'
import singlePostImage from '../../assets/singlepostimage.jpeg'
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singlePostImage} alt="" className="singlePostImage" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit.</h1>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Angelo</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit quis dicta ut obcaecati sit perferendis deleniti iusto ullam. Adipisci numquam perspiciatis cum illo nobis possimus suscipit impedit consequuntur iusto ex? Minus nesciunt maiores fugiat reiciendis vel necessitatibus modi illum itaque, ex, placeat maxime debitis quo ea neque iure dolorem rerum dolores eum eaque, ut a. Eum asperiores quaerat dolorum quod, ratione praesentium vero similique voluptatibus doloremque earum consectetur sunt odit necessitatibus eius accusamus harum pariatur saepe? Quas dolor rem veniam illum voluptatibus molestiae officia hic voluptates reprehenderit nemo. Tempore, minima quisquam. Ducimus explicabo suscipit commodi cumque sit culpa laborum ullam maxime. Molestiae, unde consequuntur velit ab veritatis alias cum sequi nostrum numquam, et inventore deserunt repudiandae. Ab ut mollitia inventore dolores quos nam eligendi, culpa maxime, repellendus labore exercitationem ullam cupiditate qui omnis officia, fugit libero. Eum totam laboriosam sed, distinctio architecto, expedita saepe suscipit vero quasi illo assumenda repellat iusto quibusdam, modi ad blanditiis? Mollitia, tempora blanditiis. Nostrum nulla expedita facere vel quod, hic ducimus dignissimos. Dolorum obcaecati consectetur doloribus quaerat ipsum nesciunt est rem cum eos qui accusamus, libero iure, numquam labore quasi officiis, at ut vitae. Eligendi at a optio fugiat hic culpa, facilis cum pariatur.</p>
      </div>
    </div>
  )
}

export default SinglePost
