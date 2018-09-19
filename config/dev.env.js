'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  baseUrl: '"/api"',
  baseUrl1: '"/api1"',
  testUrl: '"/test"',
  preUrl: '"/pre"',
  proUrl: '"/pro"'
})
