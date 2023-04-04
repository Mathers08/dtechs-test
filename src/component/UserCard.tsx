import { Button, Card } from 'react-bootstrap';

const UserCard = () => {
  return (
    <Card style={{ width: '18rem', background: '#e5e5e5', borderRadius: 30 }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: 700, fontSize: 24 }} >mathers08</Card.Title>
        <Card.Text>Black Mathers</Card.Text>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;