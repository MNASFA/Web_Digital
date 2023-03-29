import './BlogCard.css'

function BlogCard(props) {
  return (
    <>
      <div className="blogCard reveal">
            <div><img src={props.image}alt="Image_Blog" /></div>
            <div className="content">
                <h5>{props.titre}</h5>
                <p>{props.paragraphe}</p>
                <a href="www">Learn More</a>
            </div>
      </div>
    </>
  )
}

export default BlogCard;