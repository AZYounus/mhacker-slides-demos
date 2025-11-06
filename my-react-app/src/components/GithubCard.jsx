import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GithubCard({ image_url, project_title, className, style }) {
  return (
    <div className={className} style={style}>
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={image_url} style={{objectFit: 'fill'}}/>
        <Card.Body>
          <Card.Title>{project_title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GithubCard;