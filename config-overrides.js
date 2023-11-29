const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@routes': 'src/routes',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@services': 'src/services',
        '@context': 'src/context',
    })(config);
    return config;
}