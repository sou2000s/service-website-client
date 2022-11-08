import React from 'react';

const AddTour = () => {

 const handleAddTour = e =>{
    e.preventDefault()
    const form = e.target;
    const tourName = form.tourName.value;
    const image = form.image.value;
    const price = form.price.value
    const description = form.description.value
    const tourPlan = form.tourPlan.value;
    
    const addededTour = {
        name: tourName,
        image: image,
        price: price,
        description: description,
        TourPlan: [tourPlan]

    }


    fetch('http://localhost:5000/addtour' , {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addededTour)
    })
    .then(res => res.json())
    .then(data => console.log(data))
 }

    return (
        <div>
             <form onSubmit={handleAddTour}>
             <label htmlFor="">Tour Name</label>
                <input type="text" name="tourName" id="" />
                     <br />
                     <label htmlFor="">Image</label>
                 <input type="text"  name='image'/>
                     <br />
                     <label htmlFor="">Price</label>
                 <input type="text"  name='price'/>
                 <br />
                <div className='flex'>
                <label htmlFor="">Description</label>
                 <textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                 <br />
                 <label htmlFor="">Tour Plan</label>
                 <textarea name="tourPlan" id="" cols="30" rows="10"></textarea>
                 <button type='submit'>Add tour</button>
             </form>
        </div>
    );
};

export default AddTour;