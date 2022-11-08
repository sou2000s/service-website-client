import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div> 
              <p>{review.text}</p>
              <p>{review.customerName}</p>
              <div className="avatar">
  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review.customerImage
} alt='' />
  </div>
</div>
        </div>
    );
};

export default ReviewCard;