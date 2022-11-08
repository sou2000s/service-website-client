import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body">
  <h1>{review.tourName}</h1>
    <h2 className="card-title">{review.customerName}</h2>
    <p>{review.text}</p>
    <div className="avatar">
  <div className="w-8 rounded">
    <img src={review.customerImage} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
  </div>
</div>
    );
};

export default ReviewCard;