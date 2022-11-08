import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const TourDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const {user} = useContext(AuthContext)

    const {name , price , description , TourPlan , image , _id} = data.data;

    const handlePostReview = e =>{
        e.preventDefault()
      const form = e.target;
        const review = {
            email: user?.email,
            text: form.reviewText.value,
            tourName: form.tourName.value,
            tourId : _id,
            customerName: user?.displayName
        }


        fetch('http://localhost:5000/postreview' , {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
       
            <div>
                 <img src={image} alt="" className='w-56' />
                 <h1 className='text-4xl'>  {name}</h1>
                 <h1 className='text-xl'>  {price}</h1>
                 <p>Description : {description}</p>
                 <h1>Tour plan : {
                    TourPlan.map(plan => <ul>
                        <li>{plan}</li>
                    </ul>)
                 }</h1>
            </div>

            <div className='mt-24 text-center mb-24'>
                 <h1 className='text-3xl'>Reviews</h1>

                 <div>
                    <form onSubmit={handlePostReview}>
                          <input type="text"  name='tourName' Value={name} />
                          <br />
                          <textarea name="reviewText" placeholder='write your review' className='border-2 border-black' id="" cols="30" rows="10"></textarea> 
                          <br />
                          <button type='submit' className='btn btn-warning'>Post review</button>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default TourDetails;