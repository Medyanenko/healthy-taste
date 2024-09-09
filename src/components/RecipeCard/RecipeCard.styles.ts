import styled from 'styled-components';
import { Card, Button, ButtonProps } from 'antd';

interface FavoriteButtonProps extends ButtonProps {
  right?: string;
}

export const StyledCard = styled(Card)`
  width: 300px;
  margin: 16px auto;
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  line-height: normal;
`;

export const FavoriteButton = styled(Button)<FavoriteButtonProps>`
  position: absolute;
  top: 0;
  right: ${(props) => props.right || '5px'};
  background: transparent;
  border: none;
  z-index: 1;
`;

export const CardTitle = styled.div`
  text-transform: uppercase;
  white-space: break-spaces;
  text-align: center;
  margin: 10px 0 0;
`;

export const CardDescription = styled.div`
  text-align: center;
`;

export const TagsContainer = styled.div`
  text-align: center;
  margin: 8px 0;
  span{
    min-width: 60px;
    text-align: center;
    margin: 0 2px;
  }
`;

export const InstructionsContainer = styled.div`
  text-align: justify;
`;
