import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../shared/CourseCart/CourseCart';


const Home = () => {
   const allcourses =useLoaderData();

    return (
        <div className='text-center'>
         <div>
          {
            allcourses.map(course => <CourseCart
            key={course._id}
          course={course}
           ></CourseCart>)
          }
          </div>
          
        </div>
    );
};

export default Home;