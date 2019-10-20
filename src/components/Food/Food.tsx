import React from "react";
import styled from "styled-components";
import { flashing } from "styles";
import { Tile } from "components/Stage";
import { PositionTuple } from "types";

const FoodTile = styled(Tile)`
  position: absolute;
  animation: ${props => flashing(props.size)} 1500ms ease-in-out infinite;
  background: #77ff33;
`;

export interface FoodProps {
  readonly size: number;
  readonly position: PositionTuple;
}

export const Food: React.FC<FoodProps> = ({ size, position }) => {
  const [x, y] = position;
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
