import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      {/* <h4>English C1</h4> */}
      {/* <h4>Spanish Native</h4> */}
      <Card style={{ width: "50rem" }}>
        <Card.Body style={{ textAlign: "justify", padd0ing: "1.2rem" }}>
          <h5>As a <strong>web developer</strong>, my journey began in a rigorous bootcamp where I gained valuable hands-on experience in the following technologies:</h5>

          <ul>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Nodejs" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="40" height="40" /></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB" width="40" height="40" /></li>
          </ul>

          <h5>Through various projects, I applied these technologies to develop responsive web applications, ensuring seamless user experiences across devices. Collaborating with diverse teams, I honed my skills in problem-solving, debugging, and iterative development. By integrating APIs and implementing user authentication, I demonstrated proficiency in creating dynamic and secure web solutions. The bootcamp also instilled in me a strong foundation in <strong>version control</strong>, <strong>agile methodologies</strong>, and effective communication, enabling me to contribute effectively to the development lifecycle in my target role as a web developer.</h5>
        </Card.Body>
      </Card>

    </div>
  )
}

export default About