import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';
import {Container} from './styles';

export default function Profile() {
  return (
    <Background>
      <Header />
      <Container>
        <Text>Profile</Text>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
