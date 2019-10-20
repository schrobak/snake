import styled from "styled-components";

export interface TileProps {
  readonly size: number;
}

export const Tile = styled.div<TileProps>`
  background: rgba(0, 0, 0, 0.15);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  ::before {
    bottom: 0;
    content: "";
    height: 0;
    left: 0;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    transition: opacity 300ms;
  }
`;
