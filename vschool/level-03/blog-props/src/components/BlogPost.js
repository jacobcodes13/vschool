export default function BlogPost(props) {
  return (
    <div className="blogpost--container">
      <div className="bloglist">
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
        <p className="bloglist--p"><span>Posted by</span> {props.author} <span>on</span> {props.date}</p>
        <hr></hr>
      </div>
    </div>
  )
}