import RecipeTemplate from '../factory/recipesTemplate.js'

export function filterRecipes(data, tabRecipes, filters) {
  const recipesFiltrees = tabRecipes.filter((recipe) => {
    // Filtrer par la bar de recherche
    if (data.searchBar && !recipe.name.toLowerCase().includes(data.searchBar.toLowerCase())) {
      return false;
    }

    // Filtrer par ingrédient
    if (data.selectedIngredient && !recipe.ingredients.some(ingredients => ingredients.ingredient.toLowerCase().includes(data.selectedIngredient.toLowerCase()))) {
      return false;
    }
    
    // Filtrer par appareil
    if (data.selectedAppliance && !recipe.appliance.toLowerCase().includes(data.selectedAppliance.toLowerCase())) {
      return false;
    }
    // Filtrer par ustensile
    if (data.selectedUstensil && !recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(data.selectedUstensil.toLowerCase()))) {
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
  if (recipesFiltrees.length === 0) {
    $recipesWrapper.innerHTML = `<h2 class="text-center" style="">Aucune recette ne correspond aux critères de filtrage.</h2>`  
  }
}
