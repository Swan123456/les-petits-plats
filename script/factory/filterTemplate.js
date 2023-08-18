/**
 * Template pour le filtre des images
 * @property {HTMLElement} filterHtmlElement
 * @property {HTMLElemnt} observerNode
 */
export default class FilterSelectTemplate {
  constructor() {
    this.$wrapper = null;
    this._observerNode = null;
  }

  /**
   * GETTERS
   */
  get filterHtmlElement() {
    return this.$wrapper;
  }

  get observerNode() {
    return this._observerNode;
  }

  /**
   * @returns {HtmlElement}
   */
  createFilter(tabRecipes) {
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("filter-selector");

    // Génération des filtres pour les ingrédients, les appareils et les ustensiles
    const content = `
      <select multiple aria-label="Filtre ingredients">
        <option selected>Sélectionnez un ingredients</option>
        ${createIngredientsFilter(tabRecipes)}
      </select>
      <select multiple aria-label="Filtre appareils">
        <option selected>Sélectionnez un appareils</option>
        ${createAppliancesFilter(tabRecipes)}
      </select>
      <select multiple aria-label="Filtre appareils">
        <option selected>Sélectionnez un appareils</option>
        ${createUstensilsFilter(tabRecipes)}
      </select>
    `;

    this.$wrapper.innerHTML = content;
    this._observerNode = this.$wrapper.querySelector(".selector");
    return this.$wrapper;
  }
}

/**
 * Crée le contenu du filtre d'ingrédients
 * @param {Array} recipes
 * @returns {string}
 */
export function createIngredientsFilter(recipes) {
  let content = '';

  const ingredientsList = [];
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      ingredientsList.push(ingredient.ingredient); 
    });
  });
  const ingredientsSet = new Set(ingredientsList);
  // Convertit l'ensemble en tableau sans doublons
  const ingredients = Array.from(ingredientsSet);
  ingredients.forEach(ingredient => {
    content += `<option>${ingredient}</option>`
  })

  return content;
}

/**
 * Crée le contenu du filtre d'appareils
 * @param {Array} recipes
 * @returns {string}
 */
export function createAppliancesFilter(recipes) {
  let content = '';
  const appliancesList = [];
  recipes.forEach(recipe => {
    if (Array.isArray(recipe.appliance)) {
      recipe.appliance.forEach(appliance => {
        appliancesList.push(appliance);
      });
    } else {
      appliancesList.push(recipe.appliance);
    }
  });
  const appliancesSet = new Set(appliancesList);
  // Convertit l'ensemble en tableau sans doublons
  const appliances = Array.from(appliancesSet);
  appliances.forEach(appliance => {
    content += `<option>${appliance}</option>`
  })
  return content;
}

/**
 * Crée le contenu du filtre d'ustensiles
 * @param {Array} recipes
 * @returns {string}
 */
export function createUstensilsFilter(recipes) {
  let content = '';
  const ustensilsList = [];
  recipes.forEach(recipe => {
    if (Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach(ustensil => {
        ustensilsList.push(ustensil);
      });
    } else {
      ustensilsList.push(recipe.ustensils);
    }
  });
  const ustensilsSet = new Set(ustensilsList);
  // Convertit l'ensemble en tableau sans doublons
  const ustensil = Array.from(ustensilsSet);
  ustensil.forEach(ustensil => {
    content += `<option>${ustensil}</option>`
  })
  return content;
}