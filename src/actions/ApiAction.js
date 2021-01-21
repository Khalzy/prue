import ACTION_TYPES from './ActionTypes';

export const fetchData = () => ({
  type: ACTION_TYPES.PENDING,
});

export const fetchSuccess = (data) => ({
  type: ACTION_TYPES.SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: ACTION_TYPES.ERROR,
  payload: error,
});