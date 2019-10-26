import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';
import {
  Container,
  ViewDate,
  ButtonDatePrev,
  ButtonDateNext,
  Day,
  List,
} from './styles';
import Meetup from '~/components/Meetup';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <ViewDate>
          <ButtonDatePrev onPress={() => {}}>
            <Icon name="chevron-left" size={25} color="#FFF" />
          </ButtonDatePrev>
          <Day>26 de outubro</Day>
          <ButtonDateNext onPress={() => {}}>
            <Icon name="chevron-right" size={25} color="#FFF" />
          </ButtonDateNext>
        </ViewDate>

        <List
          data={data}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => <Meetup onSubscribe={() => {}} data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
