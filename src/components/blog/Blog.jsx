import "../../css/home.css";
import "../../css/visitblog.css";
import BlogCard from "./BlogCard";

function Blog(props) {
  return (
    <div className=" ">
        <div className="openImageBlogAll">

        </div>
        <div className="NavBlog"></div>

      <div className="containerL">
      <div className="flexRow">
        <BlogCard/>
            
     </div>
      </div>
    
    </div>
  );
}

export default Blog;
