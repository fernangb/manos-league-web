/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Container, ClubsBox } from './styles';

import { clubs } from '../../mock/clubs';

const Dashboard: React.FC = () => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <Container>
      {/* <ClubsBox> */}
      {clubs.map(club => (
        <Card>
          <CardBody>
            <CardImg top width="75%" src={club.image_url} alt="Logo" />
            <CardTitle>{club.name}</CardTitle>
            <p>{club.owner}</p>
          </CardBody>
        </Card>
      ))}
      {/* </ClubsBox> */}

      {/* <ClubsBox>
        {clubs.map(club => (
          <ClubCard>
            <img src={club.image_url} />
          </ClubCard>
        ))}
      </ClubsBox>
      <Ranking>
        {clubs.map(club => (
          <p>{club.name}</p>
        ))}
      </Ranking> */}
    </Container>
  );
};

export default Dashboard;
