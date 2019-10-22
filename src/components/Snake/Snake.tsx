import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import { Tile, TileProps } from "components/Stage";
import { useSnakePosition } from "hooks";
import { getTileSize } from "store/tile/selectors";

export const snakeHeadKeyframes = ({ size }: TileProps) => keyframes`
  from {
    box-shadow: #fff 0 0 ${size}px;
  }
  50% {
    box-shadow: #fff 0 0 ${size / 3}px;
  }
  to {
    box-shadow: #fff 0 0 ${size}px;
  }
`;

const SnakeTile = styled(Tile)`
  position: absolute;
  background: #fff;
`;

const SnakeHeadTile = styled(SnakeTile)`
  animation: ${snakeHeadKeyframes} 1s ease-in-out infinite;
`;

export const Snake: React.FC = () => {
  const [x, y] = useSnakePosition();
  const size = useSelector(getTileSize);

  const left = size * x + x;
  const top = size * y + y;

  return (
    <SnakeHeadTile
      size={size}
      style={{
        left,
        top
      }}
    />
  );
};
