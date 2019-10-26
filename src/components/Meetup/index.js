import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Content,
  Title,
  Info,
  DateView,
  Location,
  Owner,
  ButtonSubscription,
  Text,
} from './styles';

import logo from '~/assets/picture-example.png';

export default function Meetup() {
  return (
    <Container>
      <Image source={logo} />
      <Content>
        <Title>Natal</Title>
        <Info>
          <DateView>
            <Icon name="event" size={18} color="#999" />
            <Text>26 de outubro</Text>
          </DateView>
          <Location>
            <Icon name="location-on" size={18} color="#999" />
            <Text>Em todo o mundo</Text>
          </Location>
          <Owner>
            <Icon name="person" size={18} color="#999" />
            <Text>Organizador: Deus, o soberano</Text>
          </Owner>
        </Info>
        <ButtonSubscription onPress={() => {}}>
          Realizar inscrição
        </ButtonSubscription>
      </Content>
    </Container>
  );
}
