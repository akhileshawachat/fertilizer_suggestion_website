import akhilesh from "../Images/Akhilesh.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export function AboutUs(){
    return(
    <Container className="mt-5">
        <h1>About Us</h1>
        <Row>
            <Col>
            <Card style={{ width: '18rem', backgroundColor: "#393646" }}>
                <Card.Img variant="top" src={akhilesh} />
                    <Card.Body className="text-light">
                        <Card.Title>Akhilesh Awachat</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                     bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                     bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                     bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    );
}