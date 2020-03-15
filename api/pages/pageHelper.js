import store from '../configs/store'

class PageHelper {
  static convertForPublic (page, req) {
    return new Promise((resolve, reject) => {
      store.getConfig(req).then((config) => {
        config = JSON.parse(config)
        resolve({
          sous_titre: page.sous_titre,
          notre_mission: page.notre_mission,
          membres: page.membres.map((membre) => {
            return {
              nom_complet: membre.membres_id.nom_complet,
              poste: membre.membres_id.poste,
              facebook: membre.membres_id.facebook,
              twitter: membre.membres_id.twitter,
              linkedin: membre.membres_id.linkedin,
              photo: `${config.cdn_url}/${config.id}/assets/${membre.membres_id.photo.private_hash}?w=520&h=520&f=crop&q=100`
            }
          })
        })
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default PageHelper
