import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';



import {Container,Nav, Navbar,NavDropdown,Button} from 'react-bootstrap';


export default function Cards({id,titulo,imagem,descricao}){
    return(
        <Row xs={1} md={4} className="g-4">
      {Array.from({ length:4 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='mb-3'>
          
          <Stack direction="horizontal" gap={2} className='mt-2 ml-3'>
            <Badge pill bg="dark" className=''>Id - {id}</Badge>
          </Stack>
          
            <Card.Img variant="top" src={imagem} className="mt-3 ml-2 mb-3 mr-2" width={25} height={200}/>
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>
                {descricao}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    )
}