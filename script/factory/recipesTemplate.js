import { filterRecipes } from '../controller/filter.js'

/**
 * Templates Recettes
 * @property {HTMLElement} btnModal
 */
export default class RecipeTemplate {
  /**
   * @param {Recipe} recipe
   */
  constructor(recipe, filterData) {
    this._recipe = recipe;
    this._filter = filterData; 
  }
  /**
   * Template pour la Card recipe
   * @returns {HTMLElement}
   */
  createRecipeCard() {
    this.$wrapperCard = document.createElement("li");
    this.$wrapperCard.classList.add(
      "col-lg-4",
      "col-md-6",
      "d-flex",
      "justify-content-center"
    );

    // Construction la liste des ingrédients
    const ingredientsList = this._recipe.ingredients
      .map((ingredient) => {
        const quantity = ingredient.quantity
          ? `${ingredient.quantity} ${ingredient.unit || ""}`
          : "";
        return `<li class="col-md-5">${ingredient.ingredient} <p class="recipe__quantity">${quantity}</p></li>`;
      })
      .join("");

    const card = `      
      <article class="recipe" aria-label="${this._recipe.name}">
        <p class="recipe__time">${this._recipe.time}min</p> 
        <div class="recipe__cover">
          <img width="100" src="${this._recipe.image}" alt="${this._recipe.name}" loading="lazy" style="quality: 50"/>
          <div class="loader"></div>
        </div>        
        <div class="recipe__content">
          <h2 class="recipe__title">${this._recipe.name}</h2>   
          <h3 class="recipe__indic">Recette</h3> 
          <p class="recipe__description">${this._recipe.description.substring(0, 200)}..</p> 
          <h3 class="recipe__indic">Ingredients</h3> 
          <ul class="row justify-content-between">${ingredientsList}</ul> 
        </div>
      </article>      
    `;
    this.$wrapperCard.innerHTML = card;
    return this.$wrapperCard;
  }
  
  update(data, recipes) {
    const $recipesWrapper = document.querySelector('#recipe_section');
    $recipesWrapper.innerHTML = ''; 
    filterRecipes(data, recipes)
    this.updateRecipeCounter();
  }

  updateRecipeCounter() {
    const $recipeCounter = document.querySelector('.recipe-counter');
    const $recipeCards = document.querySelectorAll('.recipe');
    const numberOfRecipes = $recipeCards.length;
    $recipeCounter.textContent = `${numberOfRecipes} Recettes`;
  }
}
