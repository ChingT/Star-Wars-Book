import styled from "styled-components";

const primaryColor = "#ffe81f";
const textColor = "#f5f5f5";
const backgroundColor = "#1b1b1b";

export const Book = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1vw;
  margin: 1vw;
  width: 97vw;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  border: solid 4px ${primaryColor};
  border-radius: 5px;
  padding: 7%;
  gap: 1rem;
`;

export const Header = styled(Card)`
  background-color: ${primaryColor};
  color: ${backgroundColor};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.div`
  color: ${primaryColor};
`;

export const Details = styled.div`
  color: ${textColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  color: ${primaryColor};
  background-color: inherit;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-color: ${primaryColor};
  border-radius: 2px;
  text-transform: uppercase;
`;
