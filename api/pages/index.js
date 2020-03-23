import util from 'util'
import PageHelper from './pageHelper'

class PagesController {
  static getAccueil (req, res, directusClient) {
    directusClient.getItems(
      'accueil',
      {
        fields: [
          'titre',
          'sous_titre',
          'video'
        ]
      }
    ).then((result) => {
      const pages = result.data
      if (pages.length) {
        res.send(JSON.stringify(pages[0]))
      } else {
        res.status(404).send()
      }
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }

  static getDonnees (req, res, directusClient) {
    directusClient.getItems(
      'donnees',
      {
        fields: [
          'infectes',
          'texte_infectes',
          'gueris',
          'texte_gueris',
          'traitements',
          'texte_traitements',
          'deces',
          'texte_deces',
          'modified_on'
        ]
      }
    ).then((result) => {
      const pages = result.data
      if (pages.length) {
        res.send(JSON.stringify(pages[0]))
      } else {
        res.status(404).send()
      }
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }

  static getAPropos (req, res, directusClient) {
    directusClient.getItems(
      'a_propos',
      {
        fields: [
          'sous_titre',
          'notre_mission',
          'membres.membres_id.photo.private_hash',
          'membres.membres_id.nom_complet',
          'membres.membres_id.poste',
          'membres.membres_id.facebook',
          'membres.membres_id.twitter',
          'membres.membres_id.linkedin'
        ]
      }
    ).then((result) => {
      const pages = result.data
      if (pages.length) {
        res.send(JSON.stringify(PageHelper.convertForPublic(pages[0])))
      } else {
        res.status(404).send()
      }
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }
}

export default PagesController
