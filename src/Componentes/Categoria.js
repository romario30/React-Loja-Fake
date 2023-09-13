import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';



export default function Categoria(categoria){
  const categorias='';
    return (
        <Container>
          {/* <Row>
                 
          <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
          <FontAwesomeIcon icon={faShop} />
          
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
          <FontAwesomeIcon icon={faShop} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
          <FontAwesomeIcon icon={faShop} />
        </Col>
            
          </Row> */}

          <Stack direction="horizontal" gap={3}>
            <div className="p-2">{categoria}</div>
            {/* <div className="p-2 ">Second item</div>
            <div className="p-2">Third item</div> */}
    </Stack>
        </Container>
      );
}