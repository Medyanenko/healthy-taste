import React, { useState } from 'react';
import recipeData from './../../state/state.json';
import CategoryTypeFilter from '../Filters/CategoryTypeFilter/CategoryTypeFilter.component.jsx';
import MenuTypeFilter from '../Filters/MenuTypeFilter/MenuTypeFilter.component.jsx';
import MealTypeFilter from '../Filters/MealTypeFilter/MealTypeFilter.component.jsx';
import DishTypeFilter from '../Filters/DishTypeFilter/DishTypeFilter.component.jsx';
import SearchFilter from '../Filters/SearchFilter/SearchFilter.component.jsx';
import RecipeCard from './../../components/RecipeCard/RecipeCard.component.jsx';
import * as S from './LayoutContainer.styles';

const LayoutContainer = () => {
    const [categoryType, setCategoryType] = useState(null);
    const [menuType, setMenuType] = useState(null);
    const [dishType, setDishType] = useState(null);
    const [mealType, setMealType] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <S.LayoutStyles>
            <S.HeaderStyles>
                <S.WrapperContent>
                    <CategoryTypeFilter setCategoryType={setCategoryType} />
                    <MealTypeFilter setMealType={setMealType} />
                    <DishTypeFilter setDishType={setDishType} />
                    <MenuTypeFilter setMenuType={setMenuType} />
                    <SearchFilter setSearchQuery={setSearchQuery} />
                </S.WrapperContent>
            </S.HeaderStyles>
            <S.WrapperContent>
                <div className="wrapper-recipe-card">
                    {recipeData
                        .filter((recipe) => {
                            if (mealType && recipe.meal !== mealType) {
                                return false;
                            }
                            if (
                                menuType &&
                                (menuType === 'vegan' ? !recipe.vegan : recipe.vegan)
                            ) {
                                return false;
                            }
                            if (dishType && recipe.type !== dishType) {
                                return false;
                            }
                            if (categoryType) {
                                if (categoryType === 'favorite' && !recipe.isFavorite) {
                                    return false;
                                }
                                if (categoryType === 'disliked' && !recipe.isDisliked) {
                                    return false;
                                }
                                if (categoryType === 'festive' && !recipe.isFestive) {
                                    return false;
                                }
                            }
                            if (
                                searchQuery &&
                                !recipe.title
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase())
                            ) {
                                return false;
                            }
                            return true;
                        })
                        .map((recipe, index) => (
                            <RecipeCard key={index} recipe={recipe} />
                        ))}
                </div>
            </S.WrapperContent>
            <S.FooterStyles style={{ textAlign: 'center' }}>
                Medyanenko Design ©{new Date().getFullYear()}
            </S.FooterStyles>
        </S.LayoutStyles>
    );
}

export default LayoutContainer;
