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

export default function Meetup({data}) {
  return (
    <Container key={data.id} past={data.past}>
      <Image
        source={{
          uri: data.image
            ? data.image.url
            : `https://api.adorable.io/avatar/50/${data.image.url}.png`,
        }}
      />
      <Content>
        <Title>{data.title}</Title>
        <Info>
          <DateView>
            <Icon name="event" size={18} color="#999" />
            <Text>{data.dateFormated}</Text>
          </DateView>
          <Location>
            <Icon name="location-on" size={18} color="#999" />
            <Text>{data.location}</Text>
          </Location>
          <Owner>
            <Icon name="person" size={18} color="#999" />
            <Text>{`Organizador: ${data.user.name}`}</Text>
          </Owner>
        </Info>
        {!data.past && (
          <ButtonSubscription onPress={() => {}}>
            Realizar inscrição
          </ButtonSubscription>
        )}
      </Content>
    </Container>
  );
}
