import React, { useState } from "react";
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

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleToggleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <S.StyledCard
      cover={
        image ? (
          <img
            alt={title}
            src={image}
            style={{ height: 200, objectFit: "cover", width: "100%" }}
          />
        ) : null
      }
    >
      <Tooltip title={isFavorite ? "Не вразило" : "Приготуй мене ще раз"}>
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
      <Tooltip title={isDisliked ? "Дай ще один шанс" : "Гидота яка"}>
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
        <S.TagsContainer>
          <Tag color="cyan">{mealTypeTranslations[meal] || meal}</Tag>
          <Tag color={"green"}>
            {vegan ? "Веган" : "Класичне"}
          </Tag>
          <Tag color="gold">{dishTypeTranslations[type] || type}</Tag>
        </S.TagsContainer>
      </S.TagsContainer>
      <S.InstructionsContainer>
        <h4 style={{ textTransform: "uppercase", margin: "8px 0 5px" }}>
          Інгредієнти
        </h4>
        {renderIngredients(ingredients)}

        <h4 style={{ textTransform: "uppercase", margin: "8px 0 5px" }}>
          Приготування
        </h4>
        <p style={{ margin: "5px 0" }}>{instructions.join(" ")}</p>
      </S.InstructionsContainer>
    </S.StyledCard>
  );
};

const renderIngredients = (ingredientsObj, level = 0) => {
  return (
    <div style={{ marginLeft: level * 10 }}>
      {Object.entries(ingredientsObj).map(([key, value]) =>
        typeof value === "object" ? (
          <div key={key}>
            <strong>{key}:</strong>
            {renderIngredients(value, level + 1)}
          </div>
        ) : (
          <div
            key={key}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{key}:</span> {value}
          </div>
        )
      )}
    </div>
  );
};

export default RecipeCard;
