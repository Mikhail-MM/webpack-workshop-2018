const webpackMerge = require('webpack-merge');

const applyPresets = env => {
    const { presets } = env;
    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(
        presetName => require(`./presets/webpack.${presetName}`)(env)
    )

    return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets