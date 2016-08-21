module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { include: /\.pug/, loader: 'pug-html-loader' }
        ]
    }
};