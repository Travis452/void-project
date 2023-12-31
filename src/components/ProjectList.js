import Project from './Project.js';
//import projectData from '../projectData.js';

import { useUploadContext } from '../context/UploadContext.js';
const ProjectList = () => {
    const { uploadedData } = useUploadContext();
    return (
        <div className='project-list'>

            {uploadedData.map((project) => (

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