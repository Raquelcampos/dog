import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;
export const Figure = styled.figure`
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
`;
export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  object-fit: contain;
  filter: drop-shadow(3px 3px 6px #000);
`;
