import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {

    const data = useLoaderData()
    console.log(data);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://placeimg.com/260/400/arch"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-6 text-5xl">
              Hello From Souparna! I Travel The World To Find Me. Lets Join Me And Find Your Self With  Me.  
            </p>
            <Link to='/tours' className="btn btn-primary">Book Your Tour With Me</Link>
          </div>
        </div>
      </div>

           <h1 className="text-center text-6xl mt-24">My Favourite Tours</h1>
          

            <div className="grid grid-cols-3 mt-32 md:ml-36">
                {
                    data.result.map(tour => <Card key={tour._id} tour={tour}></Card>)
                }
            </div>
           
              <div className="text-center mt-12 ">
              <Link to="/tours " className="btn btn-accent ">Show All</Link>
              </div>
          


          <div>

          </div>
     

    </div>
  );
};

export default Home;
