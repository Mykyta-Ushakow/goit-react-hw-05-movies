import { styled } from 'styled-components';
import Reviews from './Reviews/Reviews';

export const AppStyled = styled('div')`
  font-size: 30px;
  color: #010101;
  background-color: #c2baba;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 15px;
  padding-top: 60px;
  padding-left: 15px;
  position: relative;

  header {
    display: flex;
    align-items: center;
    height: 49px;
    border-bottom: 1px black solid;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #c2baba;
    width: 100%;
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

  button {
    width: 140px;
    height: 100%;
    font-size: 20px;
    border-radius: 15px;
  }

  input {
    border-radius: 15px;
    padding-left: 10px;
    height: 100%;
    font-size: 20px;
    width: 360px;
  }

  .movie-details-pic {
    height: 100vh;
    object-fit: contain;
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

  .movie-details-info > * {
    margin-top: 0;
  }

  .genres-list {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .movie-detail-switcher {
    height: 49px;
    max-width: 95vw;
  }

  .cast-wrap {
    border-top: 1px solid #000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cast-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    margin-right: 15px;
    padding: 0;

    .cast-card {
      width: 300px;
      height: 450px;
      padding: 0 5px 5px 5px;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .cast-text {
        font-size: 22px;
        margin: 0;
        padding: 0;
        text-align: justify;
      }
      .cast-name {
        font-size: 26px;
        margin: 0;
        padding: 0;
        text-align: justify;
      }
      .cast-placeholder {
        width: 100%;
        height: 300px;
        text-align: center;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .reviews {
    border-top: 1px solid black;
    margin-right: 15px;
    h2 {
      text-align: center;
    }
  }
`;
