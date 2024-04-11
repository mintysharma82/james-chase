import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #e8e8e8;
  background-color: white;
  color: #067b93;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

//Main Card
export const Card = styled.article`
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  h2 {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;

//Card Details
export const CardDetails = styled.div`
  padding: 0 2rem;
  width: 50%;
`;

export const Location = styled.p`
  color: #666;
  font-size: 1.4rem;
`;

export const List = styled.ul`
  li::marker {
    color: #e10a0a;
    font-size: 2.6rem;
  }
  li {
    line-height: 2rem;
    padding-left: 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

export const Price = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  span {
    font-size: 2rem;
  }
`;

//Card Actions
export const CardActions = styled.div`
  padding: 1.7rem 2rem;
  width: 50%;
  background-color: #f5f5f5;
`;
