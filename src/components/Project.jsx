import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Project (){




  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Button variant="primary">Deployed Link</Button>
        <Button variant="primary">Github Link</Button>
      </Card.Body>
    </Card>
  )
}