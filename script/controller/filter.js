import RecipeTemplate from '../factory/recipesTemplate.js'

export function filterRecipes(data, tabRecipes, filters) {
  const recipesFiltrees = tabRecipes.filter((recipe) => {
    // Filtrer par la bar de recherche
    if (data.searchBar && !recipe.name.includes(data.searchBar)) {
      return false;
    }

    // Filtrer par ingrédient
    if (data.selectedIngredient && !recipe.ingredients.some(ingredients => ingredients.ingredient.includes(data.selectedIngredient))) {
      return false;
    }
    
    // Filtrer par appareil
    if (data.selectedAppliance && !recipe.appliance.includes(data.selectedAppliance)) {
      return false;
    }
    // Filtrer par ustensile
    if (data.selectedUstensil && !recipe.ustensils.some(ustensil => ustensil.includes(data.selectedUstensil))) {
      return false;
    }

    // Si aucune condition de filtrage ne correspond, la recette est conservée
    return true;
  });
  const $recipesWrapper = document.querySelector('#recipe_section')
  const recipeTemplate = new RecipeTemplate;
  recipesFiltrees.forEach(element => {
    const recipesTemplate = new RecipeTemplate(element)
    $recipesWrapper.appendChild(recipesTemplate.createRecipeCard())
  })
}
