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

import image from '~/assets/picture-example.png';

export default function Subscription({data}) {
  return (
    <Container>
      <Image source={image} />
      <Content>
        <Title>TESTE</Title>
        <Info>
          <DateView>
            <Icon name="event" size={18} color="#999" />
            <Text>26 de outubro, às 20hs</Text>
          </DateView>
          <Location>
            <Icon name="location-on" size={18} color="#999" />
            <Text>Jequitibás - Sobradinho/DF</Text>
          </Location>
          <Owner>
            <Icon name="person" size={18} color="#999" />
            <Text>Organizador: Jonatas</Text>
          </Owner>
        </Info>
        <ButtonSubscription onPress={() => {}}>
          Cancelar inscrição
        </ButtonSubscription>
      </Content>
    </Container>
  );
}
