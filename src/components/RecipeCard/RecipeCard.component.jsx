import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Tooltip } from "antd";
import { mealTypeTranslations, dishTypeTranslations } from "../../common/utils/cardTagsTranslation";
import * as S from "./RecipeCard.styles";

const TYPE_EMOJI = {
  snack: "🥙",
  sandwich: "🥪",
  salad: "🥗",
  soup: "🍲",
  main: "🍽️",
  sweet: "🍰",
};

const TYPE_GRADIENT = {
  salad:    "radial-gradient(ellipse at 30% 30%, #e8f5d0, #96c97a 60%, #5c8a40)",
  soup:     "radial-gradient(ellipse at 60% 60%, #fdf0d0, #f0c860 60%, #c09020)",
  main:     "radial-gradient(ellipse at 30% 30%, #f7e2c4, #d4956a 60%, #b5603a)",
  snack:    "radial-gradient(ellipse at 40% 60%, #f4e8d4, #c8a060 60%, #8a6030)",
  sandwich: "radial-gradient(ellipse at 30% 70%, #f8f0d0, #e8d070 60%, #b89020)",
  sweet:    "radial-gradient(ellipse at 50% 30%, #fce8e8, #f0a0a0 60%, #c05050)",
};

const RecipeCard = ({ recipe }) => {
  const { title, nutritional_info, image, vegan, meal, type, isFestive, ingredients, instructions } = recipe;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const favoriteRecipes = useMemo(() => JSON.parse(localStorage.getItem("favorites")) || [], []);
  const dislikedRecipes = useMemo(() => JSON.parse(localStorage.getItem("dislikes")) || [], []);

  useEffect(() => {
    setIsFavorite(favoriteRecipes.includes(title));
    setIsDisliked(dislikedRecipes.includes(title));
  }, [title, favoriteRecipes, dislikedRecipes]);

  const handleToggleFavorite = useCallback(() => {
    if (isDisliked) return;
    const updated = isFavorite
      ? favoriteRecipes.filter((i) => i !== title)
      : [...favoriteRecipes, title];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  }, [isFavorite, title, favoriteRecipes, isDisliked]);

  const handleToggleDislike = useCallback(() => {
    if (isFavorite) return;
    const updated = isDisliked
      ? dislikedRecipes.filter((i) => i !== title)
      : [...dislikedRecipes, title];
    localStorage.setItem("dislikes", JSON.stringify(updated));
    setIsDisliked(!isDisliked);
  }, [isDisliked, title, dislikedRecipes, isFavorite]);

  const gradient = TYPE_GRADIENT[type] || TYPE_GRADIENT.main;
  const emoji    = TYPE_EMOJI[type]    || "🍽️";

  return (
    <S.CardWrapper>
      <S.CardImage $gradient={gradient} $hasImage={!!image}>
        {image ? (
          <S.CardImg src={image} alt={title} />
        ) : (
          <S.CardEmoji className="card-emoji-inner">{emoji}</S.CardEmoji>
        )}
        <S.CardOverlay className="card-overlay" />

        {isFavorite && <S.CardBadge>❤️ Улюблене</S.CardBadge>}
        {!isFavorite && isFestive && <S.CardBadge $festive>🎉 Святкове</S.CardBadge>}
        {isDisliked && <S.CardBadge style={{ color: "#3a7abf" }}>👎 Не смачно</S.CardBadge>}

        <S.ActionButtons className="card-actions">
          <Tooltip title={isFavorite ? "Приготую ще раз" : "Додати в улюблені"}>
            <S.ActionBtn $active={isFavorite} onClick={handleToggleFavorite}>
              {isFavorite ? "❤️" : "🤍"}
            </S.ActionBtn>
          </Tooltip>
          <Tooltip title={isDisliked ? "Дати ще один шанс" : "Не сподобалось"}>
            <S.ActionBtn $active={isDisliked} onClick={handleToggleDislike}>
              {isDisliked ? "👎" : "🖐"}
            </S.ActionBtn>
          </Tooltip>
        </S.ActionButtons>
      </S.CardImage>

      <S.CardBody>
        <S.CardMeta>
          <S.CardMeal>{mealTypeTranslations[meal] || meal}</S.CardMeal>
          <S.Dot>·</S.Dot>
          <S.CardType>{dishTypeTranslations[type] || type}</S.CardType>
        </S.CardMeta>

        <S.CardTitle>{title}</S.CardTitle>
        <S.CardKcal>КБЖУ: {nutritional_info}</S.CardKcal>

        <S.Tags>
          <S.Tag $vegan={vegan}>{vegan ? "🌱 Веган" : "🥩 Класичне"}</S.Tag>
        </S.Tags>

        <S.Details>
          <S.SectionTitle>Інгредієнти</S.SectionTitle>
          <IngredientList ingredientsObj={ingredients} />
          <S.SectionTitle>Приготування</S.SectionTitle>
          <InstructionsList instructions={instructions} />
        </S.Details>
      </S.CardBody>
    </S.CardWrapper>
  );
};

const IngredientList = ({ ingredientsObj, level = 0 }) => (
  <div style={{ marginLeft: level * 10 }}>
    {Object.entries(ingredientsObj).map(([key, value]) =>
      typeof value === "object" ? (
        <div key={key}>
          <S.IngredientKey style={{ display: "block", marginTop: 4 }}><strong>{key}:</strong></S.IngredientKey>
          <IngredientList ingredientsObj={value} level={level + 1} />
        </div>
      ) : (
        <S.IngredientRow key={key}>
          <S.IngredientKey>{key}:</S.IngredientKey>
          <span>{value}</span>
        </S.IngredientRow>
      )
    )}
  </div>
);

const InstructionsList = ({ instructions }) => (
  <div>
    {instructions.map((step, i) => (
      <S.InstructionStep key={i}>{i + 1}. {step}</S.InstructionStep>
    ))}
  </div>
);

export default RecipeCard;
