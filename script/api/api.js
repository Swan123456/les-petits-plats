/**
 * CLASS API : Recupere les données dans le fichier JSON avec la méthode fetch
 */
export default class Api {
    /**
     * @param {string} url
     */
    constructor (url) {
      this._url = url
    }
    /**
     * requete API simulation avec getRecipes
     * @returns {Promise}
     */
    async getRecipes () {
      return fetch(this._url)
      .then(response => response.json())
      .then(response => {
          return response
        })
        .catch(err => {
          throw new Error('La requete api getRecipes a échoué : ', err)
        })
    }
}