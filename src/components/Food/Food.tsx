import React from "react";
import styled, { keyframes } from "styled-components";
import { Tile, TileProps } from "components/Stage";
import { useFoodPosition, useTileSize } from "hooks";

export const foodKeyframes = ({ size }: TileProps) => keyframes`
  from {
    transform: scale(1.0);
    box-shadow: #77FF33 0 0 ${size}px;
  }
  50% {
    transform: scale(0.5);
    box-shadow: #77FF33 0 0 ${size / 3}px;
  }
  to {
    transform: scale(1.0);
    box-shadow: #77FF33 0 0 ${size}px;
  }
`;

const FoodTile = styled(Tile)`
  position: absolute;
  animation: ${foodKeyframes} 1s ease-in-out infinite;
  background: #77ff33;
`;

export const Food: React.FC = () => {
  const [x, y] = useFoodPosition();
  const size = useTileSize();

  const left = size * x + x;
  const top = size * y + y;

  return (
    <FoodTile
      size={size}
      style={{
        left,
        top
      }}
    />
  );
};
