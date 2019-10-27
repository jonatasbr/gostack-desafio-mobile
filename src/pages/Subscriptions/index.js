import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';
import {Container, List} from './styles';

import Subscription from '~/components/Subscription';

import api from '~/services/api';

function Subscriptions({isFocused}) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscription() {
    const response = await api.get('subscriptions');

    const data = response.data.map(meetup => {
      const dateFormated = formatRelative(
        parseISO(meetup.meetup.date),
        new Date(),
        {
          locale: pt,
          addSuffix: true,
        },
      );
      return {
        ...meetup,
        dateFormated,
      };
    });
    setSubscriptions(data);
  }

  useEffect(() => {
    if (isFocused) loadSubscription();
  }, [isFocused]);

  async function handleUnsubscription(id) {
    try {
      await api.delete(`subscriptions/${id}`);
      loadSubscription();
      Alert.alert('Sucesso', 'Sua inscrição foi cancelada');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao cancelar inscrição');
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <Subscription
              onUnsubscription={() => handleUnsubscription(item.id)}
              data={item}
            />
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

export default withNavigationFocus(Subscriptions);
