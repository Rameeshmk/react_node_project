import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const CardComponent = ({ title,title1, text, image,id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{title1}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>{id}</Card.Text>
        <Link to={"/usersdata/" + id}>
        <Button variant="primary">Profile</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;