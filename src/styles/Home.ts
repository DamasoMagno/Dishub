import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  padding: 9rem 0;
  background-color: #202024;

  h1 {
    font-size: 2rem;
    line-height: 1.7;
    max-width: 500px;
    text-align: center;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 2rem;
    background-color: #121214;
    border: 1px solid transparent;
    color: #fff;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    padding: 0.25rem 0.5rem;
    padding-right: 0.75rem;
    transition: border-color .25s;

    input {
      border: 0;
      background-color: transparent;
      outline: 0;
      color: white;
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 0.5rem;
      flex: 1;
    }

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }

    &:focus-within {
      border-color: #00b37e;
    }
  }

  .tags {
    margin-top: 1.5rem;
    max-width: 500px;
    text-align: center;

    strong {
      font-size: 1rem;
      font-weight: 500;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      list-style: none;

      li {
        background-color: #121214;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: .875rem;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

export const ServersListBase = styled.section`
  padding: 5rem 1rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1244px;
    margin: 0 auto 1.5rem;

    strong {
      font-size: 1.5rem;
      color: white;
    }

    button {
      background-color: transparent;
      border: 1px solid #00b37e;
      color: #00b37e;
      border-radius: 8px;
      height: 3rem;
      padding: 0 1rem;
    }
  }

  .servers {
    max-width: 1244px;
    margin: 1rem auto 0;

    column-count: 1;
    column-gap: 1rem;

    @media (min-width: 724px) and (max-width: 1024px) {
      column-count: 2;
    }

    @media (min-width: 1024px) {
      column-count: 3;
    }

    > div {
      margin-bottom: 1rem;
    }
  }
`;

export const PopularServersList = styled(ServersListBase)``;

export const PopularReviewsList = styled(ServersListBase)`
  background-color: rgba(32, 32, 36, 0.5);
`;