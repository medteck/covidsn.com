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
            url: `https://cdn.covidsn.com/uploads/covidsn/originals/${communication.document.filename_disk}`,
            type: communication.document.type === 'application/pdf' ? 'le document PDF' : 'l\'image',
            filesize: communication.document.filesize
          }
          : null,
        created_on: communication.created_on,
        modified_on: communication.modified_on
      }
    })
  }

  static convertFakeNewsForPublic (fakeNews) {
    return fakeNews.map((fakeNew) => {
      return {
        id: fakeNew.id,
        titre: fakeNew.titre,
        sous_titre: fakeNew.sous_titre,
        contenu: fakeNew.contenu,
        slug: fakeNew.slug,
        source: fakeNew.source,
        video: fakeNew.video,
        show_details: false,
        image: fakeNew.image
          ? `https://directus.medteck.xyz/covidsn/assets/${fakeNew.image.private_hash}?w=400&h=250&f=crop&q=80`
          : null,
        created_on: fakeNew.created_on,
        modified_on: fakeNew.modified_on
      }
    })
  }
}

export default CollectionHelper
