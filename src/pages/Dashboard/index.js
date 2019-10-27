import React, {useState, useMemo, useEffect} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {format, subDays, addDays, formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

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

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);

  const now = useMemo(() => format(date, "d 'de' MMMM", {locale: pt}), [date]);

  async function loadMeetups() {
    const dateQuery = format(date, "yyyy'-'MM'-'dd", {locale: pt});
    const response = await api.get('meetups', {
      params: {date: dateQuery, page},
    });

    const data = response.data.map(meetup => {
      const dateFormated = formatRelative(parseISO(meetup.date), new Date(), {
        locale: pt,
        addSuffix: true,
      });
      return {
        ...meetup,
        dateFormated,
      };
    });
    setMeetups(data);
  }

  useEffect(() => {
    loadMeetups();
  }, [date, page]);

  async function handleSubscription(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);
      Alert.alert('Sucesso', 'Sua inscrição foi realizada com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao realizar inscrição');
    }
  }

  function handleDatePrev() {
    setDate(subDays(date, 1));
    setPage(1);
  }
  function handleDateNext() {
    setDate(addDays(date, 1));
    setPage(1);
  }

  return (
    <Background>
      <Header />
      <Container>
        <ViewDate>
          <ButtonDatePrev onPress={handleDatePrev}>
            <Icon name="chevron-left" size={25} color="#FFF" />
          </ButtonDatePrev>
          <Day>{now}</Day>
          <ButtonDateNext onPress={handleDateNext}>
            <Icon name="chevron-right" size={25} color="#FFF" />
          </ButtonDateNext>
        </ViewDate>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <Meetup
              onSubscription={() => handleSubscription(item.id)}
              data={item}
            />
          )}
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
