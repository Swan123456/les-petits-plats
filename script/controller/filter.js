export function filterRecipes(data, tabRecipes, filters) {
  console.log(data);
  // return tabRecipes.filter((recipe) => {
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
  console.log("Recettes filtrées :", recipesFiltrees);
}
