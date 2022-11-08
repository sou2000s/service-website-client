import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserReview(data.data));
  }, [user?.email]);
console.log(userReview);

 const handleDelete = id =>{
    fetch(`http://localhost:5000/reviews/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
     
       if(data.deletedCount){
        const remaining = userReview.filter(review => review._id !== id)
        setUserReview(remaining)
       }
    })

 }

  return (
    <div className="grid grid-cols-3 ml-36">
      {userReview.length === 0 ? (
        <p>You dont post any review</p>
      ) : (
        userReview.map((review) => (
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.tourName}</h2>
              <p>{review.text}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>handleDelete(review._id)}>Delete</button>
                <button className="btn btn-ghost">Edit</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyReview;
