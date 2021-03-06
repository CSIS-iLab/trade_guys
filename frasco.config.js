module.exports = {
  port: 4000,

  tasks: {
    browsersync: true,
    eslint: true,
    imagemin: true,
    sass: true,
    watch: true,
    webpack: true
  },

  assets: './assets',

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // "Google Chrome",
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ]
  },

  eslintLoader: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      globals: ['Waypoint']
    }
  },

  imagemin: {
    src: '_images',
    dest: 'images',
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }]
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: ''
    },
    dest: '_site',
    includes: '_includes',
    layouts: '_layouts',
    posts: '_posts',
    data: '_data',
    podcast: '_podcast',
    authors: '_authors',
    series: '_series',
    keywords: '_keywords'
  },

  js: {
    src: '_js',
    dest: 'js',
    entry: [
      'bundle.js',
      '/custom-viz/boeing/boeing.js',
      '/custom-viz/wto-tracker/wto-tracker.js'
    ]
  },

  sass: {
    src: '_sass',
    dest: 'css',
    outputStyle: 'compressed',
    autoprefixer: {}
  },

  webpack: {
    mode: 'production',
    // devtool: 'source-map',
    // plugins: [new BundleAnalyzerPlugin()],
    output: {
      filename: chunkData => {
        return chunkData.chunk.entryModule._identifier.includes('custom-viz/')
          ? 'custom-viz/[name]/[name].js'
          : '[name].js'
      }
    },
    externals: {
      waypoints: 'waypoints',
      jquery: 'jQuery',
      gapi: 'gapi'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        waypoints: 'waypoints'
      }
    }
  }
}
