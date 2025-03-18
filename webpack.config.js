const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.resolve.alias['react-native$'] = 'react-native-web';
    config.resolve.alias['react-native-web$'] = require.resolve('react-native-web');

    // MIME türü sorununu gidermek için Content-Type başlığını ayarlayın
    config.devServer = {
        headers: {
            'Content-Type': 'application/javascript'
        }
    };

    return config;
};
