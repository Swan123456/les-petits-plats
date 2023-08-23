export function searchRecipesWithLoops(data) {
  console.log(data);
  const filteredRecipes = [];

  for (const recipe of recipes) {
    const ingredientsMatch = selectedIngredient === recipe.ingredients.some(ingredient => ingredient.ingredient === selectedIngredient);
    const applianceMatch = selectedAppliance === "Sélectionnez un appareil" || recipe.appliance === selectedAppliance;
    const ustensilMatch = selectedUstensil === "Sélectionnez un ustensile" || recipe.ustensils.includes(selectedUstensil);

    if (ingredientsMatch && applianceMatch && ustensilMatch) {
      filteredRecipes.push(recipe);
    }
  }
  return filteredRecipes;
}
