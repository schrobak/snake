import React from "react";
import styled from "styled-components";
import { flashing } from "styles";
import { Tile } from "components/Stage";
import { useFoodPosition, useTileSize } from "hooks";

const FoodTile = styled(Tile)`
  position: absolute;
  animation: ${props => flashing(props.size)} 1500ms ease-in-out infinite;
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
