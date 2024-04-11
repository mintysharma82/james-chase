import styled from "styled-components";

export const FilterContainer = styled.aside`
  width: 20%;
  h2 {
    margin-bottom: 4rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  ul {
    list-style-type: none;
    padding: 2rem 0;
  }
  li {
    margin-bottom: 1rem;
  }
  input[type="checkbox"] {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    border: 1px solid #d9d9d9;
  }
  label {
    font-size: 1.4rem;
    position: relative;
    top: -4px;
  }
`;
