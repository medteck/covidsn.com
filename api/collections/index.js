import util from 'util'
import CollectionHelper from './collectionHelper'

class CollectionsController {
  static getCommunications (req, res, directusClient) {
    directusClient.getItems(
      'communications',
      {
        filter: {
          status: 'published'
        },
        fields: [
          'id',
          'titre',
          'description',
          'sort',
          'document.filename_disk',
          'document.type',
          'document.filesize',
          'created_on',
          'modified_on'
        ]
      }
    ).then((result) => {
      const communications = CollectionHelper.convertCommunicationsForPublic(result.data)
      res.send(JSON.stringify(communications.reverse()))
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }

  static getContacts (req, res, directusClient) {
    directusClient.getItems(
      'contacts',
      {
        filter: {
          status: 'published'
        },
        fields: [
          'id',
          'numero',
          'titre'
        ]
      }
    ).then((result) => {
      res.send(JSON.stringify(result.data))
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }

  static getFAQ (req, res, directusClient) {
    directusClient.getItems(
      'foire_aux_questions',
      {
        filter: {
          status: 'published'
        },
        fields: [
          'id',
          'question',
          'reponse'
        ]
      }
    ).then((result) => {
      res.send(JSON.stringify(result.data))
    }).catch((error) => {
      res.status(500).send(util.inspect(error))
    })
  }
}

export default CollectionsController
