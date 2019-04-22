import * as React from "react";
import { Route } from 'react-router';
import Contact from "../../pages/Contact/Contact";
import { Experience } from "../../pages/Experience/Experience";
import Home from "../../pages/Home/Home";
import { Progress } from '../../pages/Progress/Progess';
import Projects from "../../pages/Projects/Projects";
import * as PATHS from './paths';

export const Routing: React.FC<{}> = (): JSX.Element => (
    <>
        <Route exact path={PATHS.home} component={Home} />
        <Route path={PATHS.contact} component={Contact} />
        <Route path={PATHS.experience} component={Experience} />
        <Route path={PATHS.projects} component={Projects} />
        <Route path={PATHS.progress} component={Progress} />
    </>
);
