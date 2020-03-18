class CollectionHelper {
  static convertCommunicationsForPublic (communications) {
    return communications.map((communication) => {
      return {
        id: communication.id,
        titre: communication.titre,
        description: communication.description,
        sort: communication.sort,
        document: communication.document
          ? {
            url: `https://directus.medteck.xyz/uploads/covidsn/originals/${communication.document.filename_disk}`,
            type: communication.document.type === 'application/pdf' ? 'le document PDF' : 'l\'image',
            filesize: communication.document.filesize
          }
          : null,
        created_on: communication.created_on,
        modified_on: communication.modified_on
      }
    })
  }
}

export default CollectionHelper
