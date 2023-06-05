
import Project from '../components/Project'
import database from '../assets/data/data.json';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const Portfolio = () => {
  return (
    // <Container>
    //   <Row>
        <Stack direction="horizontal" gap={3}>

        {/* <Col sm={1} md={3} lg={6}> */}
          {
        database.pages[0].projects.map((project, i) => (
          <Project key={i} project={project}/>
          ))
          }
        {/* </Col> */}
        </Stack>

    //   </Row>

    // </Container>
  )
}

export default Portfolio


// This is an older function that was used here, left commented for future reference
// {/* <h2 key={i}>{project.title}</h2> */}