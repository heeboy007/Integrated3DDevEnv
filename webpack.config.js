const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body',
});

const transpileLocations = [
    path.resolve(__dirname, 'index.js'),
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-native/'),
    path.resolve(__dirname, 'node_modules/react-native-svg/'),
    path.resolve(__dirname, 'node_modules/react-native-reanimated/'),
    path.resolve(__dirname, 'node_modules/react-native-gesture-handler/'),
    path.resolve(__dirname, 'node_modules/react-native-linear-gradient/'),
    path.resolve(__dirname, 'node_modules/expo-gl/'),
    path.resolve(__dirname, 'node_modules/@react-native/'),
];

const babelLoaderConfiguration = {
    test: /\.(js|jsx|cjs|mjs)$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: transpileLocations,
    resolve: {
        fullySpecified: false
    },
    use: {
        loader: 'babel-loader',
        options: {
            //cacheDirectory: true,
            // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
            presets: [
                'module:metro-react-native-babel-preset',
                '@babel/preset-react',
                [ "@babel/preset-env", { "loose": true, "shippedProposals": true } ],
            ],
            // Re-write paths to import only the modules needed by the app
            plugins: [
                '@babel/plugin-proposal-class-properties',
                [ "@babel/plugin-transform-private-methods", { "loose": false } ],
                [ "@babel/plugin-transform-private-property-in-object", { "loose": false } ],
                'react-native-web',
                'inline-react-svg',
            ]
        }
    }
};

const typeScriptLoaderConfiguration = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
    //include: transpileLocations
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png)$/,
    use: {
        loader: 'url-loader',
        options: {
            outputPath: 'assets/images/'
        },
    }
};

//svg loader
const svgLoaderConfiguration = {
    test: /.svg$/,
    exclude: /node_modules/,
    use: [
        {
            loader: require.resolve('@svgr/webpack'),
            options: {
                expandProps: 'end',
                native: true,
            },
        },
    ],
}

const fontLoaderConfiguration = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/'
            },
        },
    ]
};

const glTFLoaderConfiguration = {
    test: /\.(glb|gltf)$/,
    use:
    [
        {
            loader: 'file-loader',
            options:
            {
                name: '[name].[ext]',
                outputPath: 'assets/models/'
            }
        }
    ]
};

module.exports = {
    entry: [
        // load any web API polyfills
        // path.resolve(appDirectory, 'polyfills-web.js'),
        // your web-specific entry file
        path.resolve(__dirname, 'index.js')
    ],

    // configures where the build ends up
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(__dirname, 'dist')
    },

    // ...the rest of your config

    module: {
        rules: [
            typeScriptLoaderConfiguration,
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
            fontLoaderConfiguration,
            glTFLoaderConfiguration
        ]
    },

    resolve: {
        // This will only alias the exact import "react-native"
        alias: {
            'react-native$': 'react-native-web',
            'react-native-linear-gradient$': 'react-native-web-linear-gradient',
            '@react-three/fiber/native$': '@react-three/fiber/native/dist/react-three-fiber-native.esm',
        },
        fallback: {
            "crypto": require.resolve('crypto-browserify'),
            "stream": require.resolve("stream-browserify"),
            "vm": require.resolve("vm-browserify"),
        },
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // `.web.js`.
        extensions: [ '.ts', '.tsx', '.json', '.jsx', '.web.js', '.js', '.cjs', '.mjs' ],
    },

    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV !== 'production' || true,
            process: { env: { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')} },
        }),
    ],

    devServer: {
        open: true,
        historyApiFallback: true,
        static: './public/',
        hot: true,
    },
}