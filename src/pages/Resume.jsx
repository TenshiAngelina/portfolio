import Container from 'react-bootstrap/Container';
import DownloadButton from "../components/DownloadButton";
import ResumeFile from "../assets/data/resume.pdf";

const Resume = () => {
  return (
    <Container>

    <h2>Download a copy of my resume</h2>

    <a className="d-grid gap-2"
    href={ResumeFile}
    download="Angelina-H-Cortes-resume-WebDev"
    target="_blank"
    rel="noreferrer"
    >
      <DownloadButton/>
    </a>

    </Container>


  )
}

export default Resume