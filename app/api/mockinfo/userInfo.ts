export default {
    data: {
        basicInfo: {
            name: 'Erik L',
            career: 'Full-Stack Developer',
            avatar: './user/avatar.jpg', // 头像
            snapshot: './user/snapshot.png', // 生活照
            bio: 'All work and no play makes Jack a dull boy.',
        },
        contactInfo: {
            email: 'youremail@internet.com',
            website: 'https://github.com/loo-y',
            phone: '13600000000',
            countryCode: '86',
            city: 'Shanghai',
        },
        socials: [
            {
                social: 'github',
                account: '@loo-y',
                link: 'https://github.com/loo-y',
            },
            {
                social: 'wechat',
                account: '@yourwechat',
                qrcode: './user/wechat_qrcode.jpg',
            },
            {
                social: 'weibo',
                account: '@yourweibo',
                link: 'https://weibo.com/youraccount',
            },
            {
                social: 'bilibili',
                account: '@yourbilibili',
                link: 'https://bilibili.com/youraccount',
            },
            {
                social: 'linkedin',
                account: '@yourlinkedin',
                link: 'https://linkedin.com/youraccount',
            },
            {
                social: 'xiaohongshu',
                account: '@yourxiaohongshu',
                link: 'https://xiaohongshu.com/youraccount',
            },
            {
                social: 'instagram',
                account: '@yourinstagram',
                link: 'https://instagram.com/youraccount',
            },
            {
                social: 'twitter',
                account: '@yourtwitter',
                link: 'https://twitter.com/youraccount',
            },
        ],
        languages: [
            { language: 'Chinese', level: 'native' },
            { language: 'English', level: 'Fluent' },
            { language: 'German', level: 'Proficient' },
            { language: 'Cantonese', level: 'Intermediate' },
            { language: 'French', level: 'Beginner' },
        ],
        hobbies: [
            { hobby: 'Gaming', type: 'game' },
            { hobby: 'Travelling', type: 'travel' },
            { hobby: 'Photography', type: 'photography' },
            { hobby: 'Badminton', type: 'badminton' },
            { hobby: 'Coding', type: 'coding' },
            { hobby: 'Design', type: 'design' },
            { hobby: 'Music', type: 'music' },
        ],
    },
    status: 0,
}
