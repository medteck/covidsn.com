module.exports = {
  apps: [
    {
      name: 'covidsn',
      script: 'nuxt',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster'
    }
  ]
}
