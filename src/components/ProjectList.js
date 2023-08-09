import Project from './Project.js';
import projectData from '../projectData.js';
import { Row, Col } from 'reactstrap';

const ProjectList = () => {
    return (
        <div className='project-list'>
            <Row>
                {projectData.map((project) => (
                    <Col key={project.id}>
                        <Project
                            creator={project.creator}
                            title={project.title}
                            description={project.description}
                            audioSrc={project.audioSrc}
                        />
                    </Col>
                )
                )
                }

            </Row>
        </div>
    );
};

export default ProjectList;