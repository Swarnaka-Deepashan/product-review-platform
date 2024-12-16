import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { reviewsData } from '../constants';

function Reviews() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Reviews</h2>
          <div className="subtitle">what clients say about us</div>
        </div>
        <Carousel controls={false}>
          {
            reviewsData.map(review => {
              return (
                <Carousel.Item key={review.id}>
                  <blockquote>
                    <p>{review.description}</p>
                    <cite>
                      <span className='name'>{review.name}</span>
                      <span className='designation'>{review.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default Reviews;