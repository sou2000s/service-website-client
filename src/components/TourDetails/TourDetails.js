import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const TourDetails = () => {
    const data = useLoaderData()
    console.log(data);
const {test} = useContext(AuthContext)
    const {name , price , description , TourPlan , image} = data.data
    return (
        <div>
        {test.name}
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
        </div>
    );
};

export default TourDetails;