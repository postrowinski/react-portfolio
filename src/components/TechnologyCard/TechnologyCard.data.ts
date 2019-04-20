interface Image {
    src: string;
    alt: string;
}

export interface TechCard {
    img: Image;
    title: string;
    description: string;
    content: string;
}

export const goodKnowTech: TechCard[] = [
    {
        content: 'card.javaScript.content',
        description: 'card.javaScript.description',
        img: {
            alt: 'card.javaScript.title',
            // tslint:disable-next-line:max-line-length
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png'
        },
        title: 'card.javaScript.title'
    },
    {
        content: 'card.javaScript.es6.content',
        description: 'card.javaScript.es6.description',
        img: {
            alt: 'card.javaScript.es6.title',
            src: 'https://cdn-images-1.medium.com/max/1050/1*ktJUMJO60oHoluiEV6KBmA.png'
        },
        title: 'card.javaScript.es6.title'
    },
    {
        content: 'card.typeScript.content',
        description: 'card.typeScript.description',
        img: {
            alt: 'card.typeScript.title',
            src: 'https://cdn-images-1.medium.com/max/1200/1*mn6bOs7s6Qbao15PMNRyOA.png'
        },
        title: 'card.typeScript.title'
    },
    {
        content: 'card.react.content',
        description: 'card.react.description',
        img: {
            alt: 'card.react.title',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        title: 'card.react.title'
    },
    {
        content: 'card.react.ts.content',
        description: 'card.react.ts.description',
        img: {
            alt: 'card.react.ts.title',
            src: 'https://user-images.githubusercontent.com/6764957/53868378-2b51fc80-3fb3-11e9-9cee-0277efe8a927.png'
        },
        title: 'card.react.ts.title'
    },
    {
        content: 'card.git.content',
        description: 'card.git.description',
        img: {
            alt: 'card.git.title',
            // tslint:disable-next-line:max-line-length
            src: 'https://kosiorowski.usermd.net/wp-content/uploads/2014/01/git-logo-cc-by-300x300.png'
        },
        title: 'card.git.title'
    },
    {
        content: 'card.html.content',
        description: 'card.html.description',
        img: {
            alt: 'card.html.title',
            // tslint:disable-next-line:max-line-length
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
        },
        title: 'card.html.title'
    },
    {
        content: 'card.sass.content',
        description: 'card.sass.description',
        img: {
            alt: 'card.sass.title',
            src: 'https://www.logolynx.com/images/logolynx/8b/8b8bf083d0dd7da1add16463ae41d28a.png'
        },
        title: 'card.sass.title'
    },
    {
        content: 'card.css.content',
        description: 'card.css.description',
        img: {
            alt: 'card.css.title',
            src: 'https://img.freedisc.pl/photo/24/2/l/css3-logo-large-jpeg.png'
        },
        title: 'card.css.title'
    },
    {
        content: 'card.rwd.content',
        description: 'card.rwd.description',
        img: {
            alt: 'card.rwd.title',
            src: 'http://westwanski.pl/wp/wp-content/uploads/2017/08/rwd-1.png'
        },
        title: 'card.rwd.title'
    },
    {
        content: 'card.bootstrap.content',
        description: 'card.bootstrap.description',
        img: {
            alt: 'card.bootstrap.title',
            src: 'https://www.searchpng.com/wp-content/uploads/2019/02/Bootstrap-Logo-PNG-715x715.png'
        },
        title: 'card.bootstrap.title'
    },
    {
        content: 'card.antd.content',
        description: 'card.antd.description',
        img: {
            alt: 'card.antd.title',
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        },
        title: 'card.antd.title'
    },
];

export const beginnerKnowTech: TechCard[] = [
    {
        content: 'card.vue.content',
        description: 'card.vue.description',
        img: {
            alt: 'card.vue.title',
            src: 'https://vuejs.org/images/logo.png'
        },
        title: 'card.vue.title'
    },
    {
        content: 'card.angular.content',
        description: 'card.angular.description',
        img: {
            alt: 'card.angular.title',
            // tslint:disable-next-line:max-line-length
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
        },
        title: 'card.angular.title'
    },
    {
        content: 'card.jest.content',
        description: 'card.jest.description',
        img: {
            alt: 'card.jest.title',
            src: 'https://res.cloudinary.com/opencollective/image/upload/v1526921427/jest1_vaexks.png'
        },
        title: 'card.jest.title'
    },
    {
        content: 'card.react.native.content',
        description: 'card.react.native.description',
        img: {
            alt: 'card.react.native.title',
            // tslint:disable-next-line:max-line-length
            src: 'data:image/png;base64,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'
        },
        title: 'card.react.native.title'
    },
    {
        content: 'card.webpack.content',
        description: 'card.webpack.description',
        img: {
            alt: 'card.webpack.title',
            src: 'https://cdn-images-1.medium.com/max/1050/1*92BokALSOmNQ40kn57LeDg.png'
        },
        title: 'card.webpack.title'
    },
    {
        content: 'card.sql.content',
        description: 'card.sql.description',
        img: {
            alt: 'card.sql.title',
            src: 'http://www.logospng.com/images/44/how-to-write-sql-44347.png'
        },
        title: 'card.sql.title'
    },
    {
        content: 'card.liqui.base.content',
        description: 'card.liqui.base.description',
        img: {
            alt: 'card.liqui.base.title',
            src: 'https://avatars1.githubusercontent.com/u/438548?s=400&v=4'
        },
        title: 'card.liqui.base.title'
    },
    {
        content: 'card.java.content',
        description: 'card.java.description',
        img: {
            alt: 'card.java.title',
            src: 'https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png'
        },
        title: 'card.java.title'
    },
];
