import React, { useState, useEffect, useMemo } from "react";
import recipeData from "../../state/state.json";
import CategoryTypeFilter from "../Filters/CategoryTypeFilter/CategoryTypeFilter.component.jsx";
import MenuTypeFilter from "../Filters/MenuTypeFilter/MenuTypeFilter.component.jsx";
import MealTypeFilter from "../Filters/MealTypeFilter/MealTypeFilter.component.jsx";
import DishTypeFilter from "../Filters/DishTypeFilter/DishTypeFilter.component.jsx";
import SearchFilter from "../Filters/SearchFilter/SearchFilter.component.jsx";
import RecipeCard from "../RecipeCard/RecipeCard.component.jsx";
import * as S from "./LayoutContainer.styles";

const FOOD_TILES = [
  { emoji: "🥗", bg: "linear-gradient(160deg,#3a2008,#7a4818)", w: 110, h: 130, mt: 0 },
  { emoji: "🍜", bg: "linear-gradient(160deg,#1e3010,#3a5820)", w: 100, h: 100, mt: 16 },
  { emoji: "🫐", bg: "linear-gradient(160deg,#3a2808,#7a5818)", w: 110, h: 150, mt: -12 },
  { emoji: "🥩", bg: "linear-gradient(160deg,#2a1808,#6a3818)", w: 100, h: 110, mt: 20 },
  { emoji: "🍋", bg: "linear-gradient(160deg,#2a1a08,#604020)", w: 110, h: 130, mt: -8 },
];

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
      if (mealType && recipe.meal !== mealType) return false;
      if (menuType && (menuType === "vegan" ? !recipe.vegan : recipe.vegan)) return false;
      if (dishType && recipe.type !== dishType) return false;
      if (categoryType) {
        if (categoryType === "favorite" && !favorites.includes(recipe.title)) return false;
        if (categoryType === "disliked" && !dislikes.includes(recipe.title)) return false;
        if (categoryType === "festive" && !recipe.isFestive) return false;
      }
      if (searchQuery) {
        const searchWords = searchQuery.toLowerCase().split(" ").filter(Boolean);
        const ingredientsList = Object.entries(recipe.ingredients)
          .flatMap(([key, value]) =>
            typeof value === "object" ? Object.keys(value) : [key]
          )
          .join(" ")
          .toLowerCase();
        return searchWords.every(
          (word) =>
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
        <S.HeaderInner>
          <S.Logo>
            healthy<em>taste</em>
          </S.Logo>
          <S.FiltersRow>
            <MealTypeFilter setMealType={setMealType} />
            <DishTypeFilter setDishType={setDishType} />
            <CategoryTypeFilter setCategoryType={setCategoryType} />
            <MenuTypeFilter setMenuType={setMenuType} />
            <SearchFilter setSearchQuery={setSearchQuery} />
          </S.FiltersRow>
        </S.HeaderInner>
      </S.HeaderStyles>

      <S.HeroSection>
        <S.HeroBg />
        <S.HeroContent>
          <S.HeroTitle>
            Смачно<br />та <em>корисно</em>
          </S.HeroTitle>
          <S.HeroSubtitle>
            Ваша особиста колекція рецептів здорового харчування
          </S.HeroSubtitle>
        </S.HeroContent>
        <S.HeroCards>
          <S.FoodGrid>
            {FOOD_TILES.map((tile) => (
              <S.FoodTile
                key={tile.emoji}
                $bg={tile.bg}
                $width={tile.w}
                $height={tile.h}
                $mt={tile.mt}
              >
                {tile.emoji}
              </S.FoodTile>
            ))}
          </S.FoodGrid>
        </S.HeroCards>
      </S.HeroSection>

      <S.MainContent>
        <S.GridHeader>
          <S.GridTitle>Всі рецепти</S.GridTitle>
          <S.GridCount>{filterRecipes.length} страв</S.GridCount>
        </S.GridHeader>
        <S.MasonryGrid>
          {filterRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </S.MasonryGrid>
      </S.MainContent>

      <S.FooterStyles>
        <strong>healthytaste</strong> · Medyanenko ©{new Date().getFullYear()}
      </S.FooterStyles>
    </S.LayoutStyles>
  );
};

export default LayoutContainer;
