import {
  MEETUP_LIST_MEETUP_REQUEST,
  MEETUP_LIST_MEETUP_SUCCESS,
  MEETUP_CREATE_MEETUP_REQUEST,
  MEETUP_UPDATE_MEETUP_REQUEST,
  MEETUP_UPDATE_MEETUP_SUCCESS,
  MEETUP_CANCEL_MEETUP,
  MEETUP_FAILURE,
} from '../actionsTypes';

export function listMeetupsRequest() {
  return {
    type: MEETUP_LIST_MEETUP_REQUEST,
  };
}

export function listMeetupsSuccess(meetups) {
  return {
    type: MEETUP_LIST_MEETUP_SUCCESS,
    payload: { meetups },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: MEETUP_CREATE_MEETUP_REQUEST,
    payload: { meetup },
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: MEETUP_UPDATE_MEETUP_REQUEST,
    payload: { id, data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: MEETUP_UPDATE_MEETUP_SUCCESS,
    payload: { meetup },
  };
}

export function cancelMeetupRequest(meetupId) {
  return {
    type: MEETUP_CANCEL_MEETUP,
    payload: { meetupId },
  };
}

export function meetupFailure() {
  return {
    type: MEETUP_FAILURE,
  };
}
