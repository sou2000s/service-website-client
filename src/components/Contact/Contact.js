import React from 'react';

const Contact = () => {
    return (
        <div className='broder border-2 rounded-xl border-green-400 w-72 md:w-96 p-3'>
              <h1 className='text-5xl'>Contact Me</h1>
              <p>Feel free to ask any question and anything you want to know</p>
            <form >
            <input type="emial" placeholder="email" className="input mt-4 input-bordered input-success w-full max-w-xs" />
            <br />
            <textarea className="textarea textarea-success w-64 md:w-80 mt-4" placeholder="Message"></textarea>
             <br />
            <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;