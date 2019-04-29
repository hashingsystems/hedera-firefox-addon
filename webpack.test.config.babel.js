import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.config.babel'
import defaults from './src/javascript/defaults'
const globals = defaults['test']
let globalsStringified = {}
for (var k in globals) {
    if (globals.hasOwnProperty(k)) {
        globalsStringified[k] = JSON.stringify(globals[k])
    }
}

let developmentConfig = {
    mode: 'development',
    watch: true,
    plugins: [new webpack.DefinePlugin(globalsStringified)]
}

export default merge(common, developmentConfig)
