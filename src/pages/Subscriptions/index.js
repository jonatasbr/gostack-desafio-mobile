import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';
import {Container, List} from './styles';

const data = [1, 2, 3, 4, 5];

import Subscription from '~/components/Subscription';

export default function Subscriptions() {
  return (
    <Background>
      <Header />
      <Container>
        <List
          data={data}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <Subscription onUnsubscription={() => {}} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
