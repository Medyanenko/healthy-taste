import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const LayoutStyles = styled(Layout)`
  background: var(--cream);
  min-height: 100vh;
`;


export const HeaderStyles = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(253, 248, 243, 0.95) !important;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 32px !important;
  height: auto !important;
  line-height: normal !important;

  @media (max-width: 768px) {
    padding: 0 16px !important;
  }
`;

export const HeaderInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 68px;
  flex-wrap: wrap;
  padding: 10px 0;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 12px 0;
  }
`;

export const Logo = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--brown);
  white-space: nowrap;
  letter-spacing: 0.5px;
  flex-shrink: 0;

  em {
    color: var(--terra);
    font-style: italic;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 6px;
    width: 100%;
    flex: none;
  }
`;


export const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 260px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1208 0%, #4a3018 55%, #7a5028 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 65% 50%, rgba(200, 130, 50, 0.4) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 10% 80%, rgba(180, 100, 30, 0.2) 0%, transparent 60%);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 44px 48px 44px 56px;
  max-width: 52%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 32px 24px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-size: 52px;
  font-weight: 600;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 12px;

  em {
    color: #f5d09a;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
  max-width: 420px;
  font-weight: 300;
`;

export const HeroCards = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 40px;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FoodGrid = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  transform: rotate(-2deg);
`;

interface FoodTileProps {
  $bg: string;
  $height: number;
  $width: number;
  $mt?: number;
}

export const FoodTile = styled.div<FoodTileProps>`
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  margin-top: ${(p) => p.$mt ?? 0}px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: ${(p) => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  flex-shrink: 0;
`;

export const MainContent = styled(Content)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 28px 60px;

  @media (max-width: 768px) {
    padding: 24px 16px 48px;
  }
`;

export const GridHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 24px;
`;

export const GridTitle = styled.span`
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 500;
  color: var(--brown);
`;

export const GridCount = styled.span`
  font-size: 13px;
  color: var(--muted);
`;

export const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterStyles = styled(Footer)`
  background: var(--brown) !important;
  color: rgba(255, 255, 255, 0.45) !important;
  text-align: center;
  padding: 28px !important;
  font-size: 13px;
  letter-spacing: 0.5px;

  strong {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
  }
`;
