import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({img_url, title}) {
    return (
        <>
        <Card style={{ width: '30rem' }}>
        <Card.Body>
            <Card.Img variant="top" src={img_url} style={{height: '40%', width: '40%'}} />
            <div style={{height: 10}}></div>
            <Card.Title><img src={img_url} style={{width: '2rem'}}/>{title}</Card.Title>
            <Card.Text style={{fontSize: '1.5rem'}}>
            A repository containing all the relevant code from Fall 2025's Michigan Hackers 
            Beginner Web Development subteam. Also includes completed demos from end of sessions.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default MyCard;