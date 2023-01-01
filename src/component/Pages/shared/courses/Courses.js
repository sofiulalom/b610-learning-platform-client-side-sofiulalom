import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const course =useLoaderData();
    const {title, details, img}=course;
   
    return (
        <Card style={{ width:"24rem"}} className='mt-3 m-auto'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to='/'><Button variant="primary">go to home</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;