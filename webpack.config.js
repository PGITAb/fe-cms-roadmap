var path = require('path');

module.exports = {
  entry: './src/components/Roadmap/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        query: {
          limit: 100000,
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      playerclient: path.resolve('./node_modules/playerclient'),
    },
  },
};
