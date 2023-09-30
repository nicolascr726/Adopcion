import React from 'react'
import Card from 'react-bootstrap/Card';

export const MyCard = ({url, nombre, descripcion}) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img style={{width: "18rem"}} variant="top" src={url} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
