import DirectusSDK from '@directus/sdk-js'
import redis from 'redis'
const { promisify } = require('util')

const redisClient = redis.createClient()
const getAsync = promisify(redisClient.get).bind(redisClient)

// Create dummy :
redisClient.set('localhost:3221', '{"id":"covidsn","cdn_url":"https://directus.medteck.xyz","api_credentials":{"url":"https://directus.medteck.xyz","project":"covidsn","token":"r4kgbU67Zs72WfVF9PzB6li9"}}')

global.directusClients = {}

const getDomain = (req) => {
  return req.header('Host')
}

const getConfig = (req) => {
  return getAsync(getDomain(req))
}

const getDirectusClient = (req) => {
  return new Promise((resolve, reject) => {
    if (global.directusClients[getDomain(req)]) {
      resolve(global.directusClients[getDomain(req)])
    } else {
      getConfig(req).then((result) => {
        const config = JSON.parse(result)
        if (!config) {
          reject(new Error(404, 'Store not found'))
        }
        global.directusClients[getDomain(req)] = new DirectusSDK(config.api_credentials)
        resolve(global.directusClients[getDomain(req)])
      }).catch((error) => {
        reject(error)
      })
    }
  })
}

export default {
  getConfig,
  getDirectusClient
}
