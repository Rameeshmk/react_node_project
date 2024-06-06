import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import axios from 'axios';
//import { Card, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';



const UserList = () => {
  const [cards, setCards] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:7000/getusersdata')
        setCards(response.data)
    }
  useEffect(() => {
    
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {Array.isArray(cards) && cards?.map(card => (
          <div className="col-md-4 mb-4" key={card.id}>
            <CardComponent title={card.fullName} text={card.role} id={card.id} image={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default UserList;