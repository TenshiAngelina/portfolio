import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const Project = ({project}) => {
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={project.picture} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Stack gap={2}>
          <Button variant="outline-info" href={project.github}>Repository</Button>
          <Button variant="outline-info" href={project.url}>Deployed</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Project;


// const Project = ({project}) => {
//   return (
//     <div className="project-container">
//       <h2>{project.title}</h2>
//       <img className="project-image" src="" alt="" />
//     </div>
//   )
// };

// export default Project;