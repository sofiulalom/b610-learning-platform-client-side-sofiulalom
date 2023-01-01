import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseCart = ({course}) => {
    const {title, img,details,_id }=course;

    return (
      <Card  style={{ width:"24rem"}} className="mt-3 m-auto" >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {
         
         details.length > 200?

         <p>{details.slice(0, 200) + '...'} <Link to={`/course/${_id}`}>Red More</Link> </p>
         :
         <p>
         {details}

         </p>
      
      }
        </Card.Text>
        
      </Card.Body>
    </Card>
        
      
    );
};

export default CourseCart;

