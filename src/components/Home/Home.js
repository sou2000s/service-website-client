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
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

           <h1 className="text-center text-6xl">Our Tours</h1>
          

            <div className="grid grid-cols-3 md:ml-36">
                {
                    data.data.map(tour => <Card key={tour._id} tour={tour}></Card>)
                }
            </div>
           
              <div className="text-center pt-3">
              <Link to="/tours " className="btn btn-accent ">Show All</Link>
              </div>

     

    </div>
  );
};

export default Home;
