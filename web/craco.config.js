/* eslint-disable no-undef */

module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    util: require.resolve('util/')
                }
            }
        }
    }
}