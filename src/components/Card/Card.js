import React from 'react';

const Card = ({tour}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={tour.image} alt={tour.name} className="rounded-xl w-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{tour.name}</h2>
    <p>{tour.description.slice(0 , 150)}</p>
    <div className="card-actions">
      <button className="btn btn-outline">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;