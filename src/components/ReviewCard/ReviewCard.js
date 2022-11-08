import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div> 
              <p>{review.text}</p>
              <p>{review.customerName}</p>
        </div>
    );
};

export default ReviewCard;