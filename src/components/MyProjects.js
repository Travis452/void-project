import { useState } from 'react';
import ProfileProject from './ProfileProject.js';
import projectData from '../projectData.js';


const MyProjects = () => {

    const [projects, setProjects] = useState(projectData);

    const updateProjects = (updatedProjects) => {
        setProjects(updatedProjects)
    }

    return (
        <div className='project-list'>

            {projects.map((project) => (

                <ProfileProject
                    creator={project.creator}
                    title={project.title}
                    description={project.description}
                    audioSrc={project.audioSrc}
                    updateProjects={updateProjects}
                    projects={projects}
                />

            )
            )
            }


        </div>
    );
};

export default MyProjects;