/**
 * Created by rain on 2016/3/2.
 */
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.png$/, loader: "url"}
        ]
    }
};