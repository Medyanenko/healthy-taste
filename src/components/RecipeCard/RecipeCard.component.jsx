import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Card, Tooltip, Tag } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  DislikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";
import { mealTypeTranslations, dishTypeTranslations } from "../../common/utils/cardTagsTranslation";
import * as S from "./RecipeCard.styles";

const RecipeCard = ({ recipe }) => {
  const {
    title,
    nutritional_info,
    image,
    vegan,
    meal,
    type,
    ingredients,
    instructions,
  } = recipe;

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

    const updatedFavorites = isFavorite
      ? favoriteRecipes.filter((item) => item !== title)
      : [...favoriteRecipes, title];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  }, [isFavorite, title, favoriteRecipes, isDisliked]);

  const handleToggleDislike = useCallback(() => {
    if (isFavorite) return;

    const updatedDislikes = isDisliked
      ? dislikedRecipes.filter((item) => item !== title)
      : [...dislikedRecipes, title];

    localStorage.setItem("dislikes", JSON.stringify(updatedDislikes));
    setIsDisliked(!isDisliked);
  }, [isDisliked, title, dislikedRecipes, isFavorite]);

  return (
    <S.StyledCard
      cover={
        image ? (
          <img
            alt={title}
            src={image}
            style={{ height: 200, objectFit: "fill", width: "100%" }}
          />
        ) : null
      }
    >
      <Tooltip title={isFavorite ? "Приготую ще раз" : "Не вразило"}>
        <S.FavoriteButton
          icon={
            isFavorite ? (
              <HeartFilled style={{ color: "#ff5964" }} />
            ) : (
              <HeartOutlined />
            )
          }
          type="text"
          onClick={handleToggleFavorite}
          right="30px"
        />
      </Tooltip>
      <Tooltip title={isDisliked ? "Гидота яка" : " Даю ще один шанс"}>
        <S.FavoriteButton
          icon={
            isDisliked ? (
              <DislikeFilled style={{ color: "#35a7ff" }} />
            ) : (
              <DislikeOutlined />
            )
          }
          type="text"
          onClick={handleToggleDislike}
        />
      </Tooltip>

      <Card.Meta
        title={<S.CardTitle>{title}</S.CardTitle>}
        description={
          <S.CardDescription>КБЖУ: {nutritional_info}</S.CardDescription>
        }
      />
      <S.TagsContainer>
        <Tag color="cyan">{mealTypeTranslations[meal] || meal}</Tag>
        <Tag color={"green"}>
          {vegan ? "Веган" : "Класичне"}
        </Tag>
        <Tag color="gold">{dishTypeTranslations[type] || type}</Tag>
      </S.TagsContainer>
      <S.InstructionsContainer>
        <h4 style={{ textTransform: "uppercase", margin: "8px 0 5px" }}>
          Інгредієнти
        </h4>
        <IngredientList ingredientsObj={ingredients} />

        <h4 style={{ textTransform: "uppercase", margin: "8px 0 5px" }}>
          Приготування
        </h4>
        <InstructionsList instructions={instructions} />
      </S.InstructionsContainer>
    </S.StyledCard>
  );
};

const IngredientList = ({ ingredientsObj, level = 0 }) => (
  <div style={{ marginLeft: level * 10 }}>
    {Object.entries(ingredientsObj).map(([key, value]) =>
      typeof value === "object" ? (
        <div key={key}>
          <strong>{key}:</strong>
          <IngredientList ingredientsObj={value} level={level + 1} />
        </div>
      ) : (
        <div key={key} style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{key}:</span> {value}
        </div>
      )
    )}
  </div>
);

const InstructionsList = ({ instructions }) => (
  <div>
    {instructions.map((instruction, index) => (
      <p key={index} style={{ margin: "5px 0" }}>{instruction}</p>
    ))}
  </div>
);

export default RecipeCard;
