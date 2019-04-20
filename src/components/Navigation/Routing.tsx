import * as React from "react";
import { Route } from 'react-router';
import Contact from "../../pages/Contact/Contact";
import { Experience } from "../../pages/Experience/Experience";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import { PATHS } from './paths';

export const Routing: React.FC<{}> = (): JSX.Element => (
    <>
        <Route exact path={PATHS.home} component={Home} />
        <Route path={PATHS.contact} component={Contact} />
        <Route path={PATHS.experience} component={Experience} />
        <Route path={PATHS.projects} component={Projects} />
    </>
);
