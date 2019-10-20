import styled from "styled-components";

export interface BoardProps {
  readonly rows: number;
  readonly columns: number;
  readonly tileSize: number;
}

export const Board = styled.div<BoardProps>`
  width: ${({ columns, tileSize }) => columns * tileSize + (columns - 1)}px;
  height: ${({ rows, tileSize }) => rows * tileSize + (rows - 1)}px;
  position: relative;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, ${props => props.tileSize}px);
  grid-template-columns: repeat(${props => props.columns}, ${props => props.tileSize}px);
  grid-gap: 1px;
`;
