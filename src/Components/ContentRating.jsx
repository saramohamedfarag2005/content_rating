import { useState,useMemo } from "react";
import "./ContentRating.css";

export default function ContentRating(){
const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);

const totalRatings= useMemo(()=> likes +dislikes , [likes,dislikes]);
const handelLikes= ()=> setLikes(l=>l+1);
const handelDislikes = ()=> setDislikes(d=>d+1);

return(

  <div className="content-rating">
    <p>
    React was released by Facebook (now Meta) and popularized the
        component-based approach for building UIs. Do you like this text?
    </p>
    <div className="rating-buttons">
      <button className="rating-buttons" onClick={handelLikes}>
        like ({likes})
      </button>
      <button className="dislike-button" onClick={handelDislikes}>
        dislikes ({dislikes})

      </button>

      <p className="total" > Total ratings {totalRatings}</p>

    </div>

  </div>
);
}