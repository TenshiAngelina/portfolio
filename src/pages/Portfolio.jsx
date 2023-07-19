import Project from '../components/Project'
import database from '../assets/data/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  return (
    <Container>

      <h2>Check out my most recent projects</h2>

      <Row>
        <Col className="project-col">
          {
            database.pages[0].projects.map((project, i) => (
              <Project key={i} project={project}/>
            ))
          }
        </Col>
      </Row>
    
    <p>This is invisible content</p>
    </Container>
  )
}

export default Portfolio


// This is an older function that was used here, left commented for future reference
// {/* <h2 key={i}>{project.title}</h2> */}