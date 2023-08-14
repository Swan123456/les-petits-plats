// import Class JS
import Api from './api/api.js'
import RecipeTemplate from './factory/recipesTemplate.js'
import Recipe from './models/recipe.js'

// Variables de pagination
const recettesParPage = 1;
let pageCourante = 1;

async function init () {
  // Node HTML dans lequel on insert la list des recettes
  const $recipesWrapper = document.querySelector('#recipes_section')

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

  // Creation des Card et insertion dans le DOM
  tabRecipes.forEach(element => {
    const recipeSTemplate = new RecipeTemplate(element)
    $recipesWrapper.appendChild(recipeSTemplate.createRecipeCard())
  })
}

init()
