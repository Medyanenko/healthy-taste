import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 16px rgba(42, 31, 23, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 48px rgba(42, 31, 23, 0.14);
  }

  &:hover .card-actions {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover .card-overlay {
    opacity: 1;
  }

  &:hover .card-emoji-inner {
    transform: scale(1.08) translateY(-4px);
  }
`;


interface CardImageProps {
  $gradient: string;
  $hasImage: boolean;
}

export const CardImage = styled.div<CardImageProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  background: ${(p) => p.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${CardWrapper}:hover & {
    transform: scale(1.06);
  }
`;

export const CardEmoji = styled.div`
  font-size: 72px;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));
  user-select: none;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(42, 20, 10, 0.5) 100%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
`;

interface BadgeProps {
  $festive?: boolean;
}

export const CardBadge = styled.div<BadgeProps>`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  color: ${(p) => (p.$festive ? "#b5603a" : "#c05050")};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const ActionButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 6px;
  z-index: 5;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.25s, transform 0.25s;
`;

interface ActionBtnProps {
  $active?: boolean;
}

export const ActionBtn = styled.button<ActionBtnProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${(p) => (p.$active ? "rgba(255, 235, 235, 0.95)" : "rgba(255, 255, 255, 0.92)")};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s, background 0.15s;

  &:hover {
    transform: scale(1.15);
    background: #fff;
  }
`;

export const CardBody = styled.div`
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

export const CardMeal = styled.span`
  font-size: 10.5px;
  font-weight: 500;
  color: var(--terra);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Dot = styled.span`
  color: var(--border);
  font-size: 12px;
`;

export const CardType = styled.span`
  font-size: 10.5px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardTitle = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-size: 17px;
  font-weight: 600;
  color: var(--brown);
  line-height: 1.25;
  margin-bottom: 6px;
`;

export const CardKcal = styled.div`
  font-size: 11.5px;
  color: var(--muted);
  margin-bottom: 10px;
  line-height: 1.4;
`;

export const Tags = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

interface TagProps {
  $vegan?: boolean;
  $muted?: boolean;
}

export const Tag = styled.span<TagProps>`
  font-size: 10.5px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 100px;
  border: 1px solid;
  color: ${(p) => (p.$vegan ? "var(--olive)" : p.$muted ? "var(--muted)" : "var(--terra)")};
  border-color: ${(p) => (p.$vegan ? "#c8d8a8" : p.$muted ? "var(--border)" : "#e8c8b8")};
  background: ${(p) => (p.$vegan ? "#f0f5e8" : p.$muted ? "#faf7f5" : "#fdf0e8")};
`;


export const Details = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--muted);
  margin: 10px 0 6px;
`;

export const IngredientRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text);
  padding: 2px 0;
  line-height: 1.4;
`;

export const IngredientKey = styled.span`
  color: var(--muted);
  margin-right: 8px;
  flex-shrink: 0;
`;

export const InstructionStep = styled.p`
  font-size: 12px;
  color: var(--text);
  margin: 4px 0;
  line-height: 1.5;
`;
