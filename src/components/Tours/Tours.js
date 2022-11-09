import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Card from '../Card/Card';

const Tours = () => {
    useTitle('Tours')
    const data = useLoaderData()
    console.log(data);
    return (
        <div >
        <h1 className='text-center mb-11 text-6xl'>Tours</h1>
        <div className='grid grid-cols-3 md:ml-36 gap-32 mt-20'>
            {
 
               data.data.map(tour => <Card key={tour._id} tour={tour}></Card>)
            }
        </div>
             
        </div>
    );
};

export default Tours;