"use strict";

function init() {
 document.getElementById("meal-btn").addEventListener("click", fetchMeal);
}

function fetchMeal() {
  let food = document.getElementById("food-input").value;
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food;
  fetch(url)
    .then(statusCheck)
    .then(resp => resp.json())
    .then(showMeals)
    .catch(handleError);
}


function showMeals(data) {
  let mealOutput = document.getElementById("meal-output");
  mealOutput.innerHTML = "";

  if (data.meals === null) {
    mealOutput.textContent = "Sorry, this is not on the menu!";
    return;
  }

  for (let i=0; i< data.meals.length; i++) {
    let meal = data.meals[i];
    let name = document.createElement("h3");
    name.textContent = meal.strMeal;

    let category = document.createElement("p");
    category.textContext = "Category: " + meal.strCategory;

    let img = document.createElement("img");
    img.src = meal.strMealThumn;
    img.alt = meal.strMeal;

    mealOutput.appendChild(name);
    mealOutput.appendChild(category);
    mealOutput.appendChild(img);
  

  }
}

async function statusCheck(res) {
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res;
}

function handleError(err) {
  console.error("Something went wrong:", err);
  document.getElementById("output").textContent =
    "The kitchen is closed! (Error loading data)";
}

init();
