import DirectusSDK from '@directus/sdk-js'
import redis from 'redis'
const { promisify, inspect } = require('util')

const redisClient = redis.createClient()
const getAsync = promisify(redisClient.get).bind(redisClient)

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
        console.error(`Couldn't get config for ${inspect(getDomain(req))}`)
        reject(error)
      })
    }
  })
}

export default {
  getConfig,
  getDirectusClient
}
