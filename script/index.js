// import Class JS
import Api from './api/api.js'
import RecipeTemplate from './factory/recipesTemplate.js'
import Recipe from './models/recipe.js'
import FilterSelectTemplate from './factory/filterTemplate.js'
import { createIngredientsFilter, createAppliancesFilter, createUstensilsFilter } from './factory/filterTemplate.js';

async function init () {
  // Node HTML dans lequel on insert la list des recettes
  const $recipesWrapper = document.querySelector('#recipe_section')
  const $filterWrapper = document.querySelector('#filter')

  // Instance de la Class API
  const data = new Api('../data/recipes.json')

  // Récupère les datas des recipes
  const recipes = await data.getRecipes()
  const tabRecipes = []

  // Création des objets recipe et insertion dans un tableau
  recipes.forEach(element => {
    const recipe = new Recipe(element)
    tabRecipes.push(recipe)
  })
  recipes.templateFilter = new FilterSelectTemplate()

  // Creation des Card et insertion dans le DOM
  tabRecipes.forEach(element => {
    const recipeSTemplate = new RecipeTemplate(element)
    $recipesWrapper.appendChild(recipeSTemplate.createRecipeCard())
  })

  // Insertion des filtre dans le DOM
  $filterWrapper.appendChild(recipes.templateFilter.createFilter(tabRecipes))
}

init()
