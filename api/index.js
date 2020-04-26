import util from 'util'
import express from 'express'
import store from './configs/store'
import getRoutes from './configs/routes'

const app = express()
const routeMap = getRoutes()

routeMap.forEach((route) => {
  app.route(route.path).get((req, res, next) => {
    store.getDirectusClient(req).then((directusClient) => {
      route.controller(req, res, directusClient)
    }).catch((error) => {
      console.log(util.inspect(error))
      res.status(500).send(util.inspect(error))
    })
  })
})

export default {
  path: '/api/',
  handler: app
}
