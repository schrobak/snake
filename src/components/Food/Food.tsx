import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import { useFoodPosition } from "hooks";
import { Tile, TileProps } from "components/Stage";
import { getTileSize } from "store/tile/selectors";

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
  const size = useSelector(getTileSize);

  return (
    <FoodTile
      size={size}
      style={{
        left: size * x + x,
        top: size * y + y
      }}
    />
  );
};
