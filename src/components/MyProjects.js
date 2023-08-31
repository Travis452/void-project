import Project from './ProfileProject.js';
import projectData from '../projectData.js';


const MyProjects = () => {

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

export default MyProjects;