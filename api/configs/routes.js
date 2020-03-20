import PagesController from '../pages'
import CollectionsController from '../collections'

const getRoutes = () => {
  return [
    // -> Pages
    {
      path: '/pages/accueil',
      controller: PagesController.getAccueil
    },
    {
      path: '/pages/donnees',
      controller: PagesController.getDonnees
    },
    {
      path: '/pages/apropos',
      controller: PagesController.getAPropos
    },
    // -> Collections
    {
      path: '/collections/communications',
      controller: CollectionsController.getCommunications
    },
    {
      path: '/collections/faq',
      controller: CollectionsController.getFAQ
    },
    {
      path: '/collections/contacts',
      controller: CollectionsController.getContacts
    },
    {
      path: '/collections/fakenews',
      controller: CollectionsController.getFakeNews
    }
  ]
}

export default getRoutes
