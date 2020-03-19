module.exports = {
  apps: [
    {
      name: 'covidsn',
      script: 'nuxt',
      args: 'start',
      env_production: {
        GA_COVIDSN: 'UA-161185000-1'
      }
    }
  ]
}
