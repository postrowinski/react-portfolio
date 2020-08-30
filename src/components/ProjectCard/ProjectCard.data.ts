import { CardData } from './ProjectCard';

export const publiclyAvaibleProjectData: CardData[] = [
    {
        img: {
            alt: 'projects.card.image.pjwp',
            src: require('../../assets/img/pjwp.jpg')
        },
        linkToWeb: 'http://woda.gios.gov.pl/pjwp/',
        techStack: "projects.card.technology.pjwp"
    }
];

export const publiclyNotAvaibleProjectData: CardData[] = [
    {
        img: {
            alt: 'projects.card.image.ilegal',
            src: require('../../assets/img/ilegal.jpg')
        },
        techStack: "projects.card.technology.ilegal"
    },
    {
        img: {
            alt: 'projects.card.image.lims',
            src: require('../../assets/img/lims.jpg')
        },
        techStack: "projects.card.technology.lims"
    },
    {
        img: {
            alt: 'projects.card.image.zpwd-mx',
            src: require('../../assets/img/zpwd-mx.jpg')
        },
        techStack: "projects.card.technology.zpwd-mx"
    },
];

export const privateProjectData: CardData[] = [
    {
        img: {
            alt: 'projects.card.image.todo-list-angular',
            src: require('../../assets/img/todo-list-angular.jpg')
        },
        linkToCode: "https://github.com/postrowinski/AngularToDo",
        techStack: "projects.card.technology.todo-list-angular"
    },
    {
        img: {
            alt: 'projects.card.image.todo-list-vue',
            src: require('../../assets/img/todo-list-vue.jpg')
        },
        linkToCode: "https://github.com/postrowinski/VueToDoList",
        techStack: "projects.card.technology.todo-list-vue"
    },
    {
        img: {
            alt: 'projects.card.image.semaphore',
            src: require('../../assets/img/semafor.jpg')
        },
        linkToCode: "https://github.com/postrowinski/semafor",
        linkToWeb: "https://postrowinski.github.io/semafor/",
        techStack: "projects.card.technology.semaphore"
    },
    {
        img: {
            alt: 'projects.card.image.binary-clock',
            src: require('../../assets/img/binary-clock.jpg')
        },
        linkToCode: "https://github.com/postrowinski/binary-clock",
        linkToWeb: "https://postrowinski.github.io/binary-clock/",
        techStack: "projects.card.technology.binary-clock"
    },
    {
        img: {
            alt: 'projects.card.image.alt.game',
            src: require('../../assets/img/project-game1.jpg')
        },
        linkToCode: "https://github.com/postrowinski/Memory-game",
        linkToWeb: "https://postrowinski.github.io/Memory-game/",
        techStack: "projects.card.technology.game"
    },
    {
        img: {
            alt: 'projects.card.image.alt.photoapp',
            src: require('../../assets/img/project-1.jpg')
        },
        linkToCode: "https://github.com/postrowinski/photoapp",
        linkToWeb: "https://postrowinski.github.io/photoapp/",
        techStack: "projects.card.technology.photoapp"
    },
    {
        img: {
            alt: 'projects.card.image.alt.creative.project',
            src: require('../../assets/img/project-2.jpg')
        },
        linkToCode: "https://github.com/postrowinski/Creative_Project",
        linkToWeb: "https://postrowinski.github.io/Creative_Project/",
        techStack: "projects.card.technology.creative.project"
    },
    {
        img: {
            alt: 'projects.card.image.alt.hex.project',
            src: require('../../assets/img/project-6.jpg')
        },
        linkToCode: "https://github.com/postrowinski/Hex_project",
        linkToWeb: "https://postrowinski.github.io/Hex_project/",
        techStack: "projects.card.technology.hex.project"
    },
    {
        img: {
            alt: 'projects.card.image.alt.mobile.ninja',
            src: require('../../assets/img/project-7.jpg')
        },
        linkToCode: "https://github.com/postrowinski/Ninjas_project",
        linkToWeb: "https://postrowinski.github.io/Ninjas_project/",
        techStack: "projects.card.technology.mobile.ninja"
    },
];
