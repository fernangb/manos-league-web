import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ClubsBox = styled.div`
  display: flex;
  background-color: blue;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  width: 500px;
  height: 600px;
  margin-left: 50px;
  margin-top: 150px;
`;

export const ClubCard = styled.div`
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  background-color: gray;
  margin: 10px;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Ranking = styled.div`
  display: flex;
  margin-left: 500px;
  width: 200px;
  flex-direction: column;
  background-color: gray;
  align-items: center;
  margin-top: 150px;

  p {
    display: flex;
    flex: 1;
  }

  p + p {
    margin: 10px;
  }
`;
