import "../../css/home.css";
import "../../css/visitblog.css";
import CardVisit from "./CardVisit";

function VisitBlog() {
  return (
    <div className=" ">
      <div className="heading flexCol center">
        <h4>Visit our blog</h4>
        <p>Daily home security tips, lock comparisons and more.</p>
      </div>
      <div className="flexRowToCol center">
       
        <CardVisit
          h3={"Rekey vs. Changing your locks"}
          span={"June, 2016"}
          text={
         "You might have thought about changing your locks if you ever got a new home, misplaced your keys or had to let go of a furious worker. But many people don't know that there is a better and often cheaper way to secure their locks – re-keying them. In this article, I'll tell you what it means to “re-key” a lock and why it's important to know when to rekey your locks instead of changing them. This can help you save a lot of money every year. Some locksmiths don't explain the different options to their customers and choose the more costly one for them, because people are not well-informed about the differences."
          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-2.png"
          }
        />

        <CardVisit
          h3={"The Best Lock For Your Home"}
          span={"June, 2015"}
          text={
"In today's article, I delve into an analysis of the four most widely used residential locks in America, accounting for over 90% of installations."          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-3.png"
          }
        />

        <CardVisit
          h3={"Never Get Locked Out Again"}
          span={"January, 2016"}
          text={
"We've all experienced this scenario. You find yourself in a rush, hurrying out the door, and in your haste, you inadvertently slam it shut. It's at that precise moment when you realize"          }
          image={
            "https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/blog-thumbnail-4.png"
          }
        />
      </div>
    </div>
  );
}

export default VisitBlog;
