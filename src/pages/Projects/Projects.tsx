import * as React from "react";
import { AppHeader } from '../../components/Header/Header';
import { privateProjectData } from '../../components/ProjectCard/ProjectCard.data';
import { ProjectCardList } from '../../components/ProjectCard/ProjectCardList';

export const Projects: React.FC<{}> = (): JSX.Element => {
    return (
        <>
            <AppHeader title='common.subpage.under.construction' />
            <br />
            <AppHeader title='projects.header.publicly.avaible' />
            <AppHeader title='projects.header.not.publicly.avaible' />
            <ProjectCardList title='projects.header.private.projects' data={privateProjectData} />
        </>
    );
} 
