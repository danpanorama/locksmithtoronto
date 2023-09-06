import "../../css/home.css";
import "../../css/visitblog.css";
import CardVisit from "./CardVisit";

function VisitBlog() {
  return (
    <div className=" ">
      <div className="heading">
        <h4>Visit our blog</h4>
        <p>Daily home security tips, lock comparisons and more.</p>
      </div>
      <div className="flexRowToCol center">
        <CardVisit
          h3={"Schlage vs. Kwikset"}
          span={"April, 2017"}
          text={
            "In this article I will try to answer one of the ultimate, most basic questions of the home security world: Which locks are better – Schlage or Kwikset? …"
          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail.png"
          }
        />
        <CardVisit
          h3={"Rekey vs. Changing your locks"}
          span={"June, 2016"}
          text={
            "In this article I’m going to explain what does it mean to “re-key” a lock, and more importantly – when should you rekey your locks …"
          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-2.png"
          }
        />

        <CardVisit
          h3={"The Best Lock For Your Home"}
          span={"June, 2015"}
          text={
            "In today’s article, I break down the four most popular residential locks in America today. These locks are installed on over 90% of …"
          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-3.png"
          }
        />

        <CardVisit
          h3={"Never Get Locked Out Again"}
          span={"January, 2016"}
          text={
            "We’ve all been there before. You’re in a hurry, rushing out, you slam the door behind you and as soon as your hear it shuts you realize …"
          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-4.png"
          }
        />
      </div>
    </div>
  );
}

export default VisitBlog;
