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

export default function Subscription({data, onUnsubscription}) {
  return (
    <Container>
      <Image
        source={{
          uri: data.meetup.image
            ? data.meetup.image.url
            : `https://api.adorable.io/avatar/50/${data.meetup.image.url}`,
        }}
      />
      <Content>
        <Title>{data.meetup.title}</Title>
        <Info>
          <DateView>
            <Icon name="event" size={18} color="#999" />
            <Text>{data.dateFormated}</Text>
          </DateView>
          <Location>
            <Icon name="location-on" size={18} color="#999" />
            <Text>{data.meetup.location}</Text>
          </Location>
          <Owner>
            <Icon name="person" size={18} color="#999" />
            <Text>{`Organizador: ${data.meetup.user.name}`}</Text>
          </Owner>
        </Info>
        {!data.meetup.past && (
          <ButtonSubscription onPress={onUnsubscription}>
            Cancelar inscrição
          </ButtonSubscription>
        )}
      </Content>
    </Container>
  );
}
