const cloudVisionConfig = {
    host: 'http://banconfiomongo.mybluemix.net/services',
    port: '80',
    routes: ['face', 'text', 'faceandtext', 'compare']
}

const defaultServerConfig = {
    host: 'http://banconfiomongo.mybluemix.net',
    port: '80',
    prefix: 'services',
    routes: {
        user: 'users',
        score: 'scores',
        networks: 'networks'
    }
}

export {
    cloudVisionConfig,
    defaultServerConfig
};