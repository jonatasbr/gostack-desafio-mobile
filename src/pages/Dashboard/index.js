import React, {useState, useMemo} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {format, subDays, addDays} from 'date-fns';
import pt from 'date-fns/locale/pt';

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
  const [date, setDate] = useState(new Date());

  const now = useMemo(() => format(date, "d 'de' MMMM", {locale: pt}), [date]);

  function handleDatePrev() {
    setDate(subDays(date, 1));
  }
  function handleDateNext() {
    setDate(addDays(date, 1));
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
