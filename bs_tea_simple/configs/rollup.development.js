import livereload from 'rollup-plugin-livereload';
import node_resolve from 'rollup-plugin-node-resolve';

const workerConfig = {
  input: './src/worker.bs.js',
  output: {
    file: './release/worker.bs.js',
    name: 'starter',
    format: 'iife'
  },
  plugins: [
    node_resolve({ module: true, browser: true })
  ],
  watch: {
    clearScreen: false
  }
};

const mainConfig = {
  input: './src/main.bs.js',
  output: {
    file: './release/main.js',
    name: 'starter',
    format: 'iife'
  },
  plugins: [
    node_resolve({ module: true, browser: true }),
    livereload('release')
  ],
  watch: {
    clearScreen: false
  }
};


export default [
  mainConfig,
  workerConfig
];
