import React from "react";
import styled from "styled-components";
import { flashing } from "../styles";
import { Tile } from "../Stage";

const FoodTile = styled(Tile)`
  position: absolute;
  animation: ${props => flashing(props.size)} 1500ms ease-in-out infinite;
  background: #77ff33;
`;

export interface FoodProps {
  readonly size: number;
  readonly position: [number, number];
}

export const Food: React.FC<FoodProps> = ({ size, position }) => {
  return <FoodTile size={size} />;
};
