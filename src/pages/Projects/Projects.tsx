import * as React from "react";
import { privateProjectData, publiclyNotAvaibleProjectData, publiclyAvaibleProjectData } from '../../components/ProjectCard/ProjectCard.data';
import { ProjectCardList } from '../../components/ProjectCard/ProjectCardList';

export const Projects: React.FC<{}> = (): JSX.Element => {
    return (
        <>
            <ProjectCardList title='projects.header.publicly.avaible' data={publiclyAvaibleProjectData} />
            <ProjectCardList title='projects.header.not.publicly.avaible' data={publiclyNotAvaibleProjectData} />
            <ProjectCardList title='projects.header.private.projects' data={privateProjectData} />
        </>
    );
} 
