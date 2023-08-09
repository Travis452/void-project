import { Card, CardBody, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faDownload } from '@fortawesome/free-solid-svg-icons';



const Project = ({ title, creator, description, audioSrc }) => {

    console.log('audioSrc:', audioSrc);

    return (
        <Card className='project-card'>
            <CardBody>
                <div className='project-info'>
                    <Col>
                        <h5>{creator}</h5>

                    </Col>
                    <Col>
                        <p>{title}</p>
                    </Col>
                </div>
                <audio src={audioSrc} controls className='audio-player' />
                <Col>
                    <FontAwesomeIcon icon={faHeart} className='project-button' />
                    <FontAwesomeIcon icon={faRetweet} className='project-button' />
                    <a href={audioSrc} download>
                        <FontAwesomeIcon icon={faDownload} className='project-button' />
                    </a>

                </Col>
            </CardBody>
        </Card>
    );
}


export default Project;