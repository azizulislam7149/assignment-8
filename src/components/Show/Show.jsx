import React from 'react';
import { Link } from 'react-router-dom';

const Show = ({camera}) => {

    const {id,image,title,description, price}= camera;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span>{price}</span>
          <p>{description}If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <Link to={`/cameras/${id}`}>
            <button className="btn">View details</button>
            </Link>
            
          </div>
        </div>
      </div>
    );
};

export default Show;