export interface IContactItem {
    icon: string;
    title: string;
    backgroundColor: string;
    link: string;
}

export const contactItems: IContactItem[] = [
    {
        backgroundColor: '#3b5998',
        icon: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=100021906163565',
        title: 'Facebook'
    },
    {
        backgroundColor: '#0e76a8',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/przemys%C5%82aw-ostrowi%C5%84ski-442b73144/',
        title: 'Linkedin'
    },
    {
        backgroundColor: '#000000',
        icon: 'github',
        link: 'https://github.com/postrowinski',
        title: 'Github'
    }
];
