export default class Recipe {
    /**
     * @param {JSON} data
     */
    constructor (data) {
      this._id = data.id
      this._name = data.name;
      this._image = `assets/recettes/${data.image}`;
      this._serving = data.servings;
      this._ingredients = data.ingredients
      this._time = data.time
      this._description = data.description
      this._appliance = data.appliance
      this._ustensils = data.ustensils
    }
    /**
     * GETTERS
     */
    get id () {
      return this._id
    }

    get name() {
      return this._name;
    }

    get image() {
      return this._image;
    }
    
    get serving() {
      return this._serving;
    }

    get ingredients() {
      return this._ingredients
    }

    get time() {
      return this._time
    }

    get description() {
      return this._description
    }

    get appliance() {
      return this._appliance
    }

    get ustensils() {
      return this._ustensils
    }
}