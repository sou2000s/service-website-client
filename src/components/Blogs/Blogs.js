import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div >
        <div className="grid md:grid-cols-3 mt-4 md:ml-10 gap-10 mb-7">
    
    
          <div className="md:w-96  border-2 p-2 border-sky-500">
            <h1 className="text-2xl">How does NodeJS handle multiple requests at the same time?</h1>
            <p>
              Node js single thread only accept the request and pass it to his co-worker or assistant  and they go to another server or database and came back with response. This co-wroker made by libuv  it is created by c language its creat multiple thread. After the response help of event loop give back a call back function and we send this to according to their need. Thats how node js handle multiple request. 
            </p>
          </div>
          
          </div>
         
        </div>
    );
};

export default Blogs;