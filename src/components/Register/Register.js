import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {

  const {createUser,setUserNameAndProfile , setUserProfile} = useContext(AuthContext)
 const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    console.log(name , password , photoURL , email);

    createUser(email , password)
    .then(() => {
      handleUserProfile(name , photoURL)
      form.reset()
    })
    .catch(err => console.log(err.message))
 }

 const handleUserProfile = (name , photoURL) =>{
  const profile = {
    displayName : name,
    photoURL: photoURL
    
  }
  setUserNameAndProfile(profile)
  .then(()=>{
    setUserProfile(profile)
  })
  .catch(err => console.log(err.message))
 }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Regisret</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
