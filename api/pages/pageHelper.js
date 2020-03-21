class PageHelper {
  static convertForPublic (page) {
    return {
      sous_titre: page.sous_titre,
      notre_mission: page.notre_mission,
      membres: page.membres.map((membre) => {
        return {
          nom_complet: membre.membres_id.nom_complet,
          poste: membre.membres_id.poste,
          facebook: membre.membres_id.facebook,
          twitter: membre.membres_id.twitter,
          linkedin: membre.membres_id.linkedin,
          photo: `https://cdn.covidsn.com/covidsn/assets/${membre.membres_id.photo.private_hash}?w=520&h=520&f=crop&q=100`
        }
      })
    }
  }
}

export default PageHelper
