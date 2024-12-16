import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@rateify.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +941-123-4567
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
