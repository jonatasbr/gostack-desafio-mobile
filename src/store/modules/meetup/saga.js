import {Alert} from 'react-native';
import {all, put, call, takeLatest} from 'redux-saga/effects';

// import {format, parseISO} from 'date-fns';
// import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import {
  updateMeetupSuccess,
  listMeetupsSuccess,
  meetupFailure,
} from './actions';
import {
  MEETUP_LIST_MEETUP_REQUEST,
  MEETUP_CREATE_MEETUP_REQUEST,
  MEETUP_UPDATE_MEETUP_REQUEST,
  MEETUP_CANCEL_MEETUP,
} from '../actionsTypes';

export function* listMeetups() {
  try {
    const response = yield call(api.get, 'events');

    const data = response.data.map(meetup => ({
      ...meetup,
      // dateFormated: format(parseISO(meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
      //   locale: pt,
      // }),
    }));

    yield put(listMeetupsSuccess(data));
  } catch (err) {
    Alert.alert('Erro', 'Ocorreu um erro ao listar seus meetups!');

    yield put(meetupFailure());
  }
}

export function* createMeetup({payload}) {
  try {
    yield call(api.post, 'meetups', payload.meetup);

    Alert.alert('Sucesso', 'Meetup criado com sucesso');

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao cadastrar, confira os dados informados.',
    );

    yield put(meetupFailure());
  }
}

export function* updateMeetup({payload}) {
  const {id, data} = payload;

  try {
    const response = yield call(api.put, `meetups/${id}`, data);

    yield put(updateMeetupSuccess(response.data));

    Alert.alert('Sucesso', 'Meetup atualizado com sucesso');

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao atualizar, confira os dados informados.',
    );

    yield put(meetupFailure());
  }
}

export function requestDetailsMeetup({payload}) {
  // history.push(`/meetup/details/${payload.meetup.id}`);
}

export function* cancelMeetup({payload}) {
  const {meetupId} = payload;

  yield call(api.delete, `meetups/${meetupId}`);

  Alert.alert('Sucesso', 'Meetup cancelado com sucesso');

  // history.push('/');
}

export default all([
  takeLatest(MEETUP_LIST_MEETUP_REQUEST, listMeetups),
  takeLatest(MEETUP_CREATE_MEETUP_REQUEST, createMeetup),
  takeLatest(MEETUP_UPDATE_MEETUP_REQUEST, updateMeetup),
  takeLatest(MEETUP_CANCEL_MEETUP, cancelMeetup),
]);
