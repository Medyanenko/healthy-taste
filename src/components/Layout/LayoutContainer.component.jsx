import React, { useState, useEffect, useMemo } from "react";
import recipeData from "../../state/state.json";
import CategoryTypeFilter from "../Filters/CategoryTypeFilter/CategoryTypeFilter.component.jsx";
import MenuTypeFilter from "../Filters/MenuTypeFilter/MenuTypeFilter.component.jsx";
import MealTypeFilter from "../Filters/MealTypeFilter/MealTypeFilter.component.jsx";
import DishTypeFilter from "../Filters/DishTypeFilter/DishTypeFilter.component.jsx";
import SearchFilter from "../Filters/SearchFilter/SearchFilter.component.jsx";
import RecipeCard from "../RecipeCard/RecipeCard.component.jsx";
import * as S from "./LayoutContainer.styles";

const LayoutContainer = () => {
  const [categoryType, setCategoryType] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [dishType, setDishType] = useState(null);
  const [mealType, setMealType] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shuffledRecipes, setShuffledRecipes] = useState([]);

  useEffect(() => {
    const shuffled = [...recipeData].sort(() => Math.random() - 0.5);
    setShuffledRecipes(shuffled);
  }, []);

  const filterRecipes = useMemo(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const dislikes = JSON.parse(localStorage.getItem("dislikes")) || [];
  
    return shuffledRecipes.filter((recipe) => {
      if (mealType && recipe.meal !== mealType) {
        return false;
      }
      if (menuType && (menuType === "vegan" ? !recipe.vegan : recipe.vegan)) {
        return false;
      }
      if (dishType && recipe.type !== dishType) {
        return false;
      }
      if (categoryType) {
        if (categoryType === "favorite" && !favorites.includes(recipe.title)) {
          return false;
        }
        if (categoryType === "disliked" && !dislikes.includes(recipe.title)) {
          return false;
        }
        if (categoryType === "festive" && !recipe.isFestive) {
          return false;
        }
      }

      if (searchQuery) {
        const searchWords = searchQuery.toLowerCase().split(" ").filter(Boolean);

        const ingredientsList = Object.entries(recipe.ingredients)
          .flatMap(([key, value]) =>
            typeof value === "object" ? Object.keys(value) : [key]
          )
          .join(" ")
          .toLowerCase();

        return searchWords.every((word) =>
          recipe.title.toLowerCase().includes(word) ||
          ingredientsList.includes(word)
        );
      }
      return true;
    });
  }, [shuffledRecipes, categoryType, menuType, dishType, mealType, searchQuery]);

  return (
    <S.LayoutStyles>
      <S.HeaderStyles>
        <S.WrapperContent>
          <MealTypeFilter setMealType={setMealType} />
          <DishTypeFilter setDishType={setDishType} />
          <CategoryTypeFilter setCategoryType={setCategoryType} />
          <MenuTypeFilter setMenuType={setMenuType} />
          <SearchFilter setSearchQuery={setSearchQuery} />
        </S.WrapperContent>
      </S.HeaderStyles>
      <S.WrapperContent>
        <div className="wrapper-recipe-card">
          {filterRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </S.WrapperContent>
      <S.FooterStyles style={{ textAlign: "center" }}>
        Medyanenko ©{new Date().getFullYear()}
      </S.FooterStyles>
    </S.LayoutStyles>
  );
};

export default LayoutContainer;
