import { useState } from "react";

function Card({ id, image, name, info, price, remove }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info :`${info.substring(0,300)}....`;

  function handleread() {
    setReadmore(!readmore);
  }

  return (
    <div className="Card">
      <img src={image} alt="" className="image" />
      <div className="details">
        <h4 className="price">₹{price}</h4>
        <h4 className="name">{name}</h4>
      </div>
      <div className="info">
        {description}
        <span className="readmore" onClick={handleread}>
          {readmore ? `Show Less` : `Read More`}
        </span>
      </div>
      <button className="notinterest" onClick={() => remove(id)}>Not Interested</button>
    </div>
  );
}

export default Card;
