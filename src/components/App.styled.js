import { styled } from 'styled-components';

export const AppStyled = styled('div')`
  font-size: 30px;
  color: #010101;
  background-color: #c2baba;
  height: 100%;
  min-height: 100vh;

  header {
    display: flex;
    align-items: center;
    height: 49px;
    border-bottom: 1px black solid;
  }

  header > nav {
    display: flex;
    gap: 20px;
    padding: 0;
    margin-left: 26px;
  }

  nav > a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &.active {
      color: blue;
    }
  }

  nav > a:hover {
    text-decoration: underline;
  }

  .movie-details-pic {
    width: 100%;
    height: 100%;
  }

  .movie-list > li {
    a {
      color: blue;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .movie-details-wrap {
    display: flex;
    gap: 30px;
    padding: 20px;
  }

  .genres-list {
    display: flex;
    gap: 20px;
    list-style: none;
  }
`;
