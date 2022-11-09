import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyReview = () => {
  useTitle('Myreview')
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  const [review , setReview] = useState({})


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
        toast.success('review deleted')
        setUserReview(remaining)
       }
    })

 }

const hanleReview = (review ) =>{
    setReview(review)
    console.log(review);
}
 
const habdleUpdateUserReview = e =>{
  e.preventDefault()
  const text = e.target.text.value
 const updatedReview = {
  text: text
 }
  fetch(`http://localhost:5000/review/${review._id}` , {
    method:"PUT",
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedReview)
  })
  .then(res =>res.json())
  .then(data =>{
     if(data.result.modifiedCount > 0){
      setUserReview(userReview)
      console.log(userReview);
     }
     console.log(data);
  })
}


  return (
    <div className="grid md:grid-cols-3 gap-28 md:ml-36">
      {userReview.length === 0 ? (
        <p>You dont post any review</p>
      ) : (
        userReview.map((review) => (
          <div className="card w-60 ml-8 md:w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.tourName}</h2>
              <p>{review.text}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>handleDelete(review._id)}>Delete</button>
                <label htmlFor="my-modal-3" className="btn" onClick={()=>hanleReview(review)}>Edit</label>
              </div>
            </div>
          </div>
        ))
      )}
                   {/*  <button htmlFor="my-modal" className="btn" onClick={()=>hanleReview(review)}>Edit</button> */}
      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <form onSubmit={habdleUpdateUserReview} className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <textarea name="text" id="" defaultValue={review.text} cols="30" rows="10"></textarea>
    <button type="submit">update</button>
   
  </form>
</div>
      


    </div>
  );
};

export default MyReview;
