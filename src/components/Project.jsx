import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

const Project = ({ project }) => {
  return (
    <Card>
      <Card.Img variant="top" src={project.picture} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Stack direction="horizontal" gap={1}>
          {project.technologies.map((tech, i) => (
            <Image className="tech-image" src={tech} key={i} width="40" height="40"/>
          ))}
        </Stack>
        <Stack gap={2}>
          <Button variant="outline-success" href={project.github} target="_blank"><Image src="/images/github.png" width="20" height="20"/>Repository</Button>
          <Button variant="outline-success" href={project.url} target="_blank">Deployed</Button>
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