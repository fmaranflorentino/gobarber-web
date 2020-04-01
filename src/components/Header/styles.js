import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  border-left: 1px solid #eee;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      color: #333;
      display: block;
    }

    a {
      font-size: 12px;
      color: #999;

      display: block;
      margin-top: 2px;
    }
  }

  img {
    border-radius: 50%;
    height: 32px;
  }
`;
