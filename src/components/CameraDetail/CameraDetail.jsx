import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToGetStore } from '../../Utility/AddToCart';

const CameraDetail = () => {
const {id} = useParams();
const idCamera= parseInt(id)
const data = useLoaderData();
const camera = data.find(camera=>camera.id ===idCamera);
console.log(data,camera, id, idCamera);
const{id: currentId, image,title,price,rating,description,}= camera;

const addToCart= (id)=>{

addToGetStore(id);
}

    return (
        <div>
            <h2>camera detail {id}</h2>
        <img src={image} />
        <p>{title}</p>
        <span>{price}</span>
        <span>{rating}</span>
        <p>{description}</p>
        <br />
        <button onClick={()=>addToCart(id)} className="btn btn-wide">Add to cart</button>

        </div>
    );
};

export default CameraDetail;