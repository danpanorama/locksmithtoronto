import "../../css/home.css";
import "../../css/visitblog.css";

function BlogCard(props) {
  return (
    <div className=" ">
        <div className="openImage">

        </div>
        <span className="smallHeaderBlog">
            {props.smallHeader}
        </span>

        <h1 className="bigBlogHeader">
            {props.header}
        </h1>
        <div className="flexRow center ">
           
         <span className="by">by</span>
       
         <div className="kav"></div> 
          </div> 

          <div className="Text">
            {props.text}
          </div>
          <div className="flexRow center">
            <p className="paregpraph">
                READ ARTICLE
            </p>
            <div className="flexRow center">
                <span className="socila"></span>
                <span className="socila"></span>
                <span className="socila"></span>
                <span className="socila"></span>
                <span className="socila"></span>
                <span className="socila"></span>
            </div>
          </div>
    
    </div>
  );
}

export default BlogCard;
