var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '/static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.less']
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}, // es6 & react
            {test: /\.less$/, loader: 'style!css!less'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.ttf|eot|svg|woff|woff2$/, loader: "file-loader"}
        ]
    }
};
