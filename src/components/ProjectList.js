import Project from './Project.js';
import projectData from '../projectData.js';
const ProjectList = () => {
    return (
        <div className='project-list'>

            {projectData.map((project) => (

                <Project
                    creator={project.creator}
                    title={project.title}
                    description={project.description}
                    audioSrc={project.audioSrc}
                />

            )
            )
            }


        </div>
    );
};

export default ProjectList;