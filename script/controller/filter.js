import RecipeTemplate from '../factory/recipesTemplate.js'

export function filterRecipes(data, tabRecipes, filters) {
  // Copie du tableau des recettes pour ne pas modifier l'original
  const recipesFiltrees = [...tabRecipes];

  // Filtre par la barre de recherche
  if (data.searchBar) {
    for (let i = recipesFiltrees.length - 1; i >= 0; i--) {
      if (!recipesFiltrees[i].name.toLowerCase().includes(data.searchBar.toLowerCase())) {
        recipesFiltrees.splice(i, 1);
      }
    }
  }

  // Filtre par ingrédient
  if (data.selectedIngredient) {
    for (let i = recipesFiltrees.length - 1; i >= 0; i--) {
      if (!recipesFiltrees[i].ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(data.selectedIngredient.toLowerCase()))) {
        recipesFiltrees.splice(i, 1);
      }
    }
  }

  // Filtre par appareil
  if (data.selectedAppliance) {
    for (let i = recipesFiltrees.length - 1; i >= 0; i--) {
      if (!recipesFiltrees[i].appliance.toLowerCase().includes(data.selectedAppliance.toLowerCase())) {
        recipesFiltrees.splice(i, 1);
      }
    }
  }

  // Filtre par ustensile
  if (data.selectedUstensil) {
    for (let i = recipesFiltrees.length - 1; i >= 0; i--) {
      if (!recipesFiltrees[i].ustensils.some(ustensil => ustensil.toLowerCase().includes(data.selectedUstensil.toLowerCase()))) {
        recipesFiltrees.splice(i, 1);
      }
    }
  }
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