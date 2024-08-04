import React from "react";
//create your first component
const Card = () => {
	return (
		<div className="text-center col-3 d-flex">
			<div className="card flex-fill m-3" style={{ width: "18rem" }}>
  <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		</div>
	);
};

export default Card;
