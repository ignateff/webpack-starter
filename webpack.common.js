const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { vendor: './src/vendor.js', main:'./src/index.js',},
    module: {
        rules: [
            
            { test: /\.html$/, use: ['html-loader'] },
            { test: /\.(svg|png|jpg|gif)$/, 
                use: {
                    loader:'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                } 
            }

        ]
    },
    plugins: [
        
        new CopyPlugin([
            { from: './src/data', to: 'data' },
        ]),
    ]
}