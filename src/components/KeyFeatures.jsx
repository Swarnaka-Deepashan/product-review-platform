import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { featuresData } from '../constants';


function KeyFeatures() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Key Features</h2>
          <div className="subtitle">Enjoy latest featurs provided by us</div>
        </div>
        <Row>
          {featuresData.map((blog) => (
            <Col sm={4} key={blog.id}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={blog.image} alt={blog.title} />
                  <Card.Body>
                    {/* <time>{blog.time}</time> */}
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default KeyFeatures;
