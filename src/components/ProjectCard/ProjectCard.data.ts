import { CardData } from './ProjectCard';

export const publiclyAvaibleProjectData: CardData[] = [
    {
        img: {
            src: require('../../assets/img/pjwp.jpg'),
            alt: 'projects.card.image.pjwp'
        },
        linkToWeb: 'http://woda.gios.gov.pl/pjwp/',
        techStack: "projects.card.technology.pjwp"
    }
]

export const publiclyNotAvaibleProjectData: CardData[] = [
    {
        img: {
            src: require('../../assets/img/ilegal.jpg'),
            alt: 'projects.card.image.ilegal'
        },
        techStack: "projects.card.technology.ilegal"
    },
    {
        img: {
            src: require('../../assets/img/lims.jpg'),
            alt: 'projects.card.image.lims'
        },
        techStack: "projects.card.technology.lims"
    },
    {
        img: {
            src: require('../../assets/img/zpwd-mx.jpg'),
            alt: 'projects.card.image.zpwd-mx'
        },
        techStack: "projects.card.technology.zpwd-mx"
    },
]

export const privateProjectData: CardData[] = [
    {
        img: {
            src: require('../../assets/img/todo-list-angular.jpg'),
            alt: 'projects.card.image.todo-list-angular'
        },
        linkToCode: "https://github.com/postrowinski/AngularToDo",
        techStack: "projects.card.technology.todo-list-angular"
    },
    {
        img: {
            src: require('../../assets/img/todo-list-vue.jpg'),
            alt: 'projects.card.image.todo-list-vue'
        },
        linkToCode: "https://github.com/postrowinski/VueToDoList",
        techStack: "projects.card.technology.todo-list-vue"
    },
    {
        img: {
            src: require('../../assets/img/semafor.jpg'),
            alt: 'projects.card.image.semaphore'
        },
        linkToCode: "https://github.com/postrowinski/semafor",
        linkToWeb: "https://postrowinski.github.io/semafor/",
        techStack: "projects.card.technology.semaphore"
    },
    {
        img: {
            src: require('../../assets/img/binary-clock.jpg'),
            alt: 'projects.card.image.binary-clock'
        },
        linkToCode: "https://github.com/postrowinski/binary-clock",
        linkToWeb: "https://postrowinski.github.io/binary-clock/",
        techStack: "projects.card.technology.binary-clock"
    },
    {
        img: {
            src: require('../../assets/img/project-game1.jpg'),
            alt: 'projects.card.image.alt.game'
        },
        linkToWeb: "https://postrowinski.github.io/Memory-game/",
        linkToCode: "https://github.com/postrowinski/Memory-game",
        techStack: "projects.card.technology.game"
    },
    {
        img: {
            src: require('../../assets/img/project-1.jpg'),
            alt: 'projects.card.image.alt.photoapp'
        },
        linkToWeb: "https://postrowinski.github.io/photoapp/",
        linkToCode: "https://github.com/postrowinski/photoapp",
        techStack: "projects.card.technology.photoapp"
    },
    {
        img: {
            src: require('../../assets/img/project-2.jpg'),
            alt: 'projects.card.image.alt.creative.project'
        },
        linkToWeb: "https://postrowinski.github.io/Creative_Project/",
        linkToCode: "https://github.com/postrowinski/Creative_Project",
        techStack: "projects.card.technology.creative.project"
    },   
    {
        img: {
            src: require('../../assets/img/project-6.jpg'),
            alt: 'projects.card.image.alt.hex.project'
        },
        linkToWeb: "https://postrowinski.github.io/Hex_project/",
        linkToCode: "https://github.com/postrowinski/Hex_project",
        techStack: "projects.card.technology.hex.project"
    },  
    {
        img: {
            src: require('../../assets/img/project-7.jpg'),
            alt: 'projects.card.image.alt.mobile.ninja'
        },
        linkToWeb: "https://postrowinski.github.io/Ninjas_project/",
        linkToCode: "https://github.com/postrowinski/Ninjas_project",
        techStack: "projects.card.technology.mobile.ninja"
    },  
];

