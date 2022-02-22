import styled from "styled-components";

export const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: blue;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 20s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(1200px, 500px);
    }
  }
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: pink;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 20s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(1200px, -300px);
    }
  }
`;

export const Rectangle = styled.div`
  width: 100px;
  height: 50px;
  background-color: green;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rectangle 20s linear alternate infinite;

  @keyframes rectangle {
    to {
      transform: translate(1200px, -100px);
    }
  }
`;
